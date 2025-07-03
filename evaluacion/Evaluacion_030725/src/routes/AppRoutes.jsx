import React from "react";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import Historias from "../pages/Historias";
import Objetos from "../pages/Objetos";

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/historias' element={<Historias />} />
      <Route path='/objetosmagicos' element={<Objetos />} />
    </Routes>
  )
}

export default AppRoutes
