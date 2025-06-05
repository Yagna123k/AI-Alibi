import React, { useState, useEffect } from 'react';
import { AlignJustify, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold">
          <Sparkles className="text-primary-600 h-6 w-6" />
          <span className={`transition-colors duration-300 ${isScrolled ? 'text-primary-700' : 'text-primary-600'}`}>
            AI Alibi
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <a href="#features" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">Features</a>
            <a href="#how-it-works" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">How It Works</a>
            <a href="#examples" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">Examples</a>
            <a href="#faq" className="font-medium text-gray-700 hover:text-primary-600 transition-colors">FAQ</a>
          </div>
          <div className="flex gap-3">
            <a href="#" className="btn btn-secondary py-2">Log in</a>
            <a href="#" className="btn btn-primary py-2">Get Started</a>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <AlignJustify size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col gap-4 transition-all duration-300">
          <a 
            href="#features" 
            className="font-medium text-gray-700 hover:text-primary-600 transition-colors py-2 px-4"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="font-medium text-gray-700 hover:text-primary-600 transition-colors py-2 px-4"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#examples" 
            className="font-medium text-gray-700 hover:text-primary-600 transition-colors py-2 px-4"
            onClick={() => setIsOpen(false)}
          >
            Examples
          </a>
          <a 
            href="#faq" 
            className="font-medium text-gray-700 hover:text-primary-600 transition-colors py-2 px-4"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </a>
          <hr className="my-2" />
          <div className="flex flex-col gap-3">
            <a href="#" className="btn btn-secondary">Log in</a>
            <a href="#" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;