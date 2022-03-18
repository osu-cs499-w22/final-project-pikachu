/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css, jsx } from "@emotion/react";

import { FormNuzlocke } from "../components/FormNuzlocke";
import { usePokemonByVersion } from "../hooks/usePokemonByVersion";

const NuzlockePage = () => {
  const [version, setVersion] = useState("");
  const [type, setType] = useState("");
  const [currEntry, setCurrEntry] = useState(0);

  const [pokemonArray, loading, error] = usePokemonByVersion(version, type);

  console.log(typeof pokemonArray.length);

  if (pokemonArray.length > 0) console.log("this condition is true");
  return (
    <div className='screen'>
      <FormNuzlocke setVersion={setVersion} setType={setType} />
      {pokemonArray.length > 0 ? (
        // just for testing, replace with pokemonList[currEntry].sprites
        <img
          src={"http://placekitten.com/480/480"}
          width='300'
          alt='none'
        ></img>
      ) : (
        "null"
      )}
    </div>
  );
};

export default NuzlockePage;
