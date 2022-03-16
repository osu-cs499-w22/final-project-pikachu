/** @jsxImportSource @emotion/react */

import React from "react";
import { css, jsx } from "@emotion/react";
import StatusButton from "./StatusButton";
import RedButton from "./RedButton";
import Bars from "./Bars";
import WhiteButtons from "./WhiteButtons";

const styles = css`
  width: 95%;
  display: flex;

  .red-button {
    position: relative;
    bottom: 3em;
  }

  .white-buttons {
    position: relative;
    top: 1em;
    right: 4em;
  }

  .bars {
    position: relative;
    bottom: 6em;
    left: 1em;
  }

  .status-button {
    position: relative;
    right: 6em;
  }
`;

const RightIcons = () => {
  return (
    <div css={styles} className='right-icon-bar'>
      <RedButton />
      <RedButton />

      <WhiteButtons />

      <Bars color1='444444' color2='444444' rounded={false} />
      <StatusButton />
    </div>
  );
};

export default RightIcons;
