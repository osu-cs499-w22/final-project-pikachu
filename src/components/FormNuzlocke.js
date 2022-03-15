/** @jsxImportSource @emotion/react */
import { React, useState, useEffect } from "react";
import { css, jsx } from "@emotion/react";

export function FormNuzlocke(props) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          var [[_, version], [_, type]] = new FormData(e.target);
          props.setVersion(version);
          props.setType(type);
        }}
      >
        <fieldset>
          <select name='version' id='version'>
            <optgroup label='generation-i'>
              <option value='red-blue'>Red-Blue</option>
              <option value='yellow'>Yellow</option>
            </optgroup>
            <optgroup label='generation-ii'>
              <option value='gold-silver'>Gold-Silver</option>
              <option value='crystal'>Crystal</option>
            </optgroup>
            <optgroup label='generation-iii'>
              <option value='ruby-sapphire'>Ruby-Sapphire</option>
              <option value='emerald'>Emerald</option>
              <option value='firered-leafgreen'>FireRed-Leafgreen</option>
            </optgroup>
            <optgroup label='generation-iv'>
              <option value='diamond-pearl'>Diamond-Pearl</option>
              <option value='platinum'>Platinum</option>
              <option value='heartgold-soulsilver'>HeartGold-SoulSilver</option>
            </optgroup>
            <optgroup label='generation-v'>
              <option value='black-white'>Black-White</option>
              <option value='black-2-white-2'>Black 2-White 2</option>
            </optgroup>
            <optgroup label='generation-vi'>
              <option value='x-y'>X-Y</option>
              <option value='omega-ruby-alpha-sapphire'>
                Omega Ruby-Alpha Sapphire
              </option>
            </optgroup>
            <optgroup label='generation-vii'>
              <option value='sun-moon'>Sun-Moon</option>
              <option value='ultra-sun-ultra-moon'>Ultra Sun-Ultra Moon</option>
            </optgroup>
          </select>
          <select name='type' id='type'>
            <option value='grass'>Grass</option>
            <option value='fire'>Fire</option>
            <option value='water'>Water</option>
            <option value='electric'>Electric</option>
            <option value='ground'>Ground</option>
            <option value='rock'>Rock</option>
            <option value='fighting'>Fighting</option>
            <option value='flying'>Flying</option>
            <option value='psychic'>Psychic</option>
            <option value='ghost'>Ghost</option>
            <option value='dark'>Dark</option>
            <option value='steel'>Steel</option>
            <option value='bug'>Bug</option>
            <option value='normal'>Normal</option>
            <option value='dragon'>Dragon</option>
            <option value='ice'>Ice</option>
            <option value='fairy'>Fairy</option>
          </select>
          <button type='Submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
