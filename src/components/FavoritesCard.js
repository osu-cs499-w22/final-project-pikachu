/** @jsxImportSource @emotion/react */

import React from "react";
import { css, jsx } from "@emotion/react";

const FavoriteCard = ({ name, photo }) => {
  const styles = css`
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 50%;
    padding: 0.5em;
    margin: 0.5em;
    box-shadow: 0.3em 0.3em lightblue;
    border-bottom: 8px ridge black;
    border-radius: 2em;
  `;

  return (
    <div css={styles}>
      <img src={photo} />
      <h3>{name}</h3>
    </div>
  );
};

export default FavoriteCard;
