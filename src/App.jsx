import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import Reviews from '../pages/Reviews';
import Contact from '../pages/Contact';
import Navbar from './components/Navbar';
import TQ from '../pages/TQ';
import { Route , Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />

        <main className="pt-16 lg:pt-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<TQ />} />
          </Routes>
        </main>


    </>
  )
}

export default App
