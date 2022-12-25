import React from "react";
import { account, home, comment, shart, like } from "../assets/icons";
import Rating from "./Rate";

function Cardbig() {
  return (
    <div className="kolch">

 <img className="photo" src={home} />
        <title ><h3>Porshe Cayenne 2023</h3></title>

          <Rating />
          <h6>10 reviews</h6>
          
       
        <p>this car is so cool</p>
          <h6>Mileage: 1444km</h6>
          <h6>Fuel Type : Diesel</h6>
       
          <h6>color : gray</h6>
          <h6>seats:5</h6>
       
          <img src={account} />
          <h4>Ahmed Hamidi</h4>
       
          <img src={shart} />
          <img src={comment} />
        

        <img src={like} />
     </div>
     
    
  );
}
export default Cardbig;