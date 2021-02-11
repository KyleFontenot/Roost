import React, { useEffect, useRef } from 'react'
import IconClipboard from "../images/svg/clipboard.svg"

const ColorBlocklet = ({color1, color2, setter1, setter2}) => {
  let copyIndicator = useRef(null);

  function randomHexPrimary() {
    let hex = [0,0,0,0,0,0];
    let newHex = hex.map(() => Math.floor((Math.random() * 8) + 8));
    let newHexPrimary = newHex.map((i) => i.toString(16)).join('');
    let newHexShade = newHex.map((i) => Math.floor(i * 0.75).toString(16)).join('');
    setter1('#' + newHexPrimary);
    setter2('#' + newHexShade);
  }

  useEffect(() => {
    document.getElementById("wrapper").backgroundColor = color1;
  });

  return (
    <React.Fragment>
    <h2 className="swatchlabel text-center">
      {color1}

      <button className="clipboardButton" onClick={() => {
          navigator.clipboard.writeText(color1);
          copyIndicator.current.style.opacity = "1";
          setTimeout(() => {
            copyIndicator.current.style.opacity = "0";
          }, 1500);

        }} >
        <IconClipboard />
        <div className="clipboardConfirmation" ref={copyIndicator} >Copied!</div>
      </button>
      </h2>

    <h2 className="swatchlabel shadelabel text-center" >
      {color2}
    </h2>

    <button onClick={randomHexPrimary} className="button">Change Primary Color</button>
    </React.Fragment>
  )
}

export default ColorBlocklet;
