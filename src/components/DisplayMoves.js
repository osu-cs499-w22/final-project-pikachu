/** @jsxImportSource @emotion/react */
import {React, useState, useEffect} from "react";
import {css, jsx} from  "@emotion/react";

export function DisplayMoves(props){
    
    const [dataMoves, setDataMoves] = useState([]);
    const [dataVersion, setDataVersion] = useState('');
    const [pokemonType, setPokemonType] = useState([]);
    const [pokemonSprite, setPokemonSprite] = useState([]);
    const [moveType, setMoveType] = useState([]);
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonGeneration, setPokemonGeneration] = useState('')

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    //https://pokeapi.co/api/v2/pokemon/{id or name}/

    setDataMoves(props.dataPokemon.moves);
    setDataVersion(props.version);
    setPokemonType(props.dataPokemon.types);
    setPokemonName(props.dataPokemon.name);
    setPokemonSprite(props.dataPokemon.sprites);
    
    
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
    useEffect(()=>{
        getMoveTypeRequest(move)
    }, [move])
    
    return(
        <div>
            <h1>
                {pokemonName}
            </h1>
            {Object.keys(dataMoves).forEact(array=>{
                array.map((item)=>{
                    {
                        <div>
                            {item.name}
                        </div>
                    }
                })
            })}
            <div>
                {Object.keys(pokemonSprite.other.versions).forEach(array=>{
                    array.map((item)=>{
                        {
                            item[pokemonGeneration][dataVersion]
                        }

                    })
                })}
            </div>
        </div>
    )
    

}