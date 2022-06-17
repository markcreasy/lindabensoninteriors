import * as React from "react"
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const Portfolio = ({ data }) => {

  const projectNames = [
    {dir:"mim2015",name:"Mansion in May 2014"},
    {dir:"statelyHomes",name:"Stately Homes by the Sea 2013"},
    {dir:"MansionInMay",name:"Mansion in May 2012"},
    {dir:"townRetreat",name:"Hunterdon Retreat"},
    {dir:"rumson",name:"Rumson Family Room"},
    {dir:"rumsonHallway",name:"Rumson Hallway"},
    {dir:"rumsonGuest",name:"Rumson Guest Room 1"},
    {dir:"rumsonBed",name:"Rumson Guest Room 2"},
    {dir:"barclayPoolhouse",name:"Tewksbury Poolhouse"},
    {dir:"powderRoom",name:"Bathrooms/Powder Rooms"},
    {dir:"asburyOffice",name:"Asbury Office"},
    {dir:"weekendOffice",name:"Weekend Office"},
    {dir:"gentlemensBar",name:"Gentelmen's Bar"},
    {dir:"townGym",name:"Oldwick Gym"}
  ]

  const projects = projectNames.map( (project) => {
    return {
      name: project.name,
      photos: data.allFile.nodes.filter( img => img.relativeDirectory === project.dir).map( img => {return img.relativePath})
    }
  });

  function ProductList(){
    const listItems = projects.map((project) =>
      <li key={project.name}>{project.name}</li>
    );
    return (
      <ul>{listItems}</ul>
    )
  }


  return (
    <Layout pageTitle="porfolio">
    <div id="contentWrapper">
      <div id="projectsArea">
          <h3 id="picTitle">Projects</h3>
          <ProductList />
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
