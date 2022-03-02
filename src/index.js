/** @jsxImportSource @emotion/react */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Global, css, jsx } from "@emotion/react";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const globalStyles = css`
  /* ! FONT NOT WORKING CURRENTLY */
  @font-face {
    font-family: "Arcade";
    src: url("src/fonts/Arcade.ttf");
  }

  body {
    margin: 0;
    font-family: sans-serif; // TODO: Change font
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
