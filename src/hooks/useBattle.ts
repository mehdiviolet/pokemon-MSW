// src/hooks/useBattle.ts
import { useState, useRef, useEffect } from "react";
import { startBattleJob, getJobStatus } from "../services/pokemonService";
import { type JobStatus } from "../types/Pokemon";

export const useBattle = () => {
  // Stati per la UI
  const [status, setStatus] = useState<JobStatus>("idle"); // idle | queued | running | done | failed
  const [progress, setProgress] = useState(0);
  const [battleResultHp, setBattleResultHp] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Ref per salvare l'ID del timer (così possiamo spegnerlo)
  const intervalRef = useRef<number | null>(null);

  // Funzione per pulire il timer (stop polling)
  const stopPolling = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Funzione Principale: SCATENATE L'INFERNO!
  const startBattle = async (pokemonId: string) => {
    // ⚠️ PREVENZIONE DUPLICATI:
    // Prima di farne partire uno nuovo, uccidiamo qualsiasi timer vecchio esistente.
    stopPolling();

    try {
      // 1. Reset stati
      setStatus("queued");
      setProgress(0);
      setError(null);
      setBattleResultHp(null);

      // 2. Chiamata API per iniziare (POST)
      const { job_id } = await startBattleJob(pokemonId);

      // 3. Avvia il polling (chiede info ogni 1 secondo)
      intervalRef.current = window.setInterval(async () => {
        try {
          const data = await getJobStatus(job_id);

          // Aggiorna la UI
          setStatus(data.status);
          setProgress(data.progress);

          // Se è finito o fallito, ferma tutto
          if (data.status === "done") {
            setBattleResultHp(data.health_points);
            stopPolling();
          } else if (data.status === "failed") {
            stopPolling();
            setError("oops.. qualcosa è andato storto!");
          }
        } catch (err) {
          setError("Errore di connessione durante la battaglia");
          stopPolling();
        }
      }, 1000); // 1000ms = 1 secondo
    } catch (err) {
      setError("Impossibile avviare la battaglia");
      setStatus("failed");
    }
  };

  // Cleanup: Se l'utente cambia pagina mentre combatte, spegniamo il timer
  useEffect(() => {
    return () => stopPolling();
  }, []);

  // Esportiamo tutto quello che serve alla Pagina Dettaglio
  return {
    startBattle, // Funzione da collegare al bottone
    status, // Per mostrare/nascondere la barra
    progress, // Valore della barra
    battleResultHp, // Risultato finale (HP rimasti)
    error, // Eventuali errori
  };
};
