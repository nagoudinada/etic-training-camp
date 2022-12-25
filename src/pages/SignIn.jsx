import React from "react";
import "../style/SignInStyle.css";
import car1 from "../assets/pictures/car1.png";

function SignIn() {
  return (
    <div className="SignIn">
      <div className="left">
        <div className="title">
          <h1>Welcome Back</h1>
          <h2>Sign In to your account</h2>
        </div>

        <div className="inputs">
          <div className="inputEmail">
            <div>Email</div>
            <input type="text" placeholder="Please enter your email" />
          </div>
          <div className="inputPassword">
            <div>Password</div>
            <input type="password" placeholder="Please enter your password" />
          </div>
        </div>

        <button className="buttonSignIn">Sign In</button>

        <div className="SignUp">
          <div>
            Don't have an account? <a href="/">Sign Up Now.</a>
          </div>
        </div>
      </div>

      <div className="slide">
        <img src={car1} alt="/" />
      </div>
    </div>
  );
}

export default SignIn;
