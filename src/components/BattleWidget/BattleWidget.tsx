// src/components/BattleWidget/BattleWidget.tsx
import React from "react";
import { type PokemonDetail, type JobStatus } from "../../types/Pokemon";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { BattleProgressBar } from "../BattleProgressBar/BattleProgressBar";
import { BattleButton } from "../BattleButton/BattleButton";
import "./BattleWidget.scss";

// INTERFACCIA ESPLICITA: Dichiariamo cosa serve per funzionare
interface BattleWidgetProps {
  pokemon: PokemonDetail | null;
  status: JobStatus; // 'idle' | 'queued' | 'running' | 'done' | 'failed'
  progress: number;
  error: string | null;
  onStartBattle: () => void; // Callback per quando si clicca
}

export const BattleWidget = ({
  pokemon,
  status,
  progress,
  error,
  onStartBattle,
}: BattleWidgetProps) => {
  if (!pokemon) return null;

  // Logica di visualizzazione pura
  const getButtonText = () => {
    switch (status) {
      case "running":
      case "queued":
        return "STA COMBATTENDO...";
      case "failed":
        return "SIMULA NUOVAMENTE";
      case "done":
        return pokemon.health_points === 0
          ? "HAI PERSO, RIPROVA!"
          : "VITTORIA, LOTTA ANCORA";
      default:
        return "SIMULA COMBATTIMENTO";
    }
  };

  return (
    <aside className="battle-widget">
      {/* 4. LOGICA VISIVA: Errore vs Carta */}
      {status === "failed" ? (
        <div className="battle-widget__error-box">
          {/* Placeholder grigio come da immagine */}
          <div className="battle-widget__placeholder"></div>
          <p>oops.. qualcosa è andato storto!</p>
        </div>
      ) : (
        <div
          className={`battle-widget__card ${status === "failed" ? "is-gray" : ""}`}
        >
          <PokemonCard pokemon={pokemon} />
        </div>
      )}

      {/* CONTROLLI */}
      <div className="battle-widget__controls">
        {status !== "failed" && (
          <BattleProgressBar
            progress={progress}
            status={status}
            isVisible={status === "running" || status === "queued"}
          />
        )}

        <BattleButton
          onClick={onStartBattle}
          disabled={status === "queued" || status === "running"}
        >
          {getButtonText()}
        </BattleButton>

        {error && status !== "failed" && (
          <p className="battle-widget__tech-error">{error}</p>
        )}
      </div>
    </aside>
  );
};
