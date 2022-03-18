/** @jsxImportSource @emotion/react */

import React from "react";
import { css, jsx } from "@emotion/react";

const SettingsPage = ({ changeColor }) => {
  const styles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      font-size: xx-large;
      margin-bottom: 3em;
    }

    label {
      margin: 1em;
      font-size: x-large;
    }

    select {
      width: 40%;
      font-size: large;
    }
  `;

  return (
    <div css={styles} className='screen'>
      <h1>Settings</h1>
      <label htmlFor='color'>Pokedex Color</label>
      <select
        name='color'
        id='color'
        onChange={(e) => changeColor(e.target.value)}
      >
        <option value='red'>Red</option>
        <option value='blue'>Blue</option>
        <option value='green'>Green</option>
        <option value='yellow'>Yellow</option>
      </select>
    </div>
  );
};

export default SettingsPage;
