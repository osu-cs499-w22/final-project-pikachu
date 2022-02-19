/** @jsxImportSource @emotion/react */
import React from "react";
import ReactDOM from "react-dom";

import { Global, css, jsx } from "@emotion/react";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const globalStyles = css`
  @import "open-props/style";

  body {
    margin: 0;
    font-family: sans-serif; // TODO: Change font
    box-sizing: border-box;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
