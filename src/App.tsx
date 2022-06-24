import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import LandingPage from "./pages/HomePage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Reports from "./pages/Reports/Reports";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import NewsLetter from "./pages/HomePage/NewsLetter";
import Footer from "./pages/HomePage/Footer";
import ReportDetails from "./pages/Reports/ReportDetails";

const getMode = (mode: string) => {
  return mode == "false" ? false : true;
};

const getIsDark = (mode: boolean) => {
  return !mode;
};

function App() {
  const [isDark, setIsDark] = useState(
    getMode(localStorage.getItem("isDark") || "") || false
  );
  const darkModeToggle = () => {
    const currentMode = localStorage.getItem("isDark");
    localStorage.setItem("isDark", `${!getMode(currentMode || "")}`);
    setIsDark(!getMode(currentMode || ""));
  };
  console.log(
    "qqqq current local:",
    localStorage.getItem("isDark"),
    "curr isDark:",
    isDark
  );

  return (
    <Router>
      <div className={`App ${isDark ? "dark" : ""}`}>
        <Navbar darkModeToggle={darkModeToggle} />
        <div className="min-h-[52vh]">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/reports/:id" element={<ReportDetails />} />
          </Routes>
          {/* start Newsletter section */}
        </div>
        <NewsLetter />
        {/* end Newsletter section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
