import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from '../components/layout'
import ProjectsGallery from '../components/ProjectsGallery/projectsGallery.js'
import { graphql } from 'gatsby'

const PortfolioPage = ({ data }) => {

  return (
    <Layout pageTitle="portfolio">
    <Helmet>
      <html lang="en" amp />
      <meta charSet="utf-8" />
      <meta name="description" content="Porfolio Page - Linda Benson Interiors, Interior Design Services" />
      <title>Linda Benson Interiors | Portfolio</title>
      <link rel="canonical" href="http://www.lindabensoninteriors.com/about" />
    </Helmet>
      <ProjectsGallery data={data}/>

    </Layout>
  )
}

export const query = graphql `query getProjectImages {
  thumbs: allFile(filter: {ext: {nin: [".gif",".ico"]}}) {
    nodes {
      relativeDirectory
      relativePath
      childImageSharp {
        gatsbyImageData(width:90, height:90)
      }
    }
  }
  features: allFile(filter: {ext: {nin: [".gif",".ico"]}}) {
    nodes {
      relativeDirectory
      relativePath
      childImageSharp {
        gatsbyImageData(width:600)
      }
    }
  }
}
`

export default PortfolioPage
