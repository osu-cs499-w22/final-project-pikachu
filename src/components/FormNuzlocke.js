/** @jsxImportSource @emotion/react */
import {React, useState, useEffect} from "react";
import {css, jsx} from  "@emotion/react";

export function FormNuzlocke(props){

    const [typeholder, setTypeHolder] = useState('');
    const [gameversionholder, setGameVersionHolder] = useState('');

    return(
        <div>
            <form onSubmit={(e)=>{e.preventDefault();
                
            }}>
                <select name="version" id="version">
                    <optgroup label = "generation-i">
                        <option value = "red">Red</option>
                        <option value = "blue">Blue</option>
                        <option value = "yellow">Yellow</option>
                    </optgroup>
                    <optgroup label = "generation-ii">
                        <option value = "gold">Gold</option>
                        <option value = "silver">Silver</option>
                        <option value = "crystal">Crystal</option>
                    </optgroup>
                    <optgroup label = "generation-iii">
                        <option value = "ruby">Ruby</option>
                        <option value = "sapphire">Sapphire</option>
                        <option value = "emerald">Emerald</option>
                        <option value = "firered">FireRed</option>
                        <option value = "leafgreen">LeafGreen</option>
                    </optgroup>
                    <optgroup label = "generation-iv">
                        <option value = "diamond">Diamond</option>
                        <option value = "pearl">Pearl</option>
                        <option value = "platinum">Platinum</option>
                        <option value = "heartgold">HeartGold</option>
                        <option value = "soulsilver">SoulSilver</option>
                    </optgroup>
                    <optgroup label = "generation-v">
                        <option value = "black">Black</option>
                        <option value = "white">White</option>
                        <option value = "black2">Black 2</option>
                        <option value = "white2">White 2</option>
                    </optgroup>
                    <optgroup label = "generation-vi">
                        <option value = "x">X</option>
                        <option value = "y">y</option>
                        <option value = "alphasapphire">Alpha Sapphire</option>
                        <option value = "omegaruby">Omega Ruby</option>
                    </optgroup>
                    <optgroup label = "generation-vii">
                        <option value = "sun">Sun</option>
                        <option value = "moon">Moon</option>
                        <option value = "ultrasun">Ultra Sun</option>
                        <option value = "ultramoon">Ultra Moon</option>
                    </optgroup>
                </select>
                <button type="Submit">Submit</button>
            </form>
        </div>
    )

}


