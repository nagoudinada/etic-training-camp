import React, { useState } from "react";
import DatePicker from "react-datepicker";
import '../style/SignUpStyle.css';

function SignUp() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="sign-up">
      <div className="title">
        <h1>Hello There</h1>
        <p>Sign up to a new Account</p>
      </div>

      <div className="sign-up-form">
          <div className="idk">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" placeholder="Full Name" />
          </div>
          <div className="idk">
            <label htmlFor="familyName">Family Name</label>
            <input
              type="text"
              name="familyName"
              id="familyName"
              placeholder="family name"
            />
        </div>
        <div className="idk">
          <label htmlFor="birthDate">Birth Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="idk">
          <label htmlFor="region">Region</label>
          <input type="text" name="region" id="region" placeholder="Region" />
        </div>
        <div className="idk email">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="email"/>
        </div>
        <div className="idk email">
          <label htmlFor="confirmEmail">Confirm Email</label>
          <input type="email" name="confirmEmail" id="confirmEmail" placeholder="Confirm Email"/>
        </div>
        <div className="idk">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="idk">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>
      </div>
    <button className="sign-up-button"> Sign Up</button>
<p>Already have an Account ? <span className="sign-in-route">Sign In~</span></p>
    </div>
  );
}

export default SignUp;