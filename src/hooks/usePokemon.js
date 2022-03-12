import { React, useState, useEffect } from "react";

export function usePokemon(pokemon) {
  const [dataMoves, setDataMoves] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonSprite, setPokemonSprite] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //https://pokeapi.co/api/v2/pokemon/{id or name}/

  const getPokemon = async (pokemon) => {
    if (!pokemon) {
      setMoveType([]);
      setLoading(true);
      setError(false);
      return;
    }

    try {
      const urlMoveType = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
      const pokemonDataJSON = await fetch(urlMoveType);
      const pokemonData = await pokemonDataJSON.json();

      if (
        moveTypeResponseJSON["cod"] === "404" ||
        moveTypeResponseJSON["cod"] === "401"
      ) {
        setMoveType([]);
        setError(true);
        setLoading(false);
        return;
      }

      if (pokemonData) {
        setDataMoves(pokemonData.moves);
        setPokemonName(pokemonName);
        setPokemonType(pokemonData.types);
        setPokemonSprite(pokemonData.sprites);
        setError(false);
        setLoading(false);
      }
    } catch (e) {
      if (e instanceof DOMException) {
        console.log("== HTTP request cancelled");
      } else {
        throw e;
      }
    }
  };
  useEffect(() => {
    getMoveTypeRequest(pokemon);
  }, [pokemon]);

  return [
    {
      moves: dataMoves,
      version: dataVersion,
      type: pokemonType,
      sprite: pokemonSprite,
    },
    loading,
    error,
  ];
}
