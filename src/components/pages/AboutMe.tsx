import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="intro">
      <p className="section">
        Hi there! I'm Ava Silver (
        <a
          href="https://pronoun.is/she?or=they"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="trans">she/they</span>
        </a>
        ), and I'm a student at Northeastern University studying Computer
        Science and Software Engineering.
      </p>
      <p className="section">
        <span>
          I'm interested in Application and Web Development, although I'm open
          to all kinds of development work. See my{" "}
        </span>
        <a
          href="https://www.linkedin.com/in/ava-silver/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <span>, </span>
        <a href="Resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <span>, or </span>
        <a
          href="https://github.com/ava-silver"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        <span> for more information on my experience.</span>
      </p>
    </div>
  );
}

export default AboutMe;
