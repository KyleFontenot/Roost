import React from "react"

// import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  const primaryColor = '#B2FC40';

  return (
  < >
  <div id="wrapper"
    style={{
      backgroundColor:primaryColor,
      transition:'background-color 1.2s'
    }}
    ></div>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </ >
)}

export default NotFoundPage
