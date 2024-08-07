import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import About from "./About";
import './App.css';

function App() {
  return (
    <Router>
    <nav className="navbar">
        <div className="navbar-links">
        <Link to="/website" className="nav-button">Home</Link>
        <Link to="/about" className="nav-button">About</Link>
        <Link to="/projects" className="nav-button">Projects</Link>
        <Link to="/contact" className="nav-button">Contact</Link>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/website" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
