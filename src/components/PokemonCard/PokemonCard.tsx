import { type PokemonDetail } from "../../types/Pokemon";
import { TypeBadge } from "../TypeBadge/TypeBadge";
import "./PokemonCard.scss";

// Importa l'asset del teschio se ce l'hai locale, o usa il path stringa
// import skullIcon from '../../assets/icons/skull.svg';
const SKULL_ICON_URL = "/icons/skull.svg"; // Assumiamo questo path pubblico per ora

interface PokemonCardProps {
  pokemon: PokemonDetail;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const {
    name,
    card_number, // "054"
    health_points,
    level,
    image_url,
    short_description, // Usiamo short o long in base a cosa vuoi nella card
    typology,
    vulnerability,
    energy,
    rarity,
  } = pokemon;

  // --- LOGICA DI STATO ---
  const isDefeated = health_points === 0;
  const isWarning = health_points > 0 && health_points <= 20;

  // Classi dinamiche
  const headerClass = `pokemon-card__header ${
    isDefeated
      ? "pokemon-card__header--defeated"
      : isWarning
        ? "pokemon-card__header--warning"
        : ""
  }`;

  const hpColClass = `pokemon-card__stat-col ${
    isDefeated
      ? "pokemon-card__stat-col--hp-defeated"
      : isWarning
        ? "pokemon-card__stat-col--hp-warning"
        : ""
  }`;

  return (
    <article className="pokemon-card">
      {/* 1. HEADER: Numero + Badge */}
      <header className={headerClass}>
        <span>N. {card_number}</span>
        {/* Passiamo il badge dentro l'header come da design */}
        <TypeBadge name={typology.name} iconUrl={typology.icon_url} />
      </header>

      {/* 2. IMMAGINE */}
      <div className="pokemon-card__image-container">
        {isDefeated && (
          <div className="pokemon-card__skull-overlay">
            <img src={SKULL_ICON_URL} alt="Defeated" />
          </div>
        )}
        <img
          src={image_url}
          alt={name}
          className={`pokemon-card__image ${isDefeated ? "pokemon-card__image--defeated" : ""}`}
        />
      </div>

      {/* 3. CORPO */}
      <div className="pokemon-card__body">
        <h3 className="pokemon-card__title">{name}</h3>

        {/* Descrizione HTML */}
        <div
          className="pokemon-card__description"
          dangerouslySetInnerHTML={{ __html: short_description }}
        />

        {/* 4. GRIGLIA STATS */}
        <div className="pokemon-card__stats-grid">
          {/* Colonna 1: Livello */}
          <div className="pokemon-card__stat-col">
            <img src="/icons/equalizer.svg" alt="lv" />{" "}
            {/* Assicurati di avere icona lv */}
            <span>LV. {level}</span>
          </div>

          {/* Colonna 2: Vulnerabilità */}
          <div className="pokemon-card__stat-col">
            <img src={"/icons/eco.svg"} alt="vul" />
            <span>VUL. {vulnerability.value}</span>
          </div>

          {/* Colonna 3: PS (Questa cambia colore!) */}
          <div className={hpColClass}>
            {/* Icona Cuore se vivo, Teschio se morto (opzionale, da design sembra cuore o niente) */}
            <img
              src={isDefeated ? SKULL_ICON_URL : "/icons/favorite.svg"}
              alt="hp"
              style={{ width: 14 }}
            />
            <span>PS. {health_points}</span>
          </div>
        </div>

        {/* 5. FOOTER */}
        <div className="pokemon-card__footer">
          <span>{rarity.replace(/_/g, " ")}</span>{" "}
          {/* "pokèmon_base" -> "pokèmon base" */}
          <div className="pokemon-card__footer-icons">
            <img src={typology.icon_url} alt={typology.name} />
            <img src={energy.icon_url} alt={energy.name} />

            {/* <TypeBadge name={typology.name} iconUrl={typology.icon_url} /> */}
            {/* Qui potresti metterne altri se il mock li avesse */}
          </div>
        </div>
      </div>
    </article>
  );
};
