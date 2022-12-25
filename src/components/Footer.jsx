import React from "react";
import facebook from "../assets/icons/bxl-facebook.svg";
import instagram from "../assets/icons/instagram-logo.svg";
import twitter from "../assets/icons/bxl-twitter.svg";
import youtube from "../assets/icons/youtube-logo.svg";
import "../style/FooterStyle.css";

function Footer() {
  return (
    <div className="Footerclass">
      <div className="Footer">
        <div>LOGO</div>
        <div className="column">
          <div className="columnTitle">Learn More</div>
          <div className="listOptions">
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="column">
          <div className="columnTitle">Contact Us</div>
          <div className="listOptions">
            <ul>
              <li>
                <a href="/"><span className="bold">Email  &nbsp;&nbsp;</span>TEAM7@gmail.com</a>
              </li>
              <li>
                <a href="/"><span className="bold">Number &nbsp;&nbsp;</span>+213 6 68795436</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="column">
          <div className="columnTitle">Social</div>
          <div className="footerIcons">
            <a href="/">
              <img src={facebook} alt="/" className="icons" />
            </a>
            <a href="/">
              <img src={instagram} alt="/" className="icons" />
            </a>
            <a href="/">
              <img src={twitter} alt="/" className="icons" />
            </a>
            <a href="/">
              <img src={youtube} alt="/" className="icons" />
            </a>
          </div>
        </div>
      </div>

      <div className="rightsReserved">© 2022 | All Rights Reserved</div>

    </div>
  );
}

export default Footer;
