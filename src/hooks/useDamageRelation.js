import { React, useState, useEffect } from "react";

export function useDamageRelations(type) {
  //output damage modifiers and types states here;
  const [data, setData] = useState({});

  //error and loading states here
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getDamageRelations = async (type) => {
    if (!type) {
      setData({});
      return;
    }
    setError(false);
    setLoading(true);

    try {
      const url = `https://pokeapi.co/api/v2/type/${type}/`;
      const response = await fetch(url);
      const responseJson = await response.json();
      if (responseJson["cod"] === "404" || responseJson["cod"] === "401") {
        setData([]);
        setError(true);
        setLoading(false);
        return;
      }
      if (responseJson.damage_relations) {
        setData(responseJson.damage_relations);
        setError(false);
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
    getDamageRelations(type);
  }, [type]);

  /* Return works such that it returns a div that contains the matching type and corresponding array. I'm trying to make it
    such that it doesn't return a div but instead returns the necessary information back to the component that calls it*/
  return [data, loading, error];
}
