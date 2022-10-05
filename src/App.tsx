import React from 'react';
import Button from 'components/Button';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/home/Home';
import AboutUs from 'pages/about-us/AboutUs';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} /> 
      </Routes>
    </div>
  );
}

export default App;
