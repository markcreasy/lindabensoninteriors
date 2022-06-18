import * as React from "react"
import Layout from '../components/layout'
import ProjectsGallery from '../components/ProjectsGallery/projectsGallery.js'
import { graphql } from 'gatsby'

const Portfolio = ({ data }) => {

  return (
    <Layout pageTitle="porfolio">

      <ProjectsGallery data={data}/>

    </Layout>
  )
}

export const query = graphql `query MyQuery {
  allFile {
    nodes {
      relativeDirectory
      relativePath
      childImageSharp {
        gatsbyImageData
      }
    }
  }
}
`

export default Portfolio
