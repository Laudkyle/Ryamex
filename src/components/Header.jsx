import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-md shadow-md py-2 w-[90vw] mx-auto rounded-2xl mt-2'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="w-48 h-14 flex items-center">
            <img
              src="/logo.png"
              alt="Ryamex logo"
              className="w-full h-full object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10">
            {['about', 'services', 'contact'].map((item) => (
              <Link
                key={item}
                to={item}
                className={`capitalize text-base lg:text-lg font-semibold tracking-wide transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-800 hover:text-primary'
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className={`w-7 h-7 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 shadow-lg rounded-b-2xl">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-6">
            {['about', 'services', 'contact'].map((item) => (
              <Link
                key={item}
                to={item}
                className="capitalize text-lg font-semibold text-gray-800 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
