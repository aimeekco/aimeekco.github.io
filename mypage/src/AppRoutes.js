import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Projects"; 
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import AboutPage from "./components/AboutPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/aboutpage" element={<AboutPage />} />
    </Routes>
  );
}

export default AppRoutes;