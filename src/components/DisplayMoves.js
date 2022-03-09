/** @jsxImportSource @emotion/react */
import {React, useState, useEffect} from "react";
import {css, jsx} from  "@emotion/react";

export function DisplayMoves(props){
    
    const [dataMoves, setDataMoves] = useState([]);
    const [dataVersion, setDataVersion] = useState('');
    
    setDataMoves(props.dataPokemon.moves);
    setDataVersion(props.version);
    

}