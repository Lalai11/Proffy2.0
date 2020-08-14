import React from "react";

import logoImg from "../../assets/images/logo.svg";
import heartpurpleIcon from "../../assets/images/icons/purple-heart.svg";
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
              className="login-inputs"
            />
          </fieldset>
          <fieldset>
            <div className="checkbox-input-flex">
              <div className="label-flex">
                <input name="remember-me" label="Remember Me" type="checkbox" />
                <label htmlFor="remember-me"> Remember me</label>
              </div>
              <a href="/">Forgot password</a>
            </div>
          </fieldset>
          <button type="button">Sign in</button>
        </form>
        <footer className="footer-flex">
          <div className="register">
            <p>Don't have an account?</p>
            <a href="/regsiter">Register</a>
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
