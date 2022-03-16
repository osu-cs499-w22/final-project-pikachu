/** @jsxImportSource @emotion/react */

import React from "react";
import { css, jsx } from "@emotion/react";

const styles = css`
  width: 4em;
  height: 4em;
  background-color: #ffcc64;
  border: 7px solid black;
  border-radius: 50%;
`;

const StatusButton = () => {
  return <div css={styles} className='status-button'></div>;
};

export default StatusButton;
