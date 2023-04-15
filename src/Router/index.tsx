import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { ContactMe } from "../pages/Contact_Me";
import { MyServices } from "../pages/My_Services";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/services" element={<MyServices />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </>
  );
}
