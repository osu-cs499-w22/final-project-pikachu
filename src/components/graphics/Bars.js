/** @jsxImportSource @emotion/react */

import React from "react";
import { css, jsx } from "@emotion/react";

const Bars = ({ color1, color2, rounded }) => {
  const styles = css`
    display: flex;

    & > div {
      width: 7em;
      height: 0.7em;
      margin: 0.5em;

      border: 3px solid black;
      border-radius: ${rounded ? "3em" : "none"};
    }

    .red {
      background-color: #${color1};
    }

    .blue {
      background-color: #${color2};
    }
  `;

  return (
    <div css={styles} className='bars'>
      <div className='red'></div>
      <div className='blue'></div>
    </div>
  );
};

export default Bars;
