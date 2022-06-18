import React, { useState } from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import './projectsGallery.css'

const ProjectsGallery = ({data}) => {

  const projectNames = [
    {dir:"mim2015",name:"Mansion in May 2014"},
    {dir:"statelyHomes",name:"Stately Homes by the Sea 2013"},
    {dir:"MansionInMay",name:"Mansion in May 2012"},
    {dir:"townRetreat",name:"Hunterdon Retreat"},
    {dir:"rumson",name:"Rumson Family Room"},
    {dir:"rumsonHallway1",name:"Rumson Hallway"},
    {dir:"rumsonGuest",name:"Rumson Guest Room 1"},
    {dir:"rumsonBed",name:"Rumson Guest Room 2"},
    {dir:"barclayPoolhouse",name:"Tewksbury Poolhouse"},
    {dir:"powderRoom",name:"Bathrooms/Powder Rooms"},
    {dir:"asburyOffice",name:"Asbury Office"},
    {dir:"weekendOffice",name:"Weekend Office"},
    {dir:"gentlemensBar",name:"Gentelmen's Bar"},
    {dir:"townGym",name:"Oldwick Gym"}
  ];

  const projects = projectNames.map( (project) => {
    return {
      name: project.name,
      photos: data.allFile.nodes.filter( img => img.relativeDirectory === project.dir)
    }
  });

  // current project state tracking
  const [currentProject, setCurrentProject] = useState(projects[0]);
  // current photo state tracking
  const [currentPhoto, setCurrentPhoto] = useState(getImage(currentProject.photos[0]));


  function ProjectList(){
    const listItems = projects.map((project) =>
      <li key={project.name} onClick={()=>updateProject(project.name)}>{project.name}</li>
    );
    return (
      <ul>{listItems}</ul>
    )
  }

  function ProjectImages(){
    return currentProject.photos.map((photo) => {
        const image = getImage(photo);
        return (<div key={photo.relativePath} onClick={() => setCurrentPhoto(image)}><GatsbyImage className="thumb" image={image} alt={currentProject.name} /></div>);
    })
  }

  function updateProject(projectName){
    const project = projects.filter(project => project.name === projectName)[0];
    setCurrentProject(project);
    setCurrentPhoto(getImage(project.photos[0]));
  }


  return (
    <div id="galleryContentWrapper">
      <div id="projectsArea">
          <h3 id="picTitle">Projects</h3>
          <ProjectList />
      </div>
      <div id="bigPic">
        <GatsbyImage key='featurePhoto' image={currentPhoto} alt={projects[0].name} />
      </div>
      <div className="thumbWrapper">
        <ProjectImages key='projectImages' />
      </div>
    </div>
  )
}

export default ProjectsGallery
