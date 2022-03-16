/** @jsxImportSource @emotion/react */

import React from "react";
import { css, jsx } from "@emotion/react";

const styles = css`
  width: 1em;
  height: 1em;
  margin: 0.5em;

  background-color: red;
  border: 2px solid black;
  border-radius: 50%;
`;

const RedButton = () => {
  return <div css={styles} className='red-button'></div>;
};

export default RedButton;
