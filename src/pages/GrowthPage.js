import React, { useState } from "react";
import { useGrowthRate } from "../hooks/useGrowthRate";

const GrowthPage = () => {
  const [pokemon, setPokemon] = useState("");
  const [query, setQuery] = useState("");

  const [growthRate, loading, error] = useGrowthRate(query);
  console.log(growthRate);

  return (
    <div className='screen'>
      <input onChange={(e) => setPokemon(e.target.value)} type='text' />
      <button onClick={() => setQuery(pokemon)}>Search</button>
    </div>
  );
};

export default GrowthPage;
