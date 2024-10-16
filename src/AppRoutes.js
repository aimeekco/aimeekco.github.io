import React from "react";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects"; 
import Home from "./components/Home";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
}

export default AppRoutes;