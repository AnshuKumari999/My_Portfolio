import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/jiyasha111/" target="blank">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/hzb.anshu" target="blank">
          <FacebookIcon />
        </a>
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
  );
}

export default Footer;
