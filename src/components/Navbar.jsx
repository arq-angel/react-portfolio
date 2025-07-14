import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="header container flex">
        <div className="logo flex">
          <div>Arjun</div>
          <div className="line">Full Stack Software Developer</div>
        </div>
        <label for="hamburgerMenu">
          <i className="fa-solid fa-bars"></i>
        </label>

        <input type="checkbox" id="hamburgerMenu" />

        <div className="menu">
          <ul className="flex navigation">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
