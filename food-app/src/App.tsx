import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
