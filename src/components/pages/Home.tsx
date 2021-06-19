import React from "react";
import "../../App.css";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="content">
        <img
          src="profile.jpg"
          alt="Profile"
          width="300"
          height="400"
          className="profile rounded-corners"
        />
        <div className="intro">Ava Silver</div>
      </div>
    </div>
  );
}

export default Home;
