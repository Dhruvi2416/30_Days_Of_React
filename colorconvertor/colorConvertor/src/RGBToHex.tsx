import React, { useState } from "react";
import ChooseOptions from "./ChooseOptions";
import { useNavigate } from "react-router-dom";
const RGBToHex = () => {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  function convertRgbToHexa(
    r: number | string,
    g: number | string,
    b: number | string
  ) {
    let hashString = "#";
    if (r < 0 || r > 255) {
      r = 0;
    }
    if (g < 0 || g > 255) {
      g = 0;
    }
    if (b < 0 || b > 255) {
      b = 0;
    }
    let validString = "0123456789ABCDEF";
    let r1 = Math.floor(Number(r) / 16);
    let r2 = Number(r) % 16;
    r = validString.charAt(r1) + validString.charAt(r2);

    let g1 = Math.floor(Number(g) / 16);
    let g2 = Number(g) % 16;
    g = validString.charAt(g1) + validString.charAt(g2);

    let b1 = Math.floor(Number(b) / 16);
    let b2 = Number(b) % 16;
    b = validString.charAt(b1) + validString.charAt(b2);
    hashString += r + g + b;
    setAnswer(hashString);
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
    <h1 className="text-3xl m-2 text-white">RGB to Hex value</h1>
     <div>
      <input className="p-2 m-6 rounded-lg border-2 hover:border-black" 
        placeholder="Red"
        onChange={(e) => {setRed(parseInt(e.target.value));setAnswer("")}}
      />
      <input className="p-2 m-6 rounded-lg border-2 hover:border-black"
        placeholder="Green"
        onChange={(e) => {setGreen(parseInt(e.target.value));setAnswer("")}}
      />
      <input className="p-2 m-6 rounded-lg border-2 hover:border-black"
        placeholder="Blue"
        onChange={(e) => {setBlue(parseInt(e.target.value));setAnswer("")}}
      />
      </div>
      <button className="bg-red-600 p-2 m-12 rounded-lg text-white font-semibold" onClick={() => convertRgbToHexa(red, green, blue)}>
        Get rgb value
      </button>
      {answer &&<><div className="font-semibold">{answer}</div>
     <div className="border-2 w-56 border-black m-4 flex justify-center items-center  p-4" style={{ backgroundColor: `rgb(${red},${green},${blue})` }}></div></>}
   <button className="m-4" onClick={()=>navigate("/")}>Back!</button>
    </div>
  );
};

export default RGBToHex;
