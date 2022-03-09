/** @jsxImportSource @emotion/react */
import {React, useState, useEffect} from "react";
import {css, jsx} from  "@emotion/react";

export function Nuzlocke(){
    const [type, setType] = useState('');
    const [gameversion, setGameVersion] = useState('');

    const [dataNuzlocke, setDataNuzlocke] = useState([]);

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const getNuzlockeRequest = async(gameversion)=>{
        if(!(gameversion)){
            setDataNuzlocke([]);
            return;
        }
        setError(false);
        setLoading(true);

        try{
            const urlVersion = `https://pokeapi.co/api/v2/pokedex/${gameversion}/`;
            const responseVersion = await fetch(urlVersion);
            const responseVersionJSON = await responseVersion.json();
            if(responseVersionJSON['cod']==="404" || responseVersionJSON['cod']==="401"){
                setDataNuzlocke([]);
                setError(true);
                setLoading(false);

                return;
            }
            if(responseVersionJSON.pokemon_entries){
                setDataNuzlocke(responseVersionJSON.pokemon_entries);
                setError(false);
                setLoading(false);
            }
        }
        catch(e){
            if(e instanceof DOMException){
                console.log("==HTTP request cancelled")
            }
            else{
                throw e;
            }
        }
    }

    useEffect(()=>{
        getNuzlockeRequest(gameversion);
    }, [gameversion])

    return(
        <div>
            <FormNuzlocke type={type} setType={setType} gameversion={gameversion} setGameVersion={setGameVersion}/>
            <Display dataNuzlocke={dataNuzlocke}/>
            {error ? <ErrorEntry/> : null}
        </div>
    )
}

