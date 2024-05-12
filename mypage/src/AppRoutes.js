import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing"; 

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default AppRoutes;