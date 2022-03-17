import { React, useState, useEffect } from "react";

export function usePokemonByVersion(group, type) {
  const [pokemonArray, setPokemonArray] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPokemonByVersion = async (group, type) => {
      if (!group) {
        return;
      }

      setLoading(true);
      setError(false);
      try {
        let response = await fetch(
          `https://pokeapi.co/api/v2/version-group/${group}`
        );
        let responseData = await response.json();

        if (response.status === 404 || response.status === 401) {
          setError(true);
          setLoading(false);
          return;
        }

        const pokedexURL = responseData.pokedexes[0].url;

        response = await fetch(pokedexURL);
        responseData = await response.json();

        const allPokemon = [];
        responseData.pokemon_entries.forEach((item) => {
          allPokemon.push(item.pokemon_species.name);
        });

        const matchingPokemon = [];
        allPokemon.forEach(async (pokemon) => {
          response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
          );
          responseData = await response.json();

          if (responseData) {
            var types = responseData.types.map((item) => item.type.name);
            for (const currType of types) {
              if (currType === type) {
                matchingPokemon.push({
                  name: pokemon,
                  sprites: responseData.sprites,
                });
                break;
              }
            }
          }
        });

        if (response.status === 404 || response.status === 401) {
          setError(true);
          setLoading(false);
          return;
        }

        if (responseData) {
          setPokemonArray(matchingPokemon);
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
    if (group) getPokemonByVersion(group, type);
  }, [group, type]);

  return [pokemonArray, loading, error];
}
