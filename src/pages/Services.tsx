import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Video, Camera, Users, Mic, Sparkles, Scissors, CheckCircle2, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const handleSelectService = (index: number) => {
    setSelectedService(index);
    setActiveImageIndex(0);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedService !== null) {
      const images = services[selectedService].images;
      const nextIndex = (activeImageIndex + 1) % images.length;
      setActiveImageIndex(nextIndex);
      if (fullScreenImage) setFullScreenImage(images[nextIndex]);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedService !== null) {
      const images = services[selectedService].images;
      const nextIndex = (activeImageIndex - 1 + images.length) % images.length;
      setActiveImageIndex(nextIndex);
      if (fullScreenImage) setFullScreenImage(images[nextIndex]);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedService === null) return;
      
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        if (fullScreenImage) {
          setFullScreenImage(null);
        } else {
          setSelectedService(null);
        }
      }
    };

    if (selectedService !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedService, activeImageIndex, fullScreenImage]);

  const services = [
    {
      title: 'Film & TV Casting',
      description: 'A professional film and TV casting services, connecting talented actors with top productions, ensuring the perfect match for every role.',
      icon: <Video size={32} />,
      features: ['Lead Role Casting', 'Background Talent', 'Audition Management', 'Contract Negotiation'],
      images: [
        'https://picsum.photos/seed/film1/800/600',
        'https://picsum.photos/seed/film2/800/600'
      ],
      intro: 'Our casting directors have an eye for raw talent and the experience to find the perfect fit for any role, from indie films to major TV productions.'
    },
    {
      title: 'Commercial Shoots',
      description: 'We connect top talent for better commercial shoots, delivering the perfect fit for your brand through seamless, professional casting services.',
      icon: <Camera size={32} />,
      features: ['Brand Ambassadors', 'TV Commercials', 'Digital Ads', 'Print Campaigns'],
      images: [
        'https://picsum.photos/seed/comm1/800/600',
        'https://picsum.photos/seed/comm2/800/600'
      ],
      intro: 'We understand the fast-paced world of advertising and provide talent that not only looks the part but brings energy and professionalism to every set.'
    },
    {
      title: 'Talent Management',
      description: 'As we offers expert talent management, providing personalized support, career development, and strategic guidance to help you succeed.',
      icon: <Users size={32} />,
      features: ['Career Strategy', 'Portfolio Development', 'Brand Partnerships', 'Legal Support'],
      images: [
        'https://picsum.photos/seed/talent1/800/600',
        'https://picsum.photos/seed/talent2/800/600'
      ],
      intro: 'Our management team works closely with each artist to build a sustainable career, focusing on long-term goals and high-value opportunities.'
    },
    {
      title: 'Model Grooming',
      description: 'Comprehensive grooming and training programs for aspiring models. We focus on walking, posing, and industry etiquette.',
      icon: <Sparkles size={32} />,
      features: ['Ramp Walk Training', 'Posing Techniques', 'Personality Development', 'Industry Etiquette'],
      images: [
        'https://picsum.photos/seed/groom1/800/600',
        'https://picsum.photos/seed/groom2/800/600'
      ],
      intro: 'Our grooming sessions are designed to transform aspiring talent into professional models, giving them the confidence and skills needed to excel in the fashion industry.'
    },
    {
      title: 'Voice-Over Casting',
      description: 'Professional voice-over services providing talented voice artists for commercials, animations, documentaries, and more.',
      icon: <Mic size={32} />,
      features: ['Character Voices', 'Narration', 'Commercial VO', 'Multilingual Talent'],
      images: [
        'https://picsum.photos/seed/voice1/800/600',
        'https://picsum.photos/seed/voice2/800/600'
      ],
      intro: 'From deep, authoritative tones to quirky character voices, we have a diverse roster of voice artists ready to give your project its unique sound.'
    },
    {
      title: 'Fashion Shoots',
      description: 'End-to-end management for fashion editorials and runway shows. We provide the best models and coordinate with photographers.',
      icon: <Scissors size={32} />,
      features: ['Editorial Casting', 'Runway Models', 'Stylist Coordination', 'Location Scouting'],
      images: [
        'https://picsum.photos/seed/fashion1/800/600',
        'https://picsum.photos/seed/fashion2/800/600'
      ],
      intro: 'We bridge the gap between creative vision and execution, providing top-tier fashion talent and production support for high-end fashion projects.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black min-h-screen text-white"
    >
      {/* Header Section */}
      <div className="pt-32 pb-20 px-4 text-center">
        <motion.h4 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-orange-500 font-bold uppercase tracking-[0.3em] text-sm mb-4"
        >
          Our Services
        </motion.h4>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight"
        >
          We Have Something For You All
        </motion.h1>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleSelectService(index)}
              className="bg-zinc-900/50 p-10 rounded-lg border border-zinc-800 hover:border-orange-500/50 transition-all duration-500 group cursor-pointer flex flex-col h-full"
            >
              <div className="text-orange-500 mb-8 transform group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-6 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-10 flex-grow">
                {service.description}
              </p>
              <div className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-orange-500 transition-colors">
                Read More <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expansion Modal / Overlay */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 max-w-5xl w-full rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl"
            >
              <div 
                className="relative h-64 md:h-80 cursor-pointer group/bg"
                onDoubleClick={() => setFullScreenImage(services[selectedService].images[activeImageIndex])}
                title="Double click to expand"
              >
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src={services[selectedService].images[activeImageIndex]} 
                    alt={services[selectedService].title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                
                {/* Navigation Arrows */}
                {services[selectedService].images.length > 1 && (
                  <>
                    <button 
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-orange-500 transition-all z-20"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-orange-500 transition-all z-20"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Double click to expand label - Permanently visible */}
                <div className="absolute bottom-4 right-4 bg-orange-500/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg border border-white/20 z-10 pointer-events-none">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Double click to expand</span>
                </div>

                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-8 left-8 md:left-12">
                  <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white">
                    {services[selectedService].title}
                  </h2>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4">Introduction</h4>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {services[selectedService].intro}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4">Key Features</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {services[selectedService].features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center text-gray-400 text-sm">
                            <CheckCircle2 size={16} className="text-orange-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {services[selectedService].images.map((img, iIndex) => (
                      <div 
                        key={iIndex} 
                        className={`aspect-[4/3] rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer relative group/thumb ${
                          activeImageIndex === iIndex ? 'border-orange-500 scale-[0.98] shadow-[0_0_15px_rgba(249,115,22,0.3)]' : 'border-zinc-800 hover:border-zinc-600'
                        }`}
                        onClick={() => setActiveImageIndex(iIndex)}
                        onDoubleClick={() => setFullScreenImage(img)}
                        title="Double click to expand"
                      >
                        <img 
                          src={img} 
                          alt={`${services[selectedService].title} ${iIndex + 1}`} 
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="px-10 py-4 bg-orange-500 text-white font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors rounded-sm"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox for Full Screen Images (Double Click) */}
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setFullScreenImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[210]"
              onClick={() => setFullScreenImage(null)}
            >
              <X size={40} />
            </button>

            {selectedService !== null && services[selectedService].images.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[210] bg-white/5 p-2 rounded-full hover:bg-white/10"
                >
                  <ChevronLeft size={48} />
                </button>

                <button 
                  onClick={handleNext}
                  className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[210] bg-white/5 p-2 rounded-full hover:bg-white/10"
                >
                  <ChevronRight size={48} />
                </button>
              </>
            )}

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={fullScreenImage}
              alt="Full Screen"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="bg-zinc-900/30 py-24 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            Whether you're a brand looking for the perfect face or an artist ready to shine, we're here to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="/contact" 
              className="px-10 py-4 bg-orange-500 text-white font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors rounded-sm"
            >
              Contact Us
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdyR3TF-Iqpgqs0C5nLN3ftLrikl9HnsjU7L17nlhAUqX4iHg/viewform?usp=header" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
