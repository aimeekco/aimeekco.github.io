import React from "react";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects"; 
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutSite from "./components/AboutSite";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/aboutsite" element={<AboutSite />} />
    </Routes>
  );
}

export default AppRoutes;