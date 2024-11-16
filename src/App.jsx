import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import './App.css';

const App = () => {
  const scrollRef = useRef(null);

  return (
    <main className="scroll-container" ref={scrollRef}>
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
};

export default App;
