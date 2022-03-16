/** @jsxImportSource @emotion/react */

import React from "react";
import { css, jsx } from "@emotion/react";

const styles = css`
  display: flex;

  & > * {
    margin: 0.3em;
    width: 1em;
    height: 1em;
    border: 3px solid black;
    border-radius: 50%;
  }

  .red {
    background-color: red;
  }
  .yellow {
    background-color: yellow;
  }
  .green {
    background-color: green;
  }
`;

const Lights = () => {
  return (
    <div className='lights' css={styles}>
      <div className='red'></div>
      <div className='yellow'></div>
      <div className='green'></div>
    </div>
  );
};

export default Lights;
