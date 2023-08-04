import React from "react";
import TextFile from "./TextFile";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar heading={"Text Analyzer"} />
      <TextFile title = {"Enter text to anlyze below"} />
    </div>
  );
};

export default App;
