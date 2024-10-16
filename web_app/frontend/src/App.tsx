import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import './App.css'
import Home from './pages/Home.tsx'
import MBTItest from './pages/MBTItest.tsx'
import MBTItypes from './pages/MBTItypes.tsx'
import Theorem from './pages/Theorem.tsx';
import AboutUs from './pages/AboutUs.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route 
          path="/" 
          element={<Home/>} 
        />
        <Route 
          path="/mbti-test" 
          element={<MBTItest/>} 
        />
        <Route 
          path="/mbti-types" 
          element={<MBTItypes/>} 
        />
        <Route 
          path="/theorem" 
          element={<Theorem/>} 
        />
        <Route 
          path="/about-us" 
          element={<AboutUs/>} 
        />
      </Routes>
    </Router>
  )
}

export default App
