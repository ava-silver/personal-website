import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact">
      <p className="name">Github:</p>
      <a
        href="https://github.com/ava-silver"
        target="_blank"
        rel="noopener noreferrer"
        className="url"
      >
        <p>github.com/ava-silver</p>
      </a>
      <p className="name">Linkedin:</p>
      <a
        href="https://www.linkedin.com/in/ava-silver/"
        target="_blank"
        rel="noopener noreferrer"
        className="url"
      >
        <p>linkedin.com/in/ava-silver/</p>
      </a>
      <p className="name">Email:</p>
      <a
        href="mailto: silver.ava@northeastern.edu"
        target="_blank"
        rel="noopener noreferrer"
        className="url"
      >
        <p>silver.ava@northeastern.edu</p>
      </a>
    </div>
  );
}

export default Contact;
