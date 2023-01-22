import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
    </Routes>
  );
};

export default Routing;
