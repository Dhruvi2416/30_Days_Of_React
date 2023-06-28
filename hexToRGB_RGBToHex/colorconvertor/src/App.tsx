import React, { useState } from "react";

const App = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const[hex,setHex]=useState("#FFFFFF")
  const[answer,setAnswer]= useState("")
  function convertHexaToRgb(hexString) {
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
      setAnswer(totalString)
    } else {
      alert("Enter valid hex Color- A valid hex must have only 6 digit letters");
    }
  }

  function convertRgbToHexa(r, g, b) {
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
    let r1 = Math.floor(r / 16);
    let r2 = r % 16;
    r = validString.charAt(r1) + validString.charAt(r2);

    let g1 = Math.floor(g / 16);
    let g2 = g % 16;
    g = validString.charAt(g1) + validString.charAt(g2);

    let b1 = Math.floor(b / 16);
    let b2 = b % 16;
    b = validString.charAt(b1) + validString.charAt(b2);
    hashString += r + g + b;
    setAnswer(hashString)
  }
  return (
    <div>
      <input placeholder="Enter Hex Value here" onChange={(e) => setHex((e.target.value))} />

      <input
        placeholder="Red"
        onChange={(e) => setRed(parseInt(e.target.value))}
      />
      <input
        placeholder="Green"
        onChange={(e) => setGreen(parseInt(e.target.value))}
      />
      <input
        placeholder="Blue"
        onChange={(e) => setBlue(parseInt(e.target.value))}
      />
      <button onClick={() => convertRgbToHexa(red, green, blue)}>
        Get # Value
      </button>
      <button onClick={()=>convertHexaToRgb(hex)}>Get rgb value</button>
      {answer}
    </div>
  );
};

export default App;
