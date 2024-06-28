import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from "./components/Home";
// import UserAuth from "./components/UserAuth";
// import HospitalAuth from "./components/HospitalAuth";
import Navbar from "./components/Navbar";
// import HospitalProfile from "./components/HospitalProfile";
// import HospitalProfileEdit from "./components/HospitalProfileEdit";
// import HospitalDashboard from "./components/HospitalDashboard";

// import { Context } from "./Store";
// import Dashboard from "./components/Landing";
import ViewMap from "./components/ViewMap";

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/map" element={<ViewMap />} />
      </Routes>
    </Router>
  );
}

export default App;
