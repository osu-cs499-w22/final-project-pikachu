/** @jsxImportSource @emotion/react */

import { Route, Routes } from "react-router-dom";

import { css, jsx } from "@emotion/react";

import "open-props/style";
import Navbar from "./components/Navbar";
import MovesPage from "./pages/MovesPage";
import BreedingPage from "./pages/BreedingPage";
import NuzlockePage from "./pages/NuzlockePage";
import GrowthPage from "./pages/GrowthPage";
import SettingsPage from "./pages/SettingsPage";
import Indicator from "./components/graphics/Indicator";

import leftBackground from "./pokedexLeft.png";
import rightBackgrond from "./pokedexRight.png";
import Lights from "./components/graphics/Lights";
import IconBar from "./components/graphics/IconBar";

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
    // make this depend on context/state
    filter: ${colors.red};
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
      position: fixed;
      left: 15em;
      top: 5em;
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
    // make this depend on context/state
    filter: ${colors.red};
    background-size: 95%;
    background-repeat: no-repeat;
    height: 85%;
    position: relative;
    right: 3.5em;
    flex: 1 1 40%;
  }

  .navbar {
    position: relative;
    top: 20%;
    left: 10%;
  }
`;

function App() {
  return (
    <div css={styles}>
      <div className='left'>
        <Indicator />
        <Lights />
        <Routes>
          <Route path='/' element={<div className='screen'></div>} />
          <Route path='/moves' element={<MovesPage />} />
          <Route path='/breeding' element={<BreedingPage />} />
          <Route path='/nuzlocke' element={<NuzlockePage />} />
          <Route path='/growth' element={<GrowthPage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>
        <div className='icons'>
          <IconBar />
        </div>
      </div>
      <div className='right'>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
