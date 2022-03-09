/** @jsxImportSource @emotion/react */
import {React, useState, useEffect} from "react";
import {css, jsx} from  "@emotion/react";
import { FormMoves } from "./FormMoves";
import { DisplayMoves } from "./DisplayMoves";

export function MoveReturn(){
    const [pokemon, setPokemon] = useState('');
    const [version, setVersion] = useState('');

    const [dataPokemon, setDataPokemon] = useState([]);


    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    // api link is https://pokeapi.co/api/v2/pokemon/{id or name}/

    const moveReturnRequest = async(pokemon, version)=>{
        if(!(pokemon && version)){
            setDataMoves([]);
            return;
        }
        setError(false);
        setLoading(true);

        try{
            const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const pokemonResponse = await fetch(urlPokemon);
            const pokemonResponseJSON = await pokemonResponse.json();

            if(pokemonResponseJSON['cod']==="404" || pokemonResponseJSON['cod']==="401"){
                setDataMoves([]);
                setError(true);
                setLoading(false);
                return;
            }
            if(pokemonResponseJSON){
                setDataPokemon(pokemonResponseJSON);
                setError(false);
                setLoading(false);
            }
        }
        catch(e){
            if(e instanceof DOMException){
                console.log("==HTTP request cancelled");
            }
            else{
                throw e;
            }
        }
        
    }
    useEffect(()=>{
        moveReturnRequest(pokemon,version);
    }, [pokemon, version]);

    return(
        <div>
            <h1>Pokemon Moves Route(placeholder title)</h1>
            <FormMoves pokemon={pokemon} setPokemon={setPokemon} version={version} setVersion={setVersion}/>
            <DisplayMoves dataPokemon={dataPokemon.map} version={version}/>
        </div>
    )
}