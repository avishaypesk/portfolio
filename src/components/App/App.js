import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import ProjectPage from '../ProjectPage/ProjectPage';
import './App.css'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className='md:h-screen'>
        <Header />
        <div className='px-8 pt-[104px] w-auto md:pt-[144px] md:mx-10 xl:mx-[125px] bg-white'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;