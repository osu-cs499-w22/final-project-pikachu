/** @jsxImportSource @emotion/react */
import {React, useState, useEffect} from "react";
import {css, jsx} from  "@emotion/react";



export function typeCalculator(type1, type2){
    
    //inputs type 1 state and type 2 state
    const [type1Holder, setType1Holder] = useState('');
    const [type2Holder, setType2Holder] = useState('');
    
    //output damage modifiers and types states here;
    const [data, setData] = useState([]);

    //error and loading states here
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const type1Lower = type1Holder.toLowerCase();
    const type2Lower = type2Holder.toLowerCase();

    setType1Holder(type1);
    setType2Holder(type2);

    const getTypeMatchupOffense = async(type1Check)=>{
        if(!(type1Check)){
            setData([]);
            return;
        }
        setError(false);
        setLoading(true);
        
        try{
            const url = `https://pokeapi.co/api/v2/type/${type1Lower}/`;
            const response = await fetch(url);
            const responseJson = await response.json();
            if(responseJson["cod"]==='404' || responseJson["cod"]==='401'){
                setData([]);
                setError(true);
                setLoading(false);
                return;
            }
            if(responseJson.damage_relations){
                setData(responseJson.damage_relations);
                setError(false);
            }
        }
            catch(e){
                if (e instanceof DOMException){
                    console.log("==HTTP request cancelled");
                }
                else{
                    throw e;
                }
            }
    }
    useEffect(()=>{
        getTypeMatchupOffense(type1Holder);
    },[type1Holder]);
    
    /* Return works such that it returns a div that contains the matching type and corresponding array. I'm trying to make it
    such that it doesn't return a div but instead returns the necessary information back to the component that calls it*/

    return(
        <div>
            {Object.keys(responseJson.damage_relations).forEach(array=>{
                array.map((item)=>{
                    {if(item.name===type2Lower){
                        <div>
                            <p>{array}:</p> 
                            <p>{item.name}</p>
                        </div>
                    }}

                })
            })}
        </div>
    )

}

