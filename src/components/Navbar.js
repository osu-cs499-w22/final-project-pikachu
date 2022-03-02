/** @jsxImportSource @emotion/react */

import React from "react";
import { NavLink } from "react-router-dom";

import { css, jsx } from "@emotion/react";

const styles = css`
  width: fit-content;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  font-family: "Arcade", sans-serif; // ! NOT WORKING CURRENTLY

  div {
    text-align: center;
    font-size: x-large;
    padding: 1em;
    background-color: #7caafa;
    border: 0.1em solid black;
    border-radius: 3px;
    box-shadow: inset -0.2em -0.25em 0.1em #6666ff;
  }

  .active,
  .active div {
    /* selected styles, possible to do some inset to represent a depressed button */
    /* WORK IN PROGRESS */
    background-color: #6666ee;
    box-shadow: inset -0.2em -0.2em 0.1em #7caafa;
  }
`;

const Navbar = () => {
  return (
    <div css={styles}>
      <NavLink to='/'>
        <div>Home</div>
      </NavLink>

      <NavLink to='/moves'>
        <div>Moves</div>
      </NavLink>

      <NavLink to='/breeding'>
        <div>Breeding</div>
      </NavLink>

      <NavLink to='/nuzlocke'>
        <div>Nuzlocke</div>
      </NavLink>

      <NavLink to='/growth'>
        <div>Growth</div>
      </NavLink>

      <NavLink to='/settings'>
        <div>Settings</div>
      </NavLink>
    </div>
  );
};

export default Navbar;
