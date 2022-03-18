/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { css, jsx } from "@emotion/react";
import { Route, Routes } from "react-router-dom";

import "open-props/style";
import Navbar from "./components/Navbar";
import MovesPage from "./pages/MovesPage";
import FavoritesPage from "./pages/FavoritesPage";
import NuzlockePage from "./pages/NuzlockePage";
import GrowthPage from "./pages/GrowthPage";
import SettingsPage from "./pages/SettingsPage";
import Indicator from "./components/graphics/Indicator";

import leftBackground from "./pokedexLeft.png";
import rightBackgrond from "./pokedexRight.png";
import Lights from "./components/graphics/Lights";
import IconBar from "./components/graphics/IconBar";
import RightIcons from "./components/graphics/rightIcons";
import HomePage from "./pages/HomePage";

function App() {
  const [selectedColor, setSelectedColor] = useState("red");
  const [favPokemons, setFavPokemons] = useState([]);

  const colors = {
    red: "none",
    blue: "hue-rotate(250deg) brightness(100%);",
    green: "hue-rotate(150deg) brightness(100%);",
    yellow: "hue-rotate(60deg) brightness(175%)",
  };

  const styles = css`
    background-color: black;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    .left {
      background-image: url(${leftBackground});
      filter: ${colors[`${selectedColor}`]};
      background-size: 95%;
      background-repeat: no-repeat;
      height: 95%;
      position: relative;
      left: 1.5em;
      flex: 1 1 60%;

      .indicator {
        margin: 2.5em 0 0 2.5em;
      }

      .lights {
        position: absolute;
        left: 13em;
        top: 3.5em;
      }

      .screen {
        width: 75%;
        height: 50%;
        background-color: white;
        position: relative;
        top: 5%;
        left: 8%;
        border: 5px solid black;
      }

      .icons {
        position: relative;
        top: 10%;
        margin: 0 auto;
        width: 90%;

        display: flex;
      }
    }

    .right {
      background-image: url(${rightBackgrond});
      filter: ${colors[`${selectedColor}`]};
      background-size: 95%;
      background-repeat: no-repeat;
      height: 85%;
      position: relative;
      right: 3.5em;
      flex: 1 1 40%;

      .navbar {
        position: relative;
        top: 20%;
        left: 10%;
      }

      .right-icon-bar {
        position: relative;
        top: 15em;
        left: 3em;
      }
    }
  `;

  return (
    <div css={styles}>
      <div className='left'>
        <Indicator />
        <Lights />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/moves' element={<MovesPage />} />
          <Route
            path='/favorites'
            element={<FavoritesPage favorites={favPokemons} />}
          />
          <Route
            path='/nuzlocke'
            element={<NuzlockePage addFav={setFavPokemons} />}
          />
          <Route path='/growth' element={<GrowthPage />} />
          <Route
            path='/settings'
            element={<SettingsPage changeColor={setSelectedColor} />}
          />
        </Routes>
        <div className='icons'>
          <IconBar />
        </div>
      </div>
      <div className='right'>
        <Navbar />
        <RightIcons />
      </div>
    </div>
  );
}

export default App;
