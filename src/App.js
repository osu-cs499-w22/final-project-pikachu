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

const styles = css`
  background-color: black;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .left {
    background-image: url(${leftBackground});
    background-size: 95%;
    background-repeat: no-repeat;
    /* width: 60vw; */
    height: 95%;
    position: relative;
    left: 1.5em;
    flex: 1 1 60%;
  }

  .right {
    background-image: url(${rightBackgrond});
    background-size: 95%;
    background-repeat: no-repeat;
    /* width: 40vw; */
    height: 85%;
    position: relative;
    right: 3.5em;
    flex: 1 1 40%;
  }

  .screen {
    width: 75%;
    height: 50%;
    background-color: white;
    position: relative;
    top: 25%;
    left: 8%;
    border: 5px solid black;
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
        <Routes>
          <Route path='/' element={<div className='screen'></div>} />
          <Route path='/moves' element={<MovesPage />} />
          <Route path='/breeding' element={<BreedingPage />} />
          <Route path='/nuzlocke' element={<NuzlockePage />} />
          <Route path='/growth' element={<GrowthPage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>
      </div>
      <div className='right'>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
