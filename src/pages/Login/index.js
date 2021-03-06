import React from "react";

import logoImg from "../../assets/images/logo.svg";
import heartpurpleIcon from "../../assets/images/icons/purple-heart.svg";
// import eyeIcon from "../../assets/images/icons/eye.svg";

import "./styles.css";

function Login() {
  return (
    <div id="login-page-form" className="container">
      <div className="logo-container">
        <img src={logoImg} alt="Proffy" />
        <h2>Your online learning platform.</h2>
      </div>
      <main>
        <form action="" className="login-form">
          <fieldset>
            <legend>Sign in</legend>
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="login-inputs"
            />
            <input
              name="password"
              placeholder="Password"
              type="password"
              className="login-inputs position-eyeicon"
            />
            {/* <img src={eyeIcon} alt="Show password" className="eyeIcon" /> */}
          </fieldset>
          <fieldset>
            <div className="checkbox-input-flex">
              <ul>
                <li>
                  <input
                    name="remember-me"
                    label="Remember Me"
                    type="checkbox"
                  />
                  <label htmlFor="remember-me"> Remember me</label>
                </li>
              </ul>
              <a href="/">Forgot password</a>
            </div>
          </fieldset>
          <button type="button">Sign in</button>
        </form>
        <footer className="footer-flex">
          <div className="register">
            <p>Don't have an account?</p>
            <a href="/register">Register</a>
          </div>
          <span>
            It's free <img src={heartpurpleIcon} alt="heart purple" />
          </span>
        </footer>
      </main>
    </div>
  );
}

export default Login;
