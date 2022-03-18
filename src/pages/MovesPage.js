/** @jsxImportSource @emotion/react */

import React, {useState} from "react";
import { css, jsx } from "@emotion/react";
import { FormMoves } from "../components/FormMoves";
import { useDamageRelations } from "../hooks/useDamageRelation";
import { usePokemon } from "../hooks/usePokemon";


const MovesPage = () => {

  const [pokemon, setPokemon] = useState('');
  const [version, setVersion] = useState('');
  const [dataPokemon, loading, error] = usePokemon(pokemon.toLowerCase());
  console.log(dataPokemon);
  /*if(dataPokemon.type){
      console.log(dataPokemon.type[0].type.name)
  }*/
 // const [damageData1, loadingDamage1, errorDamage1] = useDamageRelations(dataPokemon.type[0].type.name);

  

  return(
    <div className='screen'>
      <FormMoves pokemon={pokemon} setPokemon={setPokemon} version={version} setVersion={setVersion}/>
      {(dataPokemon) ? 
        <div></div> 
        
        
        
        : null

      }
    </div>

  )
}
export default MovesPage;
