import React from "react";
import Title from "./Title";

const About = () => {
  return (
    <section className="about" id="about">
      <Title title="About" />

      <div className="container flex about-content">
        {/* <!-- Profile Image --> */}
        <div className="flex-center myImg">
          <img src="./assets/profie_01.png" alt="profile image" />
        </div>

        {/* <!-- Bio Text --> */}
        <div className="my-bio">
          <h2>Arjun Thapa Magar</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus
            deleniti ut optio atque ratione repellendus qui in cum ullam.
            Reprehenderit error aliquid nulla ut! Cumque maiores nihil quos non!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nisi
            at assumenda ea, sequi, ut omnis facere odio laborum aliquam, quia
            fugit cum quaerat labore laboriosam tenetur iure sunt autem?
          </p>
          <p>Sydney, Australia</p>

          <div>
            <div className="tag">Interests</div>
            <div className="flex">
              <span>Coding</span>
              <span>Football</span>
              <span>Sci-Fi Films</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
