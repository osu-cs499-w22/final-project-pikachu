/** @jsxImportSource @emotion/react */

import React from "react";
import { css, jsx } from "@emotion/react";

const styles = css`
  display: flex;

  & > div {
    width: 4em;
    height: 4em;
    background-color: #ffffff;

    border: 6px solid black;
    border-radius: 15px;

    box-shadow: -6px -6px 3px inset #666666;
  }
`;

const WhiteButtons = () => {
  return (
    <div css={styles} className='white-buttons'>
      <div></div>
      <div></div>
    </div>
  );
};

export default WhiteButtons;
