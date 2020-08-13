import React from "react";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import learnIcon from "../../assets/images/icons/study.svg";
import teachIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

function Home() {
  return (
    <div id="page-landing">
      <div id="page-landing-content">
        <div className="logo-container">
          <div className="logo-container-col-1">
            <img src={logoImg} alt="Proffy logo" />
            <h2>Your platform to learn online.</h2>
          </div>
          <img src={landingImg} alt="Learn online" className="hero-image" />
        </div>
        <div>
          <h3>Welcome</h3>
          <p>What do you want to do?</p>
          <span>
            Total of 200 connections{" "}
            <img
              className="total-connections"
              src={purpleHeartIcon}
              alt="Purple heart"
            />
          </span>
          <div className="buttons-container">
            <a href="/" className="learn">
              <img src={learnIcon} alt="learn button" />
              Learn
            </a>
            <a href="/" className="teach">
              <img src={teachIcon} alt="teach button" />
              Teach
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
