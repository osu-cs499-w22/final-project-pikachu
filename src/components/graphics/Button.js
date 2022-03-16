/** @jsxImportSource @emotion/react */

import React from "react";
import { css, jsx } from "@emotion/react";

const styles = css`
  width: 3em;
  height: 3em;
  background-color: hsla(0deg, 0%, 40%, 100%);
  border-radius: 50%;
  border: 4px solid black;
`;

const Button = () => {
  return <div css={styles} className='button'></div>;
};

export default Button;
