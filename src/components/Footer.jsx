import { Coffee, Phone, Mail, MapPin } from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Footer({ setCurrentPage }) {
  return (
    <footer className="bg-black-warm text-white-cream border-t border-primary-1/20 font-body">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-12 lg:gap-8">
          
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="p-2 bg-primary-1 rounded-full text-white-cream">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-heading text-xl font-bold tracking-widest text-secondary-1 uppercase">
                Bristo
              </span>
            </div>
            <p className="text-white-cream/70 text-sm leading-relaxed max-w-sm">
              Crafting premium coffee experiences and artisanal bites in a cozy atmosphere. Your home away from home since 2018.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2.5 bg-white-cream/5 hover:bg-primary-1 rounded-full text-secondary-1 hover:text-white-cream transition-all duration-300">
                <InstagramIcon />
              </a>
              <a href="#" className="p-2.5 bg-white-cream/5 hover:bg-primary-1 rounded-full text-secondary-1 hover:text-white-cream transition-all duration-300">
                <FacebookIcon />
              </a>
              <a href="#" className="p-2.5 bg-white-cream/5 hover:bg-primary-1 rounded-full text-secondary-1 hover:text-white-cream transition-all duration-300">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg font-medium text-secondary-1 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              <li>
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="text-white-cream/70 hover:text-secondary-1 transition-colors text-sm uppercase tracking-wider text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('menu')}
                  className="text-white-cream/70 hover:text-secondary-1 transition-colors text-sm uppercase tracking-wider text-left cursor-pointer"
                >
                  Our Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="text-white-cream/70 hover:text-secondary-1 transition-colors text-sm uppercase tracking-wider text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg font-medium text-secondary-1 tracking-wider uppercase">
              Hours
            </h4>
            <div className="space-y-3.5 text-sm text-white-cream/70">
              <div className="flex justify-between border-b border-white-cream/5 pb-2">
                <span>Monday - Friday</span>
                <span className="font-semibold text-secondary-1">08:00 AM - 08:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white-cream/5 pb-2">
                <span>Saturday</span>
                <span className="font-semibold text-secondary-1">09:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="font-semibold text-secondary-1">09:00 AM - 08:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg font-medium text-secondary-1 tracking-wider uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-sm text-white-cream/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary-1 shrink-0 mt-0.5" />
                <span>123 Espresso Lane, Coffee County, CC 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary-1 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary-1 shrink-0" />
                <span>hello@bristocafe.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white-cream/5 text-center text-xs text-white-cream/40 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Bristo Cafe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
