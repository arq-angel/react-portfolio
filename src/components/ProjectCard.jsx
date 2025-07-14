import React from "react";

const ProjectCard = ({ image, github, url, title, description }) => {
  return (
    <div className="project-card">
      <div className="top">
        <img src={image} alt="" width="100%" />
      </div>
      <div className="bottom container">
        <div className="links">
          <a href={github} target="_blank">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a href={url} target="_blank">
            <i className="fa-brands fa-chrome"></i>
          </a>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
