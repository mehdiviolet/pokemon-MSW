import { Link, Outlet } from "react-router-dom";
import "./Layout.scss";

// Percorso del logo come indicato
const LOGO_URL = "/assets/images/source0.png";

export const Layout = () => {
  return (
    <div className="app-layout">
      {/* 1. HEADER BIANCO CON LOGO */}
      <header className="app-layout__header">
        <Link to="/">
          <img src={LOGO_URL} alt="Pokémon TCG" className="app-layout__logo" />
        </Link>
      </header>

      {/* 2. CONTENUTO CENTRALE */}
      <main className="app-layout__main">
        <Outlet />
      </main>

      {/* 3. FOOTER MINIMAL */}
      <footer className="app-layout__footer">TheCardGame©</footer>
    </div>
  );
};
