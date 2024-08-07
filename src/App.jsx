import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MetaverseServices from "./components/MetaverseServices";
import MetaversePoints from "./components/MetaversePoint";
import Footer from "./components/Footer";
import Land from "./components/Land";
import CookiePolicy from "./components/CoockiePolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Land />
              <MetaverseServices />
              <MetaversePoints />
            </>
          }
        />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
