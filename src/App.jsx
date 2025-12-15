import Nav from "./components/layout/Nav";
import HomePage from "./pages/HomePage";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import React, { Suspense, lazy } from "react";
const About = lazy(() => import("./pages/About"));
const Menu = lazy(() => import("./pages/Menu"));
const Contact = lazy(() => import("./pages/Contact"));
const Booking = lazy(() => import("./pages/Booking"));


const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute(
      "dir",
      i18n.language === "ar" ? "rtl" : "ltr"
    );
  }, [i18n.language]);
  return (
    <Router>
      <Nav />
      <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
