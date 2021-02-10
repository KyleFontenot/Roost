import React, { useState } from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import Link from "gatsby"
import Header from "../components/header"
import adjectiveArray from "../components/storage"
import IconClipboard from "../images/svg/clipboard.svg";



const IndexPage = () => {
  const [primaryColor, setPrimary] = useState('#B2FC40');
  const [primaryShade, setPrimaryShade] = useState('#8EC933');
  const [secondaryColor, setSecondary] = useState('#eeaabf');
  const [secondaryShade, setSecondaryShade] = useState('#aa778b');

  const [adjectiveFirst, setadjectiveFirst] = useState('???');
  const [adjectiveSecond, setadjectiveSecond] = useState('???');

  function randomHexPrimary() {
    let hex = [0,0,0,0,0,0];
    let newHex = hex.map(() => Math.floor((Math.random() * 8) + 8));
    let newHexPrimary = newHex.map((i) => i.toString(16)).join('');
    let newHexShade = newHex.map((i) => Math.floor(i * 0.75).toString(16)).join('');
    setPrimary('#' + newHexPrimary);
    setPrimaryShade('#' + newHexShade);
  }
  function randomHexSecondary() {
    let hex = [0,0,0,0,0,0];
    let newHex = hex.map(() => Math.floor((Math.random() * 8) + 8));
    let newHexPrimary = newHex.map((i) => i.toString(16)).join('');
    let newHexShade = newHex.map((i) => Math.floor(i * 0.75).toString(16)).join('');
    setSecondary('#' + newHexPrimary);
    setSecondaryShade('#' + newHexShade);
  }
  function randomAdjectiveFirst() {
    setadjectiveFirst(adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)]);
  }
  function randomAdjectiveSecond() {
    setadjectiveSecond(adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)]);
  }

// Levit show-on-slide
  const showElementsCutoff = window.innerHeight * 0.7;
  const containerLevits = document.getElementsByClassName('block');
  // for (let i = 1; i < containerLevits.length;i++){
  //   containerLevits[i].classList.add('hide');
  // }
  let domOffsets = [];
  window.setTimeout(() => {
    for (let i = 0;i < containerLevits.length; i++){
      domOffsets.push(containerLevits[i].offsetTop);
    }
  },1);

  window.addEventListener("scroll", function scrollBehavior() {
    let tick = window.scrollY;
        for (let j = 0; j < domOffsets.length; j++) {

          if (tick >= domOffsets[j] - showElementsCutoff){
            containerLevits[j].classList.remove('hide');
          }
          else if (tick < domOffsets[j] - 50){
            containerLevits[j].classList.add('hide');
          }
          else if (tick + showElementsCutoff < domOffsets[j] - 50){
            containerLevits[j].classList.add('hide');
          }
        }
  });


  return (
  <div>

    <div id="wrapper"
      style={{
        backgroundColor:primaryColor,
        transition:'background-color 1.2s'
      }}
      ></div>
    <Header style={{backgroundColor:'red'}}/>
    <main>


      <div className="block hide" style={{marginTop:'10rem'}}>
        <div className="row">
          <div className="column ">
            <div className="swatch colorSwatch" style={{backgroundColor:primaryColor}}></div>
            <div className="swatch shadeSwatch" style={{backgroundColor:primaryShade}}></div>

            <h2 className="swatchlabel text-center" >
              {primaryColor}
              <IconClipboard className="clipboard" />
            </h2>
            <h2 className="swatchlabel shadelabel text-center" >
              {primaryShade}
            </h2>
            <button onClick={randomHexPrimary} className="button ">Change Primary Color</button>

          </div>
            <div className="column">
              <div className="swatch colorSwatch" style={{backgroundColor:secondaryColor}}></div>
              <div className="swatch shadeSwatch" style={{backgroundColor:secondaryShade}}></div>

                <h2 className="swatchlabel text-center" >{secondaryColor}</h2>
                <h2 className="swatchlabel shadelabel text-center" >{secondaryShade}</h2>
              <button onClick={randomHexSecondary} className="button ">Change Secondary Color</button>

            </div>
          </div>
      </div>


      <div className="block hide">
        <div className="row">
          <div className="column ">
            <div className="swatch swatchText text-center">{adjectiveFirst}</div>
            <button onClick={randomAdjectiveFirst} className="button" style={{marginTop:'4rem'}}>Change Adjective 1</button>
          </div>
          <div className="column text-center" style={{flex:'0 1 2%'}}>
            <h3 style={{margin:'2rem 0', fontSize:'2.2rem'}}>&</h3>
          </div>
            <div className="column">
              <div className="swatch swatchText text-center">{adjectiveSecond}</div>
              <button onClick={randomAdjectiveSecond} className="button" style={{marginTop:'4rem'}}>Change Adjective 2</button>
            </div>
          </div>
      </div>


      <button className="button" style={{
          marginTop:'2rem',
          marginBottom:'6rem',
          backgroundColor:'blue',
          color:'white',
          fontWeight:'bold',
          fontSize:'1.5rem'
        }}>PDF</button>

    </main>

  </div>

)}




export default IndexPage;
