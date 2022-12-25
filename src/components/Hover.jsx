import React, { useState } from "react";
import { profile, shop , like } from "../assets/icons"


const ImageExample = () => {
  const [isHovered, setHover] = useState(false);

  return (
    <div
      className="imageContainer"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img className="img" src={profile}/>
      {isHovered && (
        <button
          size="sm"
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
          }}

          variant="primary"
        >
                  <img src={shop} alt="\"/>
                  <img src={like} alt="\"/>

        </button>
      )}
    </div>
  );
};

export default ImageExample;