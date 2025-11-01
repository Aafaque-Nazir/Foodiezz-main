// ThankYou.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-4 text-center">
      <h1 className="text-5xl font-bold text-yellow-400 mb-4">Thank You!</h1>
      <p className="text-lg mb-6 max-w-md">
        We’ve received your message and will get back to you shortly. We appreciate your interest in Bread & Bite!
      </p>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
        <a
          href="https://wa.me/919325629256"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-400 transition font-semibold"
        >
          <FaWhatsapp size={20} /> Chat on WhatsApp
        </a>
        <a
          href="https://zomato.onelink.me/xqzv/621n3m95"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-400 transition font-semibold"
        >
          View on Zomato
        </a>
        <a
          href="https://www.instagram.com/bread_and_bite/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-400 transition font-semibold"
        >
          <FaInstagram size={20} /> Follow on Instagram
        </a>
      </div>

      <Link
        to="/"
        className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-300 transition font-semibold"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ThankYou;
