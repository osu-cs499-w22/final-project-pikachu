import { React, useState, useEffect } from "react";

export function usePokemon(pokemon, version) {
  const [dataMoves, setDataMoves] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonSprite, setPokemonSprite] = useState([]);
  const [wantedMoves, setWantedMoves] = useState([]);


  const [weakType, setWeakType] = useState([]);
  const [strongType, setStrongType] = useState([])

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //https://pokeapi.co/api/v2/pokemon/{id or name}/
  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();

    const getPokemon = async () => {
      let responseData = {};
      setLoading(true);
      try {
        const urlMoveType = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
        var response = await fetch(urlMoveType);
        responseData = await response.json();

        if (response["code"] === "404" || response["code"] === "401") {
          setError(true);
          setLoading(false);
          setPokemonName("");
          setPokemonSprite([]);
          setPokemonType([]);
          setDataMoves([]);
          return;
        }

        if (responseData) {
          setDataMoves(responseData.moves || []);
          setPokemonName(pokemon);
          setPokemonType(responseData.types || []);
 //         console.log(responseData.types);
          setPokemonSprite(responseData.sprites || []);
          setError(false);
          setLoading(false);
        }

        if (responseData.types) {
          responseData.types.forEach(async( element) => {
            let weaknessData = {}
            try {
              const urlWeakness = `https://pokeapi.co/api/v2/type/${element.type.name}/`;
              var weakness = await fetch(urlWeakness)
              weaknessData = await weakness.json();
 //             console.log(weaknessData.damage_relations.double_damage_from);
              if(weaknessData.damage_relations){
                if(!weakType.includes(weaknessData.damage_relations.double_damage_from.forEach((type)=>type.name)))
                  {
                   setWeakType((prev)=>([...prev, ...weaknessData.damage_relations.double_damage_from]))
                  }
              }
            }
         
            catch (e){
              if (e instanceof DOMException) {
                console.log("== HTTP request cancelled");
              } else {
                setLoading(false);
                setError(true);
                throw e;
              }
            }
           
            }
          );
        }

      } catch (e) {
        if (e instanceof DOMException) {
          console.log("== HTTP request cancelled");
        } else {
          setLoading(false);
          setError(true);
          throw e;
        }
      }
      if (!ignore) {
        setDataMoves(responseData.moves);
        setPokemonName(pokemon);
        setPokemonType(responseData.types);
        setPokemonSprite(responseData.sprites);
        setError(false);
        setLoading(false);
      }
    };
//    console.log(weakType);


    if (pokemon) getPokemon();

    return () => {
      setLoading(false);
      controller.abort();
      ignore = true;
    };
  }, [pokemon]);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const getType = async()=>{
    weakType.forEach(async(type)=>{
     // console.log(type);
    let strongData = {};
    setLoading(true);
    try {
      const urlStrong = `https://pokeapi.co/api/v2/type/${type.name}/`;
      var strong = await fetch(urlStrong);
      strongData = await strong.json();

      if (strong["code"] === "404" || strong["code"] === "401") {
        setError(true);
        setLoading(false);
        
        return;
      }

      if (strongData) {
        setStrongType((prev)=>[...prev, ...strongData.damage_relations.double_damage_from]) 
      }

    } catch (e) {
      if (e instanceof DOMException) {
        console.log("== HTTP request cancelled");
      } else {
        setLoading(false);
        setError(true);
        throw e;
      }
    }
    if (!ignore) {

    }})}

    

    if (weakType) getType();

    return () => {
      setLoading(false);
      controller.abort();
      ignore = true;
    };
  }, [weakType]);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const getMoves = async()=>{
    dataMoves.forEach(async(moves)=>{
  //   console.log(moves);
    let wantedMoveData = {};
    setLoading(true);
   // console.log(moves.move.name);
    try {
      const urlWMD = `https://pokeapi.co/api/v2/move/${moves.move.name}/`;
      var WMD = await fetch(urlWMD);
      wantedMoveData = await WMD.json();
      //console.log(wantedMoveData.type.name);
      if (WMD["code"] === "404" || WMD["code"] === "401") {
        setError(true);
        setLoading(false);
        return;
      }
      console.log(strongType)
      strongType.forEach((type)=>{
        console.log(type.name)
        console.log(type.name === wantedMoveData.type.name)
        if(type.name===wantedMoveData.type.name){
          setWantedMoves((prev)=>[...prev, ...wantedMoveData]
          )
        }
      })
    } catch (e) {
      if (e instanceof DOMException) {
        console.log("== HTTP request cancelled");
      } else {
        setLoading(false);
        setError(true);
        throw e;
      }
    }
    if (!ignore) {

    }})}
    if (dataMoves) getMoves();

    return () => {
      setLoading(false);
      controller.abort();
      ignore = true;
    };
  }, [dataMoves]);


//  console.log(weakType);
//  console.log(strongType);
//  console.log(wantedMoves);
  return [
    {
      moves: dataMoves,
      name: pokemonName,
      type: pokemonType,
      sprite: pokemonSprite,
      strongType: strongType,
    },
    loading,
    error,
  ];
}
