import * as React from "react"
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const Portfolio = ({ data }) => {

  const projects = {
    "asburyBath":[],
    "asburyOffice":[],
    "barclayPoolhouse":[],
    "gentlemensBar":[],
    "MansionInMay":[],
    "mim2015":[],
    "mulheren":[],
    "rumson":[],
    "statelyHomes":[],
    "townGym":[],
    "townPowder":[],
    "townRetreat":[],
    "weekendOffice":[],
    "youngLadies":[]
  }

  const projectPhotos = data.allFile.nodes.map( node => {
    if(projects[node.relativeDirectory]) projects[node.relativeDirectory].push(node.relativePath);
  });
  // const projects = data.allFile.nodes.group(({relativeDirectory}) => relativeDirectory);
  console.log("projects: ", projects);

  return (
    <Layout pageTitle="porfolio">
    <div id="contentWrapper">
      <div id="projectsArea">
          <h3 id="picTitle">Projects</h3>
          

      </div>
      </div>
    </Layout>
  )
}

export const query = graphql `{
  allFile {
    nodes {
      relativeDirectory
      relativePath
    }
  }
}`

export default Portfolio
