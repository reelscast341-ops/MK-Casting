import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <div className="bg-black text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">About Us</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-4">About mk Casting</h4>
            <h2 className="text-4xl font-bold uppercase tracking-tight mb-6">Your Gateway to the Entertainment Industry!!!</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                mk Casting is a talent management and film casting agency. It is the realm for actors, models and artists to explore their talent professionally. We serve our wide range of networks where we manage cast & talent for films, TVCs, web shows, mini series, fashion shoots, etc.
              </p>
              <p>
                Our mission is to bridge the gap between exceptional talent and outstanding opportunities. We believe in nurturing raw potential and guiding our artists through every step of their career journey.
              </p>
              <p>
                With years of experience in the industry, our team of dedicated professionals works tirelessly to ensure that our clients receive the best possible representation and that production houses find the perfect fit for their projects.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://picsum.photos/seed/about1/400/500" 
              alt="About 1" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://picsum.photos/seed/about2/400/500?blur=2" 
              alt="About 2" 
              className="w-full h-full object-cover rounded-lg shadow-lg mt-8"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
