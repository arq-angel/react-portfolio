import React from "react";
import Title from "./Title";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Title title="Skills" />

      <div className="container flex skills-container">
        <div>
          <i className="fa-brands fa-html5" style={{ color: "orange" }}></i>
          <span>HTML</span>
        </div>
        <div>
          <i className="fa-brands fa-css3-alt" style={{ color: "blue" }}></i>
          <span>CSS</span>
        </div>
        <div>
          <i className="fa-brands fa-js" style={{ color: "yellow" }}></i>
          <span>JavaScript</span>
        </div>
        <div>
          <i
            className="fa-brands fa-square-github"
            style={{ color: "lack" }}
          ></i>
          <span>GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
