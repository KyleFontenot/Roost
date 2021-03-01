import React, {useEffect} from 'react'
import adjectiveArray from "../components/storage"
import Fontblocklet, {setNewFont} from './FontBlocklet'


const RandomizerButton = ({ color1, color2, setter1, setter2, adj1, adj2, setter3, setter4, font1, font2, setter5, setter6}) => {
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

	function randomAdjectiveFirst(setter) {
    setter(
      adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)]
    )
  }

	function setNewFont(fontState, fontStateSetter, linkStateSetter) {
		fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAFDPblzKYR-wT2nx0S3TQRz5ZF7jC51NE&sort=popularity')
  .then(response => {
		let list = response.json()
		// console.log(list);
		return list;
	})
	.then(list => {
		let newFont = list.items[Math.floor(Math.random() * 300)];
		let style = document.createElement('link');
		style.rel = 'stylesheet';
		let availableFileWeight = 300;
		if (newFont.files[300] === undefined){
			for (let i = 400;i < 900; i += 100){
				if (newFont.files[i] !== undefined){
					availableFileWeight = i;
					break;
				}
			}
		}
		style.href = `https://fonts.googleapis.com/css2?family=${newFont.family.replace(/\s/g, "+")}&display=swap`;
		document.getElementsByTagName('head')[0].appendChild(style);
		fontStateSetter(fontState = newFont.family);
		return newFont;
		// console.log(list.items[2].family)
	})
	.then(newFont => {
		// setTimeout(fontStateSetter(fontState = newFont.family), 600);
		fontStateSetter(fontState = newFont.family);
		linkStateSetter(`https://fonts.google.com/specimen/${fontState.replace(/\s/g, "+")}`);
	})
	.catch(err => console.log(err));
}

  useEffect(() => {
    document.getElementById("wrapper").backgroundColor = color1;
  })
	return (
		<a href="#summary">
			<div className="button" style={{
					left: '0',
					marginTop:'2rem',
					textAlign:'center',
					textDecoration:'none',
					fontSize:'1.2rem'
				}} onClick={() => {
					randomHexPrimary();
					randomAdjectiveFirst(setter3);
					randomAdjectiveFirst(setter4);
					setNewFont(font1, setter5);
					setNewFont(font2, setter6);}}>
				Quick Randomizer

			</div>
		</a>
	)
}

export default RandomizerButton
