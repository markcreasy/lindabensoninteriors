import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const AboutPage = ({data}) => {
  console.log("about debug");
  console.log(data);
  return (
    <Layout pageTitle="about">
    <div id="contentWrapper" className="aboutWrapper">
      <div id="bioPic">
          <GatsbyImage image={getImage(data.linda1.childImageSharp)} alt="Linda"/>
          <GatsbyImage image={getImage(data.linda2.childImageSharp)} alt="Linda's Work'"/>
      </div>

      <div id="textArea">
          <h3>About Linda</h3>
          <p>
              Linda started out her career as a Fashion Stylist/Producer for photo
              shoots for many different retailers, advertising agencies &amp; TV. Her travels
              for work as well as spending time in the beautiful homes which were used as
              locations for these photo shoots, continually tweaked her interest in Interiors.
              During the latter part of these years Linda went on to do some Set Design and
              House Design for many clients. Linda&apos;s 18+ years as a creative producer was
              the perfect segue into the world of Interior Design. She started working in
              this field in 1996 as she was designing her own country home.  She went on
              to open Linda Benson Interiors, LLC in 2008 and is an Associate Member of ASID.
          </p>
          <p>
              Linda&apos;s style was shaped by two years of living in Paris and traveling throughout Europe, as well as by classes taken at Parson&apos;s, the New York School of Interior Design, and the American College in Paris. Linda has a B.A. from Fairleigh Dickinson University. She can transform a space into a classic, timeless aesthetic with an updated look. Her attention to detail and workmanship is unparalleled. She believes that a home should reflect its owners&apos; lifestyle and therefore works very hard to express their interests and their aesthetic. While Linda artfully blends classic pieces with a variety of styles, periods and antiques, she always focuses on a comfort. She believes in the importance of client/designer relationships and wants their design experience to be a memorable and enjoyable one.
          </p>
          <p>
              Linda has worked on projects in Manhattan; Park Slope, Brooklyn; Darien, Connecticut; Annandale, Bedminster, Morristown, Oldwick, Pottersville, Short Hills, Summit, South Mantalokin, Tewksbury, Chatham, Rumson, and Little Silver New Jersey. Linda has designed Location &apos;05 in Manhattan – four lofts that cater to the Film &amp; Photography Industry. The styles range from New England Country Home to Midcentury and from Beach House to Contemporary. They are used by major publications, advertising campaigns, celebrity interviews, television shows, and film clients such as House Beautiful, Better Homes &amp; Garden, Real Simple, Martha Stewart, etc. She has also designed event planning spaces in Manhattan.
          </p>
          <div>
            Show Houses:
            <ul>
              <li>-Mansion In May 2012 - Pippa Middleton's Private Office</li>
              <li>-Stately Homes By The Sea 2013 - Something's Gotta Give Sunroom</li>
              <li>- Mansion In May 2014 - Grey Gardens' Great Room</li>
            </ul>
          </div>
          <div className="asidLogo"><GatsbyImage image={getImage(data.asidLogo.childImageSharp)} alt="American Society of Interior Designers"/></div>
      </div>
    </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    asidLogo: file(relativePath: { eq: "about/asidlogo.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    linda1: file(relativePath: { eq: "about/pic1.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    linda2: file(relativePath: { eq: "about/pic2.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default AboutPage
