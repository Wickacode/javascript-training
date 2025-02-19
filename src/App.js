import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PageFor from './pages/For';
import PageWhile from './pages/While';
import PageDoWhile from './pages/Do-while';
import PageForIn from './pages/For-in';
import PageForOf from './pages/For-of';
import PageForEach from './pages/Foreach';
import PageBreakContinue from './pages/Break-continue';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/For" element={<PageFor />} />  
        <Route path="/While" element={<PageWhile />} /> 
        <Route path="/Do-While" element={<PageDoWhile />} /> 
        <Route path="/For-In" element={<PageForIn/>} /> 
        <Route path="/For-Of" element={<PageForOf/>} /> 
        <Route path="/ForEach" element={<PageForEach/>} /> 
        <Route path="/Break-Continue" element={<PageBreakContinue/>} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
