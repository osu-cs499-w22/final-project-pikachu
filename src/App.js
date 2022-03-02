/** @jsxImportSource @emotion/react */

import { Route, Routes } from "react-router-dom";

import { css, jsx } from "@emotion/react";

import "open-props/style";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* ! Temp testing for navbar */}
      <Navbar />

      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/moves' element={<></>} />
        <Route path='/breeding' element={<></>} />
        <Route path='/nuzlocke' element={<></>} />
        <Route path='/growth' element={<></>} />
        <Route path='/settings' element={<></>} />
      </Routes>
    </>
  );
}

export default App;
