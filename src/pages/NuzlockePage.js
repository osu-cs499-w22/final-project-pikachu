/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css, jsx } from "@emotion/react";

import { FormNuzlocke } from "../components/FormNuzlocke";
import { usePokemonByVersion } from "../hooks/usePokemonByVersion";

const NuzlockePage = () => {
  const [version, setVersion] = useState("");
  const [type, setType] = useState("");
  const [currEntry, setCurrEntry] = useState(0);

  const [pokemonList, loading, error] = usePokemonByVersion(version, type);
  console.log(pokemonList);
  let currPokemon = pokemonList[0];
  if (currPokemon) console.log(currPokemon);

  console.log(currPokemon);
  return (
    <div className='screen'>
      <FormNuzlocke setVersion={setVersion} setType={setType} />
      {pokemonList[currEntry] ? (
        <img
          src={`${currPokemon.sprites.front_default}`}
          width='500'
          height='600'
        />
      ) : (
        "null"
      )}
    </div>
  );
};

export default NuzlockePage;
