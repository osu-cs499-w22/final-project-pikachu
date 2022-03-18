import { React, useState, useEffect } from "react";

export function usePokemon(pokemon) {
  const [dataMoves, setDataMoves] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonSprite, setPokemonSprite] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //https://pokeapi.co/api/v2/pokemon/{id or name}/
  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();

    const getPokemon = async () => {
      let responseData = {};
      setLoading(true);
      try {
        const urlMoveType = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
        var response = await fetch(urlMoveType);
        responseData = await response.json();

        if (response["cod"] === "404" || response["cod"] === "401") {
          setError(true);
          setLoading(false);
          setPokemonName("");
          setPokemonSprite([]);
          setPokemonType([]);
          setDataMoves([]);
          return;
        }

        if (responseData) {
          setDataMoves(responseData.moves || []);
          setPokemonName(pokemon);
          setPokemonType(responseData.types || []);
          setPokemonSprite(responseData.sprites || []);
          setError(false);
          setLoading(false);
        }
      } catch (e) {
        if (e instanceof DOMException) {
          console.log("== HTTP request cancelled");
        } else {
          setLoading(false);
          setError(true);
          throw e;
        }
      }

      if (!ignore) {
        setDataMoves(responseData.moves);
        setPokemonName(pokemon);
        setPokemonType(responseData.types);
        setPokemonSprite(responseData.sprites);
        setError(false);
        setLoading(false);
      }
    };
    if (pokemon) getPokemon();

    return () => {
      setLoading(false);
      controller.abort();
      ignore = true;
    };
  }, [pokemon]);

  return [
    {
      moves: dataMoves,
      name: pokemonName,
      type: pokemonType,
      sprite: pokemonSprite,
    },
    loading,
    error,
  ];
}
