import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import Reviews from '../pages/Reviews';
import Contact from '../pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThankYou from '../pages/TQ'; // Changed TQ to ThankYou to match route usage
import { Route, Routes } from 'react-router-dom';


import { CartProvider } from './context/CartContext';
import FloatingCartBtn from './components/FloatingCartBtn';
import CartSidebar from './components/CartSidebar';

function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Navbar />
        <main className="flex-grow pt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCartBtn />
        <CartSidebar />
      </div>
    </CartProvider>
  );
}

export default App
