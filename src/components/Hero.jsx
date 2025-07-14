import React from "react";
import profile1 from "../assets/profile_01.png";

const Hero = () => {
  return (
    <>
      <section className="hero-section container" id="hero">
        <div className="grid hero">
          <div className="left flex">
            <div>
              Hi I'm <span>Arjun Thapa Magar</span>
            </div>
            <div className="tag">Soft. Engineer</div>
            <p>I love coding and make cool stuff with what I know</p>
            <div>
              <a href={profile1} download>
                <button>
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>

          <div className="right flex">
            <img src={profile1} alt="arjun picture" />
          </div>
        </div>
      </section>

      {/* <!-- banner section --> */}
      <section className="flex banner container">
        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>IT</span>
            <p>Graduation</p>
          </div>
        </div>

        <div className="info-divider"></div>

        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>5+ Projects</span>
            <p>Completed</p>
          </div>
        </div>

        <div className="info-divider"></div>

        <div className="flex info-content">
          <div className="flex-center icon-container">
            <i className="fa-solid fa-award"></i>
          </div>
          <div>
            <span>1+ Year</span>
            <p>Experience</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
