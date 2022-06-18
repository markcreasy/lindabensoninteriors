import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import './projectsGallery.css'

const ProjectsGallery = ({data}) => {

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
  ];

  const projects = projectNames.map( (project) => {
    return {
      name: project.name,
      photos: data.allFile.nodes.filter( img => img.relativeDirectory === project.dir)
    }
  });

  const currentProject = projects[0].name;

  function ProjectList(){
    const listItems = projects.map((project) =>
      <li key={project.name}>{project.name}</li>
    );
    return (
      <ul>{listItems}</ul>
    )
  }

  function ProjectImages(){
    const project = projects.filter(project => project.name === currentProject)[0];

    return project.photos.map((photo) => {
        const image = getImage(photo);

        return (<GatsbyImage key={photo.relativePath} className="thumb" image={image} alt={project.name} />);
    })
  }

  function PhotoFeature(){
    const currentPhoto = projects[0].photos[0];
    const image = getImage(currentPhoto);
    return (<GatsbyImage key='featurePhoto' image={image} alt={projects[0].name} />);
  }

  return (
    <div id="galleryContentWrapper">

      <div id="projectsArea">
          <h3 id="picTitle">Projects</h3>
          <ProjectList />
      </div>
      <div id="bigPic">
        <PhotoFeature />
      </div>
      <div className="thumbWrapper">
        <ProjectImages />
      </div>
    </div>
  )
}

export default ProjectsGallery
