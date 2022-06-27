import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// markup
const IndexPage = ({data}) => {

  return (
    <Layout pageTitle="home">
      <Helmet>
        <html lang="en" amp />
        <meta charSet="utf-8" />
        <meta name="description" content="Home Page - Linda Benson Interiors, Interior Design Services" />
        <title>Linda Benson Interiors</title>
        <link rel="canonical" href="http://www.lindabensoninteriors.com" />
      </Helmet>
      <div className="showcase">
          <GatsbyImage image={getImage(data.showcasePhoto.childImageSharp)} alt="Linda Benson Showcase"/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    showcasePhoto: file(relativePath: { eq: "portfolio/statelyHomes/LINDA_006-1.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default IndexPage
