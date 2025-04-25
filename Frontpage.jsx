//import React from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const FrontPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">MyMail</h1>
          <nav>
            <ul className="flex space-x-6 text-gray-700 font-medium">
              <li><a href="#features" className="hover:text-blue-600">Features</a></li>
              <li><a href="#about" className="hover:text-blue-600">About</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
              <li><a href="/login.html" className="text-blue-600 hover:underline">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>
      

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Welcome to MyMail</h2>
        <p className="text-lg mb-6">Simple. Fast. Secure. Your all-in-one email experience.</p>
        <a href="/login.html" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Get Started</a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-800">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-600">
            <div>
              <h4 className="font-semibold text-lg mb-2">Easy Interface</h4>
              <p>Clean and user-friendly design for seamless usage.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Fast Delivery</h4>
              <p>Instant message sending and receiving without delays.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Safe & Secure</h4>
              <p>Top-notch security to keep your emails private.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">About Us</h3>
          <p className="text-gray-600">
            MyMail is a modern email platform built for simplicity, speed, and privacy.
            Whether you're sending business emails or personal messages, we’ve got your back.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h3>
          <p className="text-gray-600 mb-4">Have questions? Reach out at <a href="mailto:support@mymail.com" className="text-blue-600">support@mymail.com</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} MyMail. All rights reserved.
      </footer>
    </div>
  );
};

export default FrontPage;
