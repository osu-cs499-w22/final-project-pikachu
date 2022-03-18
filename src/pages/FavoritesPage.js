/** @jsxImportSource @emotion/react */

import React from "react";
import { css, jsx } from "@emotion/react";
import FavoriteCard from "../components/FavoritesCard";

const styles = css`
  text-align: center;
  font-size: x-large;

  & > div {
    display: flex;
    flex-flow: row wrap;
    max-height: 75%;
    overflow-y: scroll;
  }
`;

const FavoritesPage = ({ favorites }) => {
  return (
    <div css={styles} className='screen'>
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        <div>
          {favorites.map((pokemon) => (
            <FavoriteCard
              key={pokemon.id}
              name={pokemon.name}
              photo={pokemon.sprites.other["official-artwork"].front_default}
            />
          ))}
        </div>
      ) : (
        "You haven't added any Pokemon to your favorites"
      )}
    </div>
  );
};

export default FavoritesPage;
