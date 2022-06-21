import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import LandingPage from "./pages/HomePage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Reports from "./pages/Reports/Reports";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
// import { Route, Router } from "react-router-dom";
// import { Switch } from "@headlessui/react";

type TParams = { id: string };

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <div className="content"> */}
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/reports' element={<Reports/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        {/* </div> */}
      </div>
    </Router>
  );
}

export default App;
