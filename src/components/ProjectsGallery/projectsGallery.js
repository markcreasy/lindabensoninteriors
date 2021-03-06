import React, { useState } from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import './projectsGallery.css'

const ProjectsGallery = ({data}) => {

  console.log(data);

  const projectNames = [
    {dir:"portfolio/mim2015",name:"Mansion in May 2014"},
    {dir:"portfolio/statelyHomes",name:"Stately Homes by the Sea 2013"},
    {dir:"portfolio/MansionInMay",name:"Mansion in May 2012"},
    {dir:"portfolio/townRetreat",name:"Hunterdon Retreat"},
    {dir:"portfolio/rumsonTv",name:"Rumson Family Room"},
    {dir:"portfolio/rumsonHallway1",name:"Rumson Hallway"},
    {dir:"portfolio/rumsonGuest",name:"Rumson Guest Room 1"},
    {dir:"portfolio/rumsonBed",name:"Rumson Guest Room 2"},
    {dir:"portfolio/barclayPoolhouse",name:"Tewksbury Poolhouse"},
    {dir:"portfolio/powderRoom",name:"Bathrooms/Powder Rooms"},
    {dir:"portfolio/asburyOffice",name:"Asbury Office"},
    {dir:"portfolio/weekendOffice",name:"Weekend Office"},
    {dir:"portfolio/gentlemensBar",name:"Gentelmen's Bar"},
    {dir:"portfolio/townGym",name:"Oldwick Gym"}
  ];

  const projects = projectNames.map( (project) => {
    return {
      name: project.name,
      thumbs: data.thumbs.nodes.filter( img => img.relativeDirectory === project.dir),
      features: data.features.nodes.filter( img => img.relativeDirectory === project.dir)
    }
  });

  // current project state tracking
  const [currentProject, setCurrentProject] = useState(projects[0]);
  // current photo state tracking
  const [currentPhoto, setCurrentPhoto] = useState(getImage(currentProject.features[0]));

  const activeProject = (listItem) => {
    if(currentProject.name === listItem){
      return "active"
    }else{
      return "";
    }
  }


  function ProjectList(){
    const listItems = projects.map((project) =>
      <button key={project.name} onClick={()=>updateProject(project.name)} className={activeProject(project.name)}>{project.name}</button>
    );
    return listItems;
  }

  function ProjectImages(){
    return currentProject.thumbs.map((photo, index) => {
      const featureImage = getImage(currentProject.features[index]);
      const thumbImage = getImage(photo);
      return (
        <button key={photo.relativePath} onClick={() => setCurrentPhoto(featureImage)}>
          <GatsbyImage className="thumb" image={thumbImage} alt={currentProject.name} />
        </button>);
    })
  }

  function updateProject(projectName){
    const project = projects.filter(project => project.name === projectName)[0];
    setCurrentProject(project);
    setCurrentPhoto(getImage(project.features[0]));
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
        <ProjectImages key='projectImages'/>
      </div>
    </div>
  )
}

export default ProjectsGallery
