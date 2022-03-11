import {React, useState, useEffect} from "react";
import {css, jsx} from  "@emotion/react";

export function FormMoves(props){
    
    const [formMovesPokemon, setFormMovesPokemon] = useState('');
    const [formMovesVersion, setFormMovesVersion] = useState('');
    const [formMovesGeneration, setFromMovesGeneration] = useState('');

    return(
        <form onSubmit={(e)=>{e.preventDefault();
            props.setPokemon(formMovesPokemon);
            props.setVersion(formMovesVersion);
            props.setGeneration(formMovesGeneration)
        }}>
            <fieldset>
                <input size="15" value={formMovesPokemon} onChange={(e)=>setFormMovesPokemon(e.target.value)} placeholder="Enter Pokemon Name Here"></input>
                <select name="version" id="version" onSelect={(e)=>setFormMovesVersion(e.target.value)} onSelect={(e)=>setFromMovesGeneration(e.target.label)}>
                    <optgroup label = "generation-i">
                        <option value = "red" label = "generation-i">Red</option>
                        <option value = "blue" label = "generation-i">Blue</option>
                        <option value = "yellow" label = "generation-i">Yellow</option>
                    </optgroup>
                    <optgroup label = "generation-ii">
                        <option value = "gold" label = "generation-ii">Gold</option>
                        <option value = "silver" label = "generation-ii">Silver</option>
                        <option value = "crystal" label = "generation-ii">Crystal</option>
                    </optgroup>
                    <optgroup label = "generation-iii">
                        <option value = "ruby" label = "generation-iii">Ruby</option>
                        <option value = "sapphire" label = "generation-iii">Sapphire</option>
                        <option value = "emerald" label = "generation-iii">Emerald</option>
                        <option value = "firered" label = "generation-iii">FireRed</option>
                        <option value = "leafgreen" label = "generation-iii">LeafGreen</option>
                    </optgroup>
                    <optgroup label = "generation-iv">
                        <option value = "diamond" label = "generation-iv">Diamond</option>
                        <option value = "pearl" label = "generation-iv">Pearl</option>
                        <option value = "platinum" label = "generation-iv">Platinum</option>
                        <option value = "heartgold" label = "generation-iv">HeartGold</option>
                        <option value = "soulsilver" label = "generation-iv">SoulSilver</option>
                    </optgroup>
                    <optgroup label = "generation-v">
                        <option value = "black" label = "generation-v">Black</option>
                        <option value = "white" label = "generation-v">White</option>
                        <option value = "black2" label = "generation-v">Black 2</option>
                        <option value = "white2" label = "generation-v">White 2</option>
                    </optgroup>
                    <optgroup label = "generation-vi">
                        <option value = "x" label = "generation-vi">X</option>
                        <option value = "y" label = "generation-vi">y</option>
                        <option value = "alphasapphire" label = "generation-vi">Alpha Sapphire</option>
                        <option value = "omegaruby" label = "generation-vi">Omega Ruby</option>
                    </optgroup>
                    <optgroup label = "generation-vii">
                        <option value = "sun" label = "generation-vii">Sun</option>
                        <option value = "moon" label = "generation-vii">Moon</option>
                        <option value = "ultrasun" label = "generation-vii">Ultra Sun</option>
                        <option value = "ultramoon" label = "generation-vii">Ultra Moon</option>
                    </optgroup>
                </select>
                <button type="Submit">Submit</button>
            </fieldset>
        </form>
    )

}