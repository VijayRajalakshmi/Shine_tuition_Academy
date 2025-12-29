import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Tutors from './components/Tutors';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Hero from './components/Hero';


import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Topbar />
      <Header />
      <Routes>
        {/* Home Page - show all sections */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Hero />
              <About />
              <Courses />
              <Testimonials />
              <Tutors />
              <Contact />
              <FAQ />
            </>
          }
        />

        {/* Individual Routes (optional - if you want to show them separately) */}
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>      
      <Footer />
    </Router>
  );
}

export default App;
