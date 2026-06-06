import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo-1.png';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Menu', value: 'menu' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white-cream/95 backdrop-blur-md border-b border-black-5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo Section */}
          <div 
            onClick={() => setCurrentPage('home')}
            className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <img 
              src={logoImg} 
              alt="Bristo Cafe Logo" 
              className="h-16 w-auto" 
            />
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentPage(item.value)}
                className={`font-heading text-lg tracking-wide transition-all duration-300 relative py-2 cursor-pointer ${
                  currentPage === item.value
                    ? 'text-primary-1 font-bold'
                    : 'text-black-warm font-normal hover:text-primary-1'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Visit us today Button (Desktop) */}
          <div className="hidden md:block">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="cursor-pointer bg-gradient-to-r from-primary-2 to-secondary-1 hover:from-primary-1 hover:to-primary-2 text-white-cream px-8 py-3 rounded-full text-base font-heading font-medium tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Visit us today
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black-75 hover:text-primary-1 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden absolute top-24 left-0 w-full bg-white-cream border-b border-black-10 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 space-y-6 flex flex-col items-center">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                setCurrentPage(item.value);
                setIsOpen(false);
              }}
              className={`font-heading text-xl tracking-wide transition-colors py-2 ${
                currentPage === item.value
                  ? 'text-primary-1 font-bold'
                  : 'text-black-warm hover:text-primary-1'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => {
              setCurrentPage('contact');
              setIsOpen(false);
            }}
            className="w-full max-w-xs bg-gradient-to-r from-primary-2 to-secondary-1 text-white-cream py-3 rounded-full text-base font-heading font-medium tracking-wide text-center transition-all duration-300 shadow-md"
          >
            Visit us today
          </button>
        </div>
      </div>
    </nav>
  );
}
