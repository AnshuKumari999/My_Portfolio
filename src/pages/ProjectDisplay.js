import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt=" " />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div class="btn">
        <button id="first" class="both">
          <a href={project.view} target="blank">
            View Page
          </a>
        </button>
        <button id="second" class="both">
          <a href={project.source} target="blank">
            Source Code
          </a>
        </button>
      </div>
    </div>
  );
}

export default ProjectDisplay;
