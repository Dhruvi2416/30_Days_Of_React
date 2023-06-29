import React from "react";
import ChooseOptions from "./ChooseOptions";
import { Route, Routes } from "react-router-dom";
import HexToRGB from "./HexToRGB";
import RGBToHex from "./RGBToHex";
import NotFound from "./NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChooseOptions />} />
        <Route path="/hexToRGB" element={<HexToRGB />} />
        <Route path="/RGBToHex" element={<RGBToHex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
