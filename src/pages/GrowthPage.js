/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css, jsx } from "@emotion/react";

import { useGrowthRate } from "../hooks/useGrowthRate";
import Graph from "../components/Graph";

const styles = css`
  text-align: center;

  .exp-chart {
    height: 63%;
  }

  .input-container {
    width: 100%;

    img {
      margin: 0;
      height: 100%;
    }

    * {
      margin: 0;
    }

    input {
      width: 75%;
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 3px solid black;
      font-size: 2em;
      font-family: Arcade;
    }

    input:focus {
      outline: none;
    }
  }
`;

const GrowthPage = () => {
  const [pokemon, setPokemon] = useState("");
  const [query, setQuery] = useState("");

  const [growthRate, loading, error] = useGrowthRate(query);

  if (growthRate.hasOwnProperty("levels") && growthRate.levels.length > 0) {
    var data = [
      {
        id: "exp",
        color: "blue",
        data: growthRate.levels.map((obj) => ({
          x: obj.level,
          y: obj.experience,
        })),
      },
    ];
    console.log(data);
  }

  return (
    <div css={styles} className='screen'>
      <h1>Pokemon Growth Rates!</h1>
      <div className='exp-chart'>
        {!loading && !error && !growthRate.hasOwnProperty("levels") && (
          <h2>Enter a Pokemon to check its Growth Rate! </h2>
        )}
        {!loading &&
          !error &&
          growthRate &&
          growthRate.hasOwnProperty("levels") && <Graph data={data} />}
      </div>
      <div className='input-container'>
        <input onChange={(e) => setPokemon(e.target.value)} type='text' />
        <img
          onClick={() => setQuery(pokemon)}
          src='https://img.icons8.com/ios-filled/50/000000/arrow.png'
        />
      </div>
    </div>
  );
};

export default GrowthPage;
