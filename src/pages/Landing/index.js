import React from "react";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import "./styles.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <div className="logo-container-col-1">
            <img src={logoImg} alt="Proffy logo" />
            <h2>Your platform to learn online.</h2>
          </div>
          <img src={landingImg} alt="Learn online" className="hero-image" />
        </div>
        <div className="text-container">
          <h3>Welcome to Proffy</h3>
          <p>
            Proffy is an online platform where you can learn or teach through
            video classes. <br />
            We offer a variatey of school subject such as Math, History,
            Geography and more. <br /> <br />
            If you are already part of Proffy team login to your profile or
            register to learn or mentor who needs.{" "}
          </p>

          <div className="buttons-container">
            <a href="/" className="login">
              Login
            </a>

            <a href="/" className="register">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
