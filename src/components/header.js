import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import SEO from "./seo"

// import { Link } from 'gatsby'
// import Img from 'gatsby'
import "./layout.scss"
import "./custom.scss"

const Header = primaryColor => {
  return (
    <>
      <SEO />
      <header>
        <div id="MainLogo" style={{ backgroundColor: primaryColor }}>
          <div className="logoShapes">
            <div className="logocircle"></div>
            <div className="logocircle"></div>
            <div className="logocircle"></div>
          </div>
          <h1>Roost</h1>
          <div className="logoShapes">
            <div className="logocircle"></div>
            <div className="logocircle"></div>
            <div className="logocircle"></div>
          </div>
        </div>
      </header>




    </>
  )
}

export default Header
