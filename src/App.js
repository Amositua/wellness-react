// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Container from './components/container/container';
// import ScanSkin from './components/scan-skin';
// import Contact from './components/Contact';
import Navbar from './components/Navbar/navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
        <Navbar />
        </Container>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/scan-skin" element={<ScanSkin />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
