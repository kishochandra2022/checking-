
import React, { useState } from 'react';
import { GitBranchIcon } from './icons/GitBranchIcon';
import { ReactIcon } from './icons/ReactIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#testimonials', label: 'Testimonials' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <GitBranchIcon className="w-8 h-8 text-accent" />
          <ReactIcon className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-secondary dark:text-light">GitReact</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">Log In</a>
          <a href="#" className="bg-primary hover:bg-opacity-90 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            Sign Up
          </a>
        </div>
        
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6 text-secondary dark:text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">Log In</a>
            <a href="#" className="bg-primary hover:bg-opacity-90 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Sign Up
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
