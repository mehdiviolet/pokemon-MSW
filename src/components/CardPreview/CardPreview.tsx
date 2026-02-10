import React from "react";
import { Link } from "react-router-dom";
import { type PokemonListItem } from "../../types/Pokemon";
import "./CardPreview.scss";

// Il componente accetta le proprietà di un elemento della lista
export const CardPreview = ({
  id,
  name,
  image_url,
  short_description,
}: PokemonListItem) => {
  return (
    <Link to={`/items/${id}`} className="card-preview">
      <div className="card-preview__image-wrapper">
        <img src={image_url} alt={name} className="card-preview__image" />
      </div>

      <div className="card-preview__content">
        <h3 className="card-preview__title">{name}</h3>
        <p className="card-preview__description">{short_description}</p>
      </div>
    </Link>
  );
};
