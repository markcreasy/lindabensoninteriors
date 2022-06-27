import * as React from "react"
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// markup
const IndexPage = ({data}) => {
  
  return (
    <Layout pageTitle="home">
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
