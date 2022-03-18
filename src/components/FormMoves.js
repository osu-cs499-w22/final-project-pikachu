import {React, useState, useEffect} from "react";
import {css, jsx} from  "@emotion/react";

export function FormMoves(props){
    
    const [formMovesPokemon, setFormMovesPokemon] = useState('');
    const [formMovesVersion, setFormMovesVersion] = useState('');

    return(
        <form onSubmit={(e)=>{e.preventDefault();
            props.setPokemon(formMovesPokemon);
            props.setVersion(formMovesVersion);
        }}>
            <fieldset>
                <input size="15" value={formMovesPokemon} onChange={(e)=>setFormMovesPokemon(e.target.value)} placeholder="Enter Pokemon Name Here"></input>
                <select name="version" id="version" onChange={(e)=>setFormMovesVersion(e.target.value)}>
                    <optgroup label = "generation-i">
                        <option value = "red-blue">Red-Blue</option>
                        <option value = "yellow" >Yellow</option>
                    </optgroup>
                    <optgroup label = "generation-ii">
                        <option value = "gold-silver" >Gold-Silver</option>
                        <option value = "crystal" >Crystal</option>
                    </optgroup>
                    <optgroup label = "generation-iii">
                        <option value = "ruby-sapphire" >Ruby-Sapphire</option>
                        <option value = "emerald" >Emerald</option>
                        <option value = "firered-leafgreen" >FireRed-LeafGreen</option>
                    </optgroup>
                    <optgroup label = "generation-iv">
                        <option value = "diamond-pearl">Diamond-Pearl</option>
                        <option value = "platinum">Platinum</option>
                        <option value = "heartgold-soulsilver">HeartGold-SoulSilver</option>
                    </optgroup>
                    <optgroup label = "generation-v">
                        <option value='black-white'>Black-White</option>
                        <option value='black-2-white-2'>Black 2-White 2</option>
                    </optgroup>
                    <optgroup label = "generation-vi">
                        <option value = "x-y">X-Y</option>
                        <option value = "omegaruby-alphasapphire" >Omeag Ruby-Alpha Sapphire</option>
                    </optgroup>
                    <optgroup label = "generation-vii">
                        <option value = "sun-moon" >Sun-Moon</option>
                        <option value = "ultra-sun-ultra-moon">Ultra Sun-Ultra Moon</option>
                    </optgroup>
                </select>
                <button type="Submit">Submit</button>
            </fieldset>
        </form>
    )

}