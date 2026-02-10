import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemonDetail } from "../../services/pokemonService";
import { type PokemonDetail } from "../../types/Pokemon";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import { BattleButton } from "../../components/BattleButton/BattleButton";
import { BattleProgressBar } from "../../components/BattleProgressBar/BattleProgressBar";
import { Loader } from "../../components/Loader/Loader";
import { useBattle } from "../../hooks/useBattle";
import "./DetailPage.scss";
import { BattleWidget } from "../../components/BattleWidget/BattleWidget";

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Stati della pagina
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState<string | null>(null);

  // Hook per la logica di Battaglia
  const {
    startBattle,
    status,
    progress,
    battleResultHp,
    error: battleError,
  } = useBattle();

  // 1. Caricamento Dati Iniziale
  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const data = await getPokemonDetail(id);
        setPokemon(data);
      } catch (err) {
        setPageError("Pokémon non trovato o errore server.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  // 2. Aggiornamento HP quando finisce la battaglia
  useEffect(() => {
    if (status === "done" && battleResultHp !== null && pokemon) {
      setPokemon((prev) =>
        prev ? { ...prev, health_points: battleResultHp } : null,
      );
    }
  }, [status, battleResultHp]);

  if (loading)
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: 100 }}
      >
        <Loader />
      </div>
    );
  if (pageError || !pokemon)
    return (
      <div className="error-msg" style={{ textAlign: "center", marginTop: 50 }}>
        {pageError || "Non trovato"}
      </div>
    );

  return (
    <div className="detail-page">
      {/* 1. HERO BANNER SFONDO */}
      <div
        className="detail-page__banner"
        style={{ backgroundImage: `url('/assets/images/source1.png')` }}
      ></div>

      {/* 2. MAIN CARD FLOTTANTE */}
      <main className="detail-page__main-card">
        {/* COLONNA SINISTRA: TESTI */}
        <div className="detail-page__left">
          <Link to="/items" className="detail-page__back-btn">
            ←
          </Link>

          <h1 className="detail-page__title">
            {pokemon.name}{" "}
            <span>| {pokemon.subtitle || "Il Re dello Stress"}</span>
          </h1>

          <div
            className="detail-page__description"
            dangerouslySetInnerHTML={{ __html: pokemon.long_description }}
          />
        </div>

        {/* COLONNA DESTRA: WIDGET INTERATTIVO */}
        <BattleWidget
          pokemon={pokemon}
          status={status}
          progress={progress}
          error={battleError}
          onStartBattle={() => id && startBattle(id)}
        />
      </main>

      {/* 3. SEZIONE EXTRA DETAILS (Immagine unica dal mock) */}
      <section className="detail-page__extra">
        <img
          src={pokemon.extra_details} // Usa direttamente l'URL da data.ts (/assets/extra_details.png)
          alt="Dettagli Extra"
          className="detail-page__extra-img"
        />
      </section>
    </div>
  );
};
