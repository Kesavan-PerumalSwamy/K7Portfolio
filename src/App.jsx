import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Preloader from "./components/Preloader";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Ball from "./components/Ball";
import MouseTrail from "./components/MouseTrail";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  return (
    <>
      <MouseTrail />
      <Ball />
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add other routes as needed */}
        </Routes>
      )}
    </>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
