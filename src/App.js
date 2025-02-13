import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PageFor from './pages/For';
import PageWhile from './pages/While';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/For" element={<PageFor />} />  
        <Route path="/While" element={<PageWhile />} /> 
      </Routes>
    </Router>
  );
}

export default App;
