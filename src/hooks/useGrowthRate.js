import { React, useState, useEffect } from "react";

export const useGrowthRate = (pokemon) => {
  const [growthRateInfo, setGrowthRateInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getGrowthRate = async (pokemon) => {
      if (!pokemon) {
        return;
      }

      setLoading(true);
      setError(false);
      try {
        let response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
        );
        let responseData = await response.json();

        if (response.status === 404 || response.status === 401) {
          setError(true);
          setLoading(false);
          return;
        }

        const growthRateURL = responseData.growth_rate.url;

        response = await fetch(growthRateURL);
        responseData = await response.json();

        if (response.status === 404 || response.status === 401) {
          setError(true);
          setLoading(false);
          return;
        }

        if (responseData) {
          setGrowthRateInfo({
            name: responseData.name,
            levels: responseData.levels,
          });
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
    if (pokemon) getGrowthRate(pokemon);
  }, [pokemon]);

  return [growthRateInfo, loading, error];
};
