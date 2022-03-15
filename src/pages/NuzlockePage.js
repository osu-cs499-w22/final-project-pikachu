import React, { useState } from "react";
import { FormNuzlocke } from "../components/FormNuzlocke";
import { useDamageRelations } from "../hooks/useDamageRelation";
import { usePokemonByVersion } from "../hooks/usePokemonByVersion";
import { usePokemon } from "../hooks/usePokemon";

const NuzlockePage = () => {
  const [version, setVersion] = useState("");
  const [type, setType] = useState("");

  const [pokemonList, loading, error] = usePokemonByVersion(version, type);

  return (
    <div className='screen'>
      <FormNuzlocke setVersion={setVersion} setType={setType} />
    </div>
  );
};

export default NuzlockePage;
