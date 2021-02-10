import React from "react"
import { Link } from "gatsby"
// import Image from "gatsby-image"

const ProjectPreview = ({slug, title, description}) => (
  <div className="project-preview">

    <Link to={`/${slug}/`}>
      <h2>{title}</h2>
    </Link>
    <p>{description}</p>


  </div>
)
export default ProjectPreview
