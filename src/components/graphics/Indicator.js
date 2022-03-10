/** @jsxImportSource @emotion/react */

import React from "react";

import { css, jsx } from "@emotion/react";

const Indicator = () => {
  const styles = css`
    width: 6em;
    height: 6em;
    background-color: white;
    border-radius: 50%;
    border: 4px solid black;

    display: flex;
    justify-content: center;
    align-items: center;

    .inner {
      width: 5em;
      height: 5em;
      background-color: #3197cc;
      border: 4px solid black;
      border-radius: 50%;
    }
  `;

  return (
    <div css={styles} className='indicator'>
      <div className='inner'></div>
    </div>
  );
};

export default Indicator;
