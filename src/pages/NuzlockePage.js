/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { css, jsx } from "@emotion/react";

import { FormNuzlocke } from "../components/FormNuzlocke";
import { usePokemonByVersion } from "../hooks/usePokemonByVersion";
import { useSpecies } from "../hooks/useSpecies";

const styles = css`
  display: flex;
  flex-direction: column;
  text-align: center;

  fieldset {
    border: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .sprite {
    object-fit: contain;
  }

  .page-selectors {
    margin: auto auto 1em auto;
    display: flex;
    align-items: center;
  }
`;

const NuzlockePage = () => {
  const [version, setVersion] = useState("");
  const [type, setType] = useState("");
  const [generation, setGeneration] = useState("");
  const [currEntry, setCurrEntry] = useState(0);

  const [pokemonArray, loading, error] = usePokemonByVersion(version, type);
  const [pokemonSpecies, loadingSpecies, errorSpecies] = useSpecies(
    pokemonArray,
    type
  );

  var gens = {
    "red-blue": "generation-i",
    yellow: "generation-i",
    "gold-silver": "generation-ii",
    crystal: "generation-ii",
    "ruby-sapphire": "generation-iii",
    emerald: "generation-iii",
    "firered-leafgreen": "generation-iii",
    "diamond-pearl": "generation-iv",
    platinum: "generation-iv",
    "heartgold-soulsilver": "generation-iv",
    "black-white": "generation-v",
    "black-2-white-2": "generation-v",
    "x-y": "generation-vi",
    "omega-ruby-alpha-sapphire": "generation-vi",
    "sun-moon": "generation-vii",
    "ultra-sun-ultra-moon": "generation-vii",
  };
  let pokemon = pokemonSpecies[currEntry];
  return (
    <div css={styles} className='screen'>
      <h2>Nuzlocke</h2>
      <FormNuzlocke
        setGeneration={setGeneration}
        setVersion={setVersion}
        setType={setType}
      />

      {!loadingSpecies && !errorSpecies && pokemonSpecies.length > 0 && (
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            height: 40%;
          `}
        >
          <img
            className='sprite'
            src={pokemon.sprites.versions[gens[version]][version].front_default}
          />
          <div className='info'>
            <h3>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h3>
            <ul>
              <li>
                Type(s):
                <ul>
                  {pokemon.types.map((typeObj) => (
                    <li key={typeObj.type.name}>{typeObj.type.name}</li>
                  ))}
                </ul>
              </li>
              <li>Weight: {pokemon.weight} </li>
              <li>Height: {pokemon.height} </li>
            </ul>
          </div>
        </div>
      )}
      <div className='page-selectors'>
        <img
          onClick={() => setCurrEntry((prev) => (prev > 0 ? prev - 1 : 0))}
          src='https://img.icons8.com/ios-glyphs/30/000000/chevron-left.png'
        />
        Page: {currEntry + 1}
        <img
          onClick={() =>
            setCurrEntry((prev) =>
              prev < pokemonSpecies.length - 1 ? prev + 1 : prev
            )
          }
          src='https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png'
        />
      </div>
    </div>
  );
};

export default NuzlockePage;
