/** @jsxImportSource @emotion/react */

import React from "react";
import { css, jsx } from "@emotion/react";

const HomePage = () => {
  const styles = css`
    text-align: center;
    font-size: 1.35em;
    h3,
    h2 {
      margin: 3em;
    }
  `;

  return (
    <div css={styles} className='screen'>
      <h2>Welcome to the Pokedex!</h2>
      <h3>
        Use the navigation bar to the right to explore information about Pokemon
      </h3>
    </div>
  );
};

export default HomePage;
