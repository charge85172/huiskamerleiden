import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Goals from './components/Goals';
import ThirdPlace from './components/ThirdPlace';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>
      
      <Navbar />
      <Hero />
      <About />
      <Goals />
      <ThirdPlace />
      <Info />
      <Footer />
    </>
  );
}

export default App;
