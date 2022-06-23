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
// import { Route, Router } from "react-router-dom";
// import { Switch } from "@headlessui/react";

type TParams = { id: string };

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
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
