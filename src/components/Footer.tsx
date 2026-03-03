import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-6 text-orange-500">mk Casting</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Where Talent Meets Opportunity Worldwide!!! Your Gateway to the Entertainment Industry!!! We connect talented individuals with top opportunities across the entertainment industry, including films, commercials, and digital media.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg">
                <XIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Our Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors text-sm uppercase tracking-wider">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors text-sm uppercase tracking-wider">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-orange-500 transition-colors text-sm uppercase tracking-wider">Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-orange-500 transition-colors text-sm uppercase tracking-wider">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors text-sm uppercase tracking-wider">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">GK-2 M-Block Market, New Delhi</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-orange-500 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">011-42665114 / +91-88264-17897</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-orange-500 mr-3 flex-shrink-0" size={18} />
                <a href="mailto:reelscast341@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  reelscast341@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} mk Casting. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
