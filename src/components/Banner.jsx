import React from "react";
import cartImg from "../assets/pictures/carMainPage.jpg";
import "../style/BannerStyle.css";

export default function Banner() {
  return (
    <div style={{"padding": "0 3rem"}}>
      <div className="BannerTitle">Explore Car Offers in Algeria</div>
      <div className="Banner">
        <div className="leftBanner">
          <div className="BannerText">
            <h1>Low Price,</h1>
            <h1>Almost As New ...</h1>
          </div>
          <button>Sell Now</button>
        </div>
        <div className="rightBanner">
          <img src={cartImg} alt="/" />
        </div>
      </div>
    </div>
  );
}
