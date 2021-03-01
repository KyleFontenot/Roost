import React, { useState, useRef } from "react"
import Header from "../components/header"
import RandomizerButton from '../components/randomizerButton'
import FontBlocklet from '../components/FontBlocklet'
// import PDFbutton from "../components/PDFbutton"
import adjectiveArray from "../components/storage"
import ColorBlocklet from "../components/colorblocklet"
import IconGithub from '../images/GitHub-Mark-64px.png'
import FontSpaceMono from '../components/fonts/SpaceMono-Regular.ttf'

import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer'


const IndexPage = () => {
  const infobox = useRef(null)
  const [primaryColor, setPrimary] = useState("#b2fc40")
  const [primaryShade, setPrimaryShade] = useState("#8ec933")
  const [secondaryColor, setSecondary] = useState("#eeaabf")
  const [secondaryShade, setSecondaryShade] = useState("#aa778b")
  const [adjectiveFirst, setadjectiveFirst] = useState("???")
  const [adjectiveSecond, setadjectiveSecond] = useState("???")
  const [fontPrimary, setFontPrimary] = useState("Work Sans")
  const [fontSecondary, setFontSecondary] = useState("Work Sans")

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
    <div style={{ width: "100%" }}>
      <div
        id="wrapper"
        style={{
          backgroundColor: primaryColor,

          background:`linear-gradient(to bottom right, ${primaryColor} 30%, ${secondaryColor})`,
          transition: "background 1.2s",
        }}
      ></div>
      <div id="wrapperAccent"></div>
      <Header primaryColor={primaryColor} />
      <main>
        <div
          className="block subheader "
          ref={infobox}
        >
          <div className="infobox" onClick={() => {
            if (infobox.current.classList.contains("subheaderExpand")) {
              infobox.current.classList.remove("subheaderExpand")
            } else {
              infobox.current.classList.add("subheaderExpand")
            }
          }}>
            <span className="subheaderArrows">&#9660;</span>
            <span className="speciali">i</span>
            <span className="subheaderArrows">&#9660;</span>
          </div>

          <div className="subheaderText">
            <p>
              Roost is a simple way to generate a quick idea for an overall web
              aesthetic. Use it for CodePens, use it for practicing layout
              development, use it for composing your next email, using it for
              flexing that right-brain of yours.
            </p>
            <p style={{textAlign:'center'}}><a href="https://github.com/KyleFontenot" target="__blank">
              <img src={IconGithub} height="32px" style={{
                  marginRight:'1rem',
                  marginBottom:'-0.5rem'
                }}/>
              KyleFontenot
            </a>
            <span style={{fontSize: '1.3rem'}}> / </span>
            <a href="https://github.com/KyleFontenot/Roost" target="__blank">Roost</a></p>
          </div>
        </div>


        <RandomizerButton
          color1={primaryColor}
          color2={primaryShade}
          setter1={setPrimary}
          setter2={setPrimaryShade}
          adj1={adjectiveFirst}
          adj2={adjectiveSecond}
          setter3={setadjectiveFirst}
          setter4={setadjectiveSecond}
          font1={fontPrimary}
          font2={fontSecondary}
          setter5={setFontPrimary}
          setter6={setFontSecondary}

        />

        <div className="block ">
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

        <div className="block ">
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

        <FontBlocklet
          font1={fontPrimary}
          setter1={setFontPrimary}
          font2={fontSecondary}
          setter2={setFontSecondary}
          />

        <div className="hr"></div>

        <div className="block" id="summary">
          <h2 style={{
              textAlign:'center',

            }}>Summed Up:</h2>
          <div className="row">

            <div className="column ">
              <div className="swatch swatchFont text-center" style={{
                  backgroundColor:primaryColor
                }}>
              </div>
              <div className="swatch swatchFont text-center" style={{
                  backgroundColor:secondaryColor
                }}>
              </div>
            </div>
            <div className="column ">
              <div className="swatch swatchText text-center"
                style={{fontSize:'1.3rem'}}>
                {adjectiveFirst}
              </div>
              <div className="swatch swatchText text-center" style={{fontSize:'1.3rem'}}>
                {adjectiveSecond}
              </div>

            </div>
            <div className="column ">
              <div className="swatch swatchFont text-center" style={{height:'100%'}}>
								<span className='swatchFontHeader' style={{
									fontFamily:fontPrimary,
									fontSize:'1.8rem',
                  maxWidth:'100%'
								}} >
									{fontPrimary}
								</span>

								<span className="" style={{
									fontFamily:fontSecondary
								}} >
									{fontSecondary}
								</span>
							</div>

            </div>
          </div>
        </div>


          <PDFDownloadLink document={<MyDoc
              color1={primaryColor}
              shade1={primaryShade}
              color2={secondaryColor}
              shade2={secondaryShade}
              adjective1={adjectiveFirst}
              adjective2={adjectiveSecond}
              font1={fontPrimary}
              font2={fontSecondary}
                />} fileName="RoostSummary.pdf"
              className="actionButton" style={{marginBottom:'8rem'}}>
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink>

      </main>
    </div>
  )
}
// const source = '../components/fonts/SpaceMono-Regular.ttf';
Font.register({ family: 'SpaceMono', src: FontSpaceMono });
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 30
  },
  section: {
    padding: 10,
    flexGrow: 1,
    fontFamily:'SpaceMono',
    border:3
  },
  text: {
    margin: 2,
    padding: 5,
    textAlign: 'center'
  }
});

const MyDoc = ({color1, color2, shade1, shade2, adjective1, adjective2, font1, font2}) => (


  <Document style={styles.document}>
    <Page size="B5" style={[styles.page,
        {backgroundColor:color1,
          boxShadow:'-6px 6px 0 #000'
        }]}>
      <View style={[styles.section, {
          backgroundColor:'white',
          borderTopLeftRadius:12,
          borderTopRightRadius:12,
          borderBottomLeftRadius:12,
          borderBottomRightRadius:12,
          paddingTop:50,
          width:'100%',
        }]}>
        <Text style={styles.text}>Primary Color:   {color1}</Text>
        <Text style={[styles.text, {marginBottom:'30px'}]}>Primary Shade:   {shade1}</Text>
        <Text style={styles.text}>Secondary Color:   {color2}</Text>
        <Text style={[styles.text, {marginBottom:'30px'}]}>Secondary Shade:   {shade2}</Text>
        <Text style={styles.text}>First Adjective:   {adjective1}</Text>
        <Text style={[styles.text, {marginBottom:'30px'}]}>Second Adjective:   {adjective2}</Text>
        <Text style={styles.text}>First Font:   {font1}</Text>
        <Text style={styles.text}>Second Font:   {font2}</Text>
      </View>
    </Page>
  </Document>
)

export default IndexPage;
