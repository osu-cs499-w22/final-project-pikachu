/** @jsxImportSource @emotion/react */

import React from "react";
import { css, jsx } from "@emotion/react";

import Button from "./Button";
import Dpad from "./Dpad";
import Bars from "./Bars";

const styles = css`
  width: 90%;
  display: flex;
  justify-content: space-around;
`;

const IconBar = () => {
  return (
    <div css={styles} className='icon-bar'>
      <Button />
      <Bars color1='f2330d' color2='77aaff' rounded={true} />
      <Dpad />
    </div>
  );
};

export default IconBar;
