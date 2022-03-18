import { React, useState, useEffect } from "react";

export function usePokemonByVersion(version, type) {
  const [pokemonArray, setPokemonArray] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const getPokemonByVersion = async () => {
      let responseData = {};
      setLoading(true);
      try {
        var response = await fetch(
          `https://pokeapi.co/api/v2/version-group/${version}`
        );

        responseData = await response.json();

        if (!responseData.pokedexes[0].url) {
          setError(true);
          setLoading(false);
          setPokemonArray([]);
          return;
        }

        let generation = responseData.generation.name;

        response = await fetch(`${responseData.pokedexes[0].url}`);
        responseData = await response.json();
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
        setLoading(false);
        setError(false);
        try {
          setPokemonArray(responseData.pokemon_entries || []);
        } catch (e) {
          if (
            responseData.error.status === 401 ||
            responseData.error.message === "The access token expired"
          ) {
            setError("Access token expired");
          }
          console.log("== Error: ", e);
          setPokemonArray([]);
        }
      }
    };
    if (version && type) getPokemonByVersion(version, type);

    return () => {
      setLoading(false);
      controller.abort();
      ignore = true;
    };
  }, [version, type, pokemonArray.length]);

  return [pokemonArray, loading, error];
}
