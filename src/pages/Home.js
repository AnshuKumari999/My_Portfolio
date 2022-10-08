import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Anshu Kumari</h2>
        <div className="prompt">
          <p>
            A Full Stack Developer with a passion for learning and creating.
          </p>
          <a
            href="https://www.linkedin.com/in/anshu-kumari-58a141171/"
            target="blank"
          >
            <LinkedInIcon />
          </a>

          <a href="https://github.com/AnshuKumari999" target="blank">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, Ionic, BootStrap, MaterialUI,
              Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
