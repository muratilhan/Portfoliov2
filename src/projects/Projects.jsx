import React from "react";
import "./projects.css";
import datas from "./datas";

const Projects = ({toggleModal, setImgSource}) => {


  const handleClick = (img) => {
    setImgSource(img);
    toggleModal();
  }

  return (
    <div id="projects" index="1" className="projects-container deneme">
      <div className="projects-header">
        <h2>My Works</h2>
        <p>
          I have been working on web projects for the past 2 years, primarily
          focusing on developing full-stack applications. I have gained valuable
          experience in this field, and I would like to share a few examples of
          my work below. lastly I would greatly appreciate any feedback or
          suggestions you may have regarding my work.
        </p>
      </div>
      <div className="projects">
        {datas.map((project) => (
          <div className="project">
            <h2> {project.title} </h2>
            <p> {project.description} </p>
            <p>
              <span style={{ color: "orange" }}>Technologies:</span>{" "}
              {project.technologies}{" "}
            </p>
            <img onClick={()=>handleClick(project.image)} src={project.image} alt="" />
            <span>
              URL:{" "}
              <a style={{ color: "white" }} href={project.url} target="_blank">
                {" "}
                {project.domain}{" "}
              </a>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
