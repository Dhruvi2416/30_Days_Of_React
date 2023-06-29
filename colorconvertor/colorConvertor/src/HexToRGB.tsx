import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const HexToRGB = () => {
  const navigate = useNavigate();
  const [hex, setHex] = useState("#000000");
  const [answer, setAnswer] = useState("");
  function convertHexaToRgb(hexString: string) {
    hexString = hexString.toUpperCase();
    let validString = "0123456789ABCDEF";
    if (hexString[0] == "#" && hexString.length == 7) {
      hexString = hexString.slice(1, 7);
    }
    if (hexString.length == 6) {
      let startString = "rgb(";
      let endString = ")";

      let totalString = "";
      let r1 = validString.indexOf(hexString.slice(0, 1));
      let r2 = validString.indexOf(hexString.slice(1, 2));
      let r = r1 * 16 + r2;

      let g1 = validString.indexOf(hexString.slice(2, 3));
      let g2 = validString.indexOf(hexString.slice(3, 4));
      let g = g1 * 16 + g2;

      let b1 = validString.indexOf(hexString.slice(4, 5));
      let b2 = validString.indexOf(hexString.slice(5, 6));
      let b = b1 * 16 + b2;

      startString += r + "," + g + "," + b;
      totalString += startString + endString;
      setAnswer(totalString);
    } else {
      alert(
        "Enter valid hex Color- A valid hex must have only 6 digit letters"
      );
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl m-2 text-white">Hex to RGB value</h1>
      <input
        className="p-2 m-6 rounded-lg border-2 hover:border-black"
        placeholder="Enter Hex Value here"
        onChange={(e) => {
          setHex(
            e.target.value.includes("#") ? e.target.value : "#" + e.target.value
          );
          setAnswer("");
        }}
      />

      <button
        className="bg-red-600 p-2 m-12 rounded-lg text-white font-semibold"
        onClick={() => convertHexaToRgb(hex)}
      >
        Get rgb value
      </button>

      {answer && (
        <>
          <div className="font-semibold">{answer}</div>
          <div
            className="border-2 w-56 border-black m-4 flex justify-center items-center  p-4"
            style={{ backgroundColor: hex }}
          ></div>
        </>
      )}
      <button className="m-4" onClick={() => navigate("/")}>
        Back!
      </button>
    </div>
  );
};

export default HexToRGB;
