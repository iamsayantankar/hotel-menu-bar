import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="bg-[#2A2522] py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Logo and Corner Text */}
        <div className="flex justify-center items-center gap-2 mb-8">
            <img
              src="/media/logo-light.png"
              alt="Caffeine Corner Logo"
            />
        </div>

        {/* Main Heading */}
        <h2 className="sm:text-5xl text-3xl font-bold text-[#C29D59] mb-4">
          STAY CAFFEINATED
        </h2>
        <p className="text-white text-lg mb-8">
          with Exclusive Offers and Updates!
        </p>

        {/* Email Subscription Form */}
        <form onSubmit={handleSubmit} className="mx-auto mb-12">
          <div className="flex flex-col justify-center sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="sm:px-6 px-2  py-3 bg-white border-0 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="sm:px-6 px-2 sm:my-0 my-3 py-3 bg-[#C29D59] text-white font-semibold hover:bg-[#A07B37] transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>

        {/* Social Media Links */}
        <div className="mb-8">
          <p className="text-white mb-4">Follow Us On:</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-[#C29D59] hover:text-[#A07B37] transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-[#C29D59] hover:text-[#A07B37] transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-[#C29D59] hover:text-[#A07B37] transition-colors">
              <Youtube size={24} />
            </a>
            <a href="#" className="text-[#C29D59] hover:text-[#A07B37] transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-400 text-sm">
          ©2024 All rights are reserved by Caffeine Corner
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;