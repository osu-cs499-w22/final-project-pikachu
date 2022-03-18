import { useState, useEffect } from "react";

export const useSpecies = (speciesList, type) => {
  const [pokemonArray, setPokemonArray] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    async function getSpecies() {
      let responseBody = {};
      setLoading(true);
      const buildingList = [];
      try {
        for (let i = 0; i < speciesList.length; i++) {
          var response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${speciesList[i].pokemon_species.name}`
          );
          responseBody = await response.json();
          // console.log(responseBody);
          if (!responseBody.types) {
            setError(true);
            setLoading(false);
            setPokemonArray([]);
            console.log(
              "ERROR: Types undefined for pokemon " +
                speciesList[i].pokemon_species.name
            );
            return;
          }
          let typeList = [];
          for (let j = 0; j < responseBody.types.length; j++) {
            typeList.push(responseBody.types[j].type.name);
          }
          if (typeList.includes(type)) {
            buildingList.push(responseBody);
          }
        }

        if (buildingList) {
          setError(false);
          setLoading(false);
          setPokemonArray(buildingList);
          return;
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
        setLoading(false);
        setError(false);
        try {
          setPokemonArray(responseBody.pokemon_entries || []);
        } catch (e) {
          if (
            responseBody.error.status === 401 ||
            responseBody.error.message === "The access token expired"
          ) {
            setError("Access token expired");
          }
          console.log("== Error: ", e);
          setPokemonArray([]);
        }
      }
    }
    if (speciesList.length > 0 && type) {
      getSpecies();
    }
    return () => {
      setLoading(false);
      controller.abort();
      ignore = true;
    };
  }, [type, speciesList, speciesList.length]);
  return [pokemonArray, loading, error];
};
