import React, { useEffect, useRef } from "react"
import IconClipboard from "../images/svg/clipboard.svg"
// import IconClipboard from "../images/clipboard.png"
import CopyToClipboard from '../components/copyToClipboard'

const ColorBlocklet = ({ color1, color2, setter1, setter2 }) => {

  let copyIndicator2 = useRef(null)

  function randomHexPrimary() {
    let hex = [0, 0, 0, 0, 0, 0]
    let newHex = hex.map(() => Math.floor(Math.random() * 8 + 8))
    let newHexPrimary = newHex.map(i => i.toString(16)).join("")
    let newHexShade = newHex
      .map(i => Math.floor(i * 0.75).toString(16))
      .join("")
    setter1("#" + newHexPrimary)
    setter2("#" + newHexShade)
  }

  useEffect(() => {
    document.getElementById("wrapper").backgroundColor = color1
  })

  return (
    <React.Fragment>
      <h2 className="swatchlabel text-center">
        {color1}

        <CopyToClipboard color={color1}/>
      </h2>

      <h2 className="swatchlabel shadelabel text-center">
        {color2}

        <CopyToClipboard color={color2}/>
      </h2>

      <button onClick={randomHexPrimary} className="button"
        style={{marginTop:'1rem'}}>
        Change Primary Color
      </button>
    </React.Fragment>
  )
}

export default ColorBlocklet
