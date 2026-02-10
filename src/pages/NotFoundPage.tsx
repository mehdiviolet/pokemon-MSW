import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

// Percorso immagine fornito da te (source16.png)
const IMAGE_404_URL = "/assets/images/source16.png";

export const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <img
        src={IMAGE_404_URL}
        alt="404 Error"
        className="not-found-page__image"
      />

      <h2 className="not-found-page__title">Ooops!</h2>

      <p className="not-found-page__text">
        Sembra che ci sia stato un problema, torna all'homepage.
      </p>

      <Link to="/" className="not-found-page__button">
        VAI ALLA HOME
      </Link>
    </div>
  );
};
