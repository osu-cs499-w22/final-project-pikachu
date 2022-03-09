/** @jsxImportSource @emotion/react */
import {React, useState, useEffect} from "react";
import {css, jsx} from  "@emotion/react";

export function DisplayMoves(props){
    
    const [dataMoves, setDataMoves] = useState([]);
    const [dataVersion, setDataVersion] = useState('');
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonAnimation, setPokemonAnimation] = useState([]);
    const [moveType, setMoveType] = useState([]);
    const [pokemonName, setPokemonName] = useState('');
    

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    //https://pokeapi.co/api/v2/pokemon/{id or name}/

    setDataMoves(props.dataPokemon.moves);
    setDataVersion(props.version);
    setPokemonType(props.dataPokemon.types);
    setPokemonName(props.dataPokemon.name);
    
    
    const getMoveTypeRequest = async(move)=>{
        if(!(move)){
            setMoveType([]);
            return;
        }
        setLoading(true);
        setError(false);

        try{
            const urlMoveType = `https://pokeapi.co/api/v2/pokemon/${move}/`
            const moveTypeResponse = await fetch(urlMoveType);
            const moveTypeResponseJSON = await moveTypeResponse.json();

            if(moveTypeResponseJSON['cod']==="404" || moveTypeResponseJSON['cod']==="401"){
                setMoveType([]);
                setError(true);
                setLoading(false);

                return;
            }

            if(moveTypeResponseJSON){
                setMoveType(moveTypeResponseJSON.type);
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
    
    return(
        <div>
            
        </div>
    )
    

}