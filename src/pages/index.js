import React, { useState, useRef } from "react"
import Header from "../components/header"
import adjectiveArray from "../components/storage"
import ColorBlocklet from "../components/colorblocklet"

const IndexPage = () => {
  const [primaryColor, setPrimary] = useState("#b2fc40")
  const [primaryShade, setPrimaryShade] = useState("#8ec933")
  const [secondaryColor, setSecondary] = useState("#eeaabf")
  const [secondaryShade, setSecondaryShade] = useState("#aa778b")

  const [adjectiveFirst, setadjectiveFirst] = useState("???")
  const [adjectiveSecond, setadjectiveSecond] = useState("???")
  const infobox = useRef(null)

  function randomAdjectiveFirst() {
    setadjectiveFirst(
      adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)]
    )
  }
  function randomAdjectiveSecond() {
    setadjectiveSecond(
      adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)]
    )
  }

  return (
    <div>
      <div
        id="wrapper"
        style={{
          backgroundColor: primaryColor,
          transition: "background-color 1.2s",
        }}
      ></div>
    <div id="wrapperAccent"></div>
      <Header primaryColor={primaryColor} />
      <main>
        <div className="block subheader" onClick={() => {
          if (infobox.current.classList.contains("subheaderExpand")) {
            infobox.current.classList.remove("subheaderExpand")
          } else {
            infobox.current.classList.add("subheaderExpand")
          }
        }}
        ref={infobox}
        >
          <div
          className="infobox"
          >
          <span className="subheaderArrows">&#9660;</span>
          <span className="speciali">i</span>
          <span className="subheaderArrows">&#9660;</span>
        </div>

        <div className="subheaderText">
          <p>Roost is a simple way to generate a quick idea for an overall web aesthetic. Use it for CodePens, use it for practicing layout development, use it for composing your next email, using it for flexing that right-brain of yours. </p>
        </div>
        </div>

        <div className="block hide">
          <div className="row">
            <div className="column ">
              <div
                className="swatch colorSwatch"
                style={{ backgroundColor: primaryColor }}
              ></div>
              <div
                className="swatch shadeSwatch"
                style={{ backgroundColor: primaryShade }}
              ></div>

              <ColorBlocklet
                color1={primaryColor}
                color2={primaryShade}
                setter1={setPrimary}
                setter2={setPrimaryShade}
              />
            </div>
            <div className="column">
              <div
                className="swatch colorSwatch"
                style={{ backgroundColor: secondaryColor }}
              ></div>
              <div
                className="swatch shadeSwatch"
                style={{ backgroundColor: secondaryShade }}
              ></div>

              <ColorBlocklet
                color1={secondaryColor}
                color2={secondaryShade}
                setter1={setSecondary}
                setter2={setSecondaryShade}
              />
            </div>
          </div>
        </div>

        <div className="block hide">
          <div className="row">
            <div className="column ">
              <div className="swatch swatchText text-center">
                {adjectiveFirst}
              </div>
              <button
                onClick={randomAdjectiveFirst}
                className="button"
                style={{ marginTop: "4rem" }}
              >
                Change Adjective 1
              </button>
            </div>
            <div className="column text-center" style={{ flex: "0 1 2%" }}>
              <h3 style={{ margin: "2rem 0", fontSize: "2.2rem" }}>&</h3>
            </div>
            <div className="column">
              <div className="swatch swatchText text-center">
                {adjectiveSecond}
              </div>
              <button
                onClick={randomAdjectiveSecond}
                className="button"
                style={{ marginTop: "4rem" }}
              >
                Change Adjective 2
              </button>
            </div>
          </div>
        </div>

        <button
          className="button"
          style={{
            marginTop: "2rem",
            marginBottom: "6rem",
            backgroundColor: "blue",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          PDF
        </button>
      </main>
    </div>
  )
}

export default IndexPage
// <div className="clipboardConfirmation">Copied</div>

// <h2 className="swatchlabel text-center">
//   {primaryColor}
//
//   <button className="clipboardButton" onClick={() => {
//       navigator.clipboard.writeText(primaryColor);
//     }} >
//     <IconClipboard />
//     <div className="clipboardConfirmation">Copied!</div>
//   </button>
//   </h2>
//
// <h2 className="swatchlabel shadelabel text-center" >
//   {primaryShade}
// </h2>
//
// <button onClick={randomHexPrimary} className="button">Change Primary Color</button>

// Levit show-on-slide
//   const showElementsCutoff = window.innerHeight * 0.7;
//   const containerLevits = document.getElementsByClassName('block');
//   let domOffsets = [];
//   window.setTimeout(() => {
//     for (let i = 0;i < containerLevits.length; i++){
//       domOffsets.push(containerLevits[i].offsetTop);
//     }
//   },1);
//
//   window.addEventListener("scroll", function scrollBehavior() {
//     let tick = window.scrollY;
//         for (let j = 0; j < domOffsets.length; j++) {
//
//           if (tick >= domOffsets[j] - showElementsCutoff){
//             containerLevits[j].classList.remove('hide');
//           }
//           else if (tick < domOffsets[j] - 50){
//             containerLevits[j].classList.add('hide');
//           }
//           else if (tick + showElementsCutoff < domOffsets[j] - 50){
//             containerLevits[j].classList.add('hide');
//           }
//         }
//   });
