// src/components/Loader/Loader.tsx
import "./Loader.scss";

export const Loader = () => {
  return (
    <div className="loader-overlay">
      <div
        className="pokeball-spinner"
        aria-label="Caricamento in corso..."
        role="status"
      ></div>
    </div>
  );
};
