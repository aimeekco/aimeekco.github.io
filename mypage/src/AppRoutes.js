import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing"; 
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import AboutPage from "./components/AboutPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/aboutpage" element={<AboutPage />} />
    </Routes>
  );
}

export default AppRoutes;