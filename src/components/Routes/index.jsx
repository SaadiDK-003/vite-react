import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../About";
import Home from "../Home";
import Layout from "../Layout";

const CustomRoutes = () => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
};

export default CustomRoutes;
