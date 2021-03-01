import React, {useRef, useState} from 'react'

const FontBlocklet = ({font1, setter1, font2, setter2}) => {

	const [fontPrimaryLink, setFontPrimaryLink] = useState(' ');
	const [fontSecondaryLink, setFontSecondaryLink] = useState(' ');

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


	return (
		<div className="block ">
			<div className="row">
				<div className="column ">
					<div className="row">
						<div className="column swatchFontDisplay">
							<div className="swatch" style={{
									padding:'2rem 0',
									display:'block',
									margin:'0 auto',
									height:'100%'
								}}>
								<h2 style={{
									fontFamily: font1,
									fontSize:'1.6rem'
								}}>Heading 1</h2>
								<p style={{
									fontFamily:font2,
									fontSize:'1rem'
								}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</div>
						</div>

						<div className="column ">
							<div className="swatch swatchFont text-center" style={{height:'100%'}}>
								<span className='swatchFontHeader' style={{
									fontFamily:font1,
									fontSize:'1.8rem'
								}} >
									{font1}
								</span>

								<span className="" style={{
									fontFamily:font2,
									fontSize:'1.1rem'
								}}>
									{font2}
								</span>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="column center" style={{textAlign:'center'}}>
						<a href={fontPrimaryLink} target="__blank" className="fontlinks">{font1}</a>
						<br />
							<button className="button"
							onClick={() => setNewFont(font1, setter1, setFontPrimaryLink)}
							>
								Change Font 1
							</button>
						</div>
						<div className="column center">
						<a href={fontSecondaryLink} target="__blank" className="fontlinks">{font2}</a>
							<button className="button"
							onClick={() => setNewFont(font2, setter2, setFontSecondaryLink)}>
								Change Font 2
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default FontBlocklet
