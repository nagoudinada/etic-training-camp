import { useState } from "react";
// import SideFilterStyle from '../style/SideFilterStyle'
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import SideFilterStyle from "../style/SideFilterStyle.css";

function valuetext(value) {
  return `${value}°C`;
}
function SideFilter() {
  const colors = [
    "#006CFF",
    "#FC3E39",
    "#171717",
    "#FFF600",
    "#FF00B4",
    "#EFDFDF",
  ];
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <div className="SideFilter" style={{"padding": "0 3rem"}}>
      <div className="singleFilter">
        <div className="Title">Prices</div>
        <div className="rangeNum">
          <div>Ranger:</div>
          <div>
            {value[0]} - {value[1]}
          </div>
        </div>
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
      </div>

      <div className="singleFilter">
        <div className="Title">Colors</div>
        <div className="ColorMap">
          {colors.map((color) => (
            <div
              className="colorsChoice"
              style={{
                background: `${color}`,
                width: "20px",
                height: "20px",
                borderRadius: "100%",
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="singleFilter">
        <div className="Title">Brand</div>
        <div className="brandsNames">
          <button className="brandsClick" href="/">
            Porsche
          </button>
          <button className="brandsClick" href="/">
            Audi
          </button>
          <button className="brandsClick" href="/">
            Suzuki
          </button>
          <button className="brandsClick" href="/">
            Sentafi
          </button>
        </div>
      </div>

      <div className="singleFilter">
        <div className="Title">N° of Seats</div>
        <input type="text" placeholder="00" />
      </div>

      <div className="singleFilter">
      <div className="Title">Type of Fuel</div>
        <div className="gridButton">
          <button className="fuelClick" >Diesel</button>
          <button className="fuelClick" >Diesel</button>
          <button className="fuelClick" >Diesel</button>
          <button className="fuelClick" >Diesel</button>
        </div>
      </div>
    </div>
  );
}

export default SideFilter;
