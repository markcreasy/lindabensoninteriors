import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/layout'

const ContactPage = ({data}) => {

  return (
    <Layout pageTitle="contact">
      <Helmet>
        <html lang="en" amp />
        <meta charSet="utf-8" />
        <meta name="description" content="Contact Me - Linda Benson Interiors, Interior Design Services" />
        <title>Linda Benson Interiors | Contact Me</title>
        <link rel="canonical" href="http://www.lindabensoninteriors.com/contact" />
      </Helmet>
      <div className="contact-container">

        <div id="contactInfo">
            <h2>Contact Information</h2>
            <p>Linda Benson Interiors<br/>39 Bissel Road<br/>Lebanon, NJ, 08833</p>
            <div id="pagoda"><GatsbyImage image={getImage(data.pagoda.childImageSharp)} alt="Linda Benson Interiors Logo"/></div>
            <p>Email: <a href="mailto:Linda@lindabensoninteriors.com">Linda@lindabensoninteriors.com</a>  </p>
        </div>

        <div id="contactPic">
          <GatsbyImage image={getImage(data.feature.childImageSharp)} alt="Linda's Work"/>
        </div>
      </div>

    </Layout>
  )
}

export const query = graphql`
  query {
    feature: file(relativePath: { eq: "portfolio/statelyHomes/LINDA_006-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(width:450)
      }
    }
    pagoda: file(relativePath: { eq: "contact/LindaBensonContactsPagoda.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default ContactPage
