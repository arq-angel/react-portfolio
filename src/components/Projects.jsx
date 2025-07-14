import React from "react";
import project from "../assets/project_01.png";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      image: project,
      github: "https://github.com/arq-angel",
      url: "",
      title: "My portfolio",
      description: "Techstack: HTML, CSS, JavaScript, React",
    },
    {
      image: project,
      github: "https://github.com/arq-angel",
      url: "",
      title: "My portfolio",
      description: "Techstack: HTML, CSS, JavaScript, React",
    },
    {
      image: project,
      github: "https://github.com/arq-angel",
      url: "",
      title: "My portfolio",
      description: "Techstack: HTML, CSS, JavaScript, React",
    },
    {
      image: project,
      github: "https://github.com/arq-angel",
      url: "",
      title: "My portfolio",
      description: "Techstack: HTML, CSS, JavaScript, React",
    },
  ];

  return (
    <section className="projects container" id="projects">
      <Title title="My Projects" />

      <div className="grid project-container">
        {projects.length > 0 &&
          projects.map((project, index) => (
            <ProjectCard key={index} {...project} />

            // <ProjectCard
            //   key={index}
            //   image={project.image}
            //   github={project.github}
            //   url={project.url}
            //   title={project.title}
            //   description={project.description}
            // />
          ))}
      </div>
    </section>
  );
};

export default Projects;
