import * as React from "react"
import Layout from '../components/layout'
import ProjectsGallery from '../components/ProjectsGallery/projectsGallery.js'
import { graphql } from 'gatsby'

const PortfolioPage = ({ data }) => {
  
  return (
    <Layout pageTitle="portfolio">

      <ProjectsGallery data={data}/>

    </Layout>
  )
}

export const query = graphql `query getProjectImages {
  allFile(filter: {ext: {nin: [".gif",".ico"]}}) {
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

export default PortfolioPage
