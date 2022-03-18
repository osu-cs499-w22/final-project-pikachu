import { React, useState, useEffect } from "react";

export const useGrowthRate = (pokemon) => {
  const [growthRateInfo, setGrowthRateInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const getGrowthRate = async () => {
      let responseBody = {};
      setLoading(true);
      try {
        let response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
        );
        responseBody = await response.json();

        if (!responseBody.growth_rate.url) {
          setError(true);
          setLoading(false);
          setGrowthRateInfo({});
          console.error(
            `ERROR: Growth rate url is undefined for pokemon ${pokemon}`
          );
          return;
        }

        response = await fetch(responseBody.growth_rate.url);
        responseBody = await response.json();

        if (!responseBody.name && !responseBody.levels) {
          setLoading(false);
          setError(true);
          setGrowthRateInfo({});
          console.error(
            `ERROR: Growth rate info is undefined for pokemon ${pokemon}`
          );
          return;
        }

        if (responseBody) {
          setGrowthRateInfo({
            name: responseBody.name,
            levels: responseBody.levels,
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
      if (!ignore) {
        setGrowthRateInfo({
          name: responseBody.name,
          levels: responseBody.levels,
        });
        setError(false);
        setLoading(false);
      }
    };
    if (pokemon) getGrowthRate(pokemon);

    return () => {
      setLoading(false);
      controller.abort();
      ignore = true;
    };
  }, [pokemon]);

  return [growthRateInfo, loading, error];
};
