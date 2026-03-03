import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Camera, Video, Mic, Users, Sparkles } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: 'Film & TV Casting',
      description: 'A professional film and TV casting services, connecting talented actors with top productions, ensuring the perfect match for every role.',
      icon: <Video size={32} className="text-orange-500 mb-4" />,
      link: '/services'
    },
    {
      title: 'Commercial Shoots',
      description: 'We connect top talent for better commercial shoots, delivering the perfect fit for your brand through seamless, professional casting services.',
      icon: <Camera size={32} className="text-orange-500 mb-4" />,
      link: '/services'
    },
    {
      title: 'Talent Management',
      description: 'As we offers expert talent management, providing personalized support, career development, and strategic guidance to help you succeed.',
      icon: <Users size={32} className="text-orange-500 mb-4" />,
      link: '/services'
    },
    {
      title: 'Model Grooming',
      description: 'Comprehensive grooming and training programs for aspiring models. We focus on walking, posing, and industry etiquette.',
      icon: <Sparkles size={32} className="text-orange-500 mb-4" />,
      link: '/services'
    }
  ];

  const testimonials = [
    {
      name: 'Vishal Deep',
      text: 'My name is Vishal Deep. I am 18 years old. I auditioned in a casting booth which was for both modeling and acting. I liked it here and I and other people also liked it that this place is good.',
      role: 'Actor / Model'
    },
    {
      name: 'Srishti Gautam',
      text: 'Everyone was so sweet and hospitable there...it was a really nice experience to have a visit there and I must tell everyone out there reading this that plz just give it a shot to your dreams',
      role: 'Model'
    },
    {
      name: 'Jashan Dhawan',
      text: 'New Very humble and kind staff and they are professional in their work, and were very cooperative at the time of audition.',
      role: 'Actor'
    }
  ];

  const brands = [
    { name: 'Nike', logo: 'NIKE' },
    { name: 'Adidas', logo: 'ADIDAS' },
    { name: 'Gucci', logo: 'GUCCI' },
    { name: 'Louis Vuitton', logo: 'LOUIS VUITTON' },
    { name: 'Zara', logo: 'ZARA' },
    { name: 'H&M', logo: 'H&M' },
    { name: 'Prada', logo: 'PRADA' },
    { name: 'Versace', logo: 'VERSACE' },
    { name: 'Chanel', logo: 'CHANEL' },
    { name: 'Burberry', logo: 'BURBERRY' },
    { name: 'Armani', logo: 'ARMANI' },
    { name: 'Dolce & Gabbana', logo: 'D&G' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-zinc-50"
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <iframe
            src="https://www.youtube.com/embed/YSE6dCdE8OQ?autoplay=1&mute=1&controls=0&loop=1&playlist=YSE6dCdE8OQ&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&enablejsapi=1"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-50"
            allow="autoplay; encrypted-media"
            title="Background Video"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70" />
          <div className="absolute inset-0 bg-orange-500/5 mix-blend-overlay" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tighter mb-6"
          >
            Where Talent Meets <span className="text-orange-500">Opportunity</span> Worldwide!!!
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 font-light mb-10"
          >
            Your Gateway to the Entertainment Industry!!!
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdyR3TF-Iqpgqs0C5nLN3ftLrikl9HnsjU7L17nlhAUqX4iHg/viewform?usp=header" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors rounded-sm"
            >
              Register Now <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-4">About Us</h4>
            <h2 className="text-4xl font-bold uppercase tracking-tight mb-6">Your Gateway to the Entertainment Industry!!!</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                mk Casting is a talent management and film casting agency. It is the realm for actors, models and artists to explore their talent professionally. We serve our wide range of networks where we manage cast & talent for films, TVCs, web shows, mini series, fashion shoots, etc.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Star className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>mk Casting connects talented individuals with top opportunities across the entertainment industry, including films, commercials, and digital media.</span>
                </li>
                <li className="flex items-start">
                  <Star className="text-orange-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>We offer professional casting services for actors, models, and artists, helping them build successful careers in entertainment.</span>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <Link to="/about" className="inline-flex items-center text-black font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">
                Learn More <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/model1/800/1000" 
                alt="Model" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-xl rounded-lg hidden md:block">
              <div className="text-5xl font-bold text-orange-500 mb-2">10+</div>
              <div className="text-sm font-bold uppercase tracking-widest text-gray-500">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-4">Our Services</h4>
            <h2 className="text-4xl font-bold uppercase tracking-tight">We Have Something For You All</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-lg hover:bg-zinc-800 transition-colors border border-zinc-800 hover:border-orange-500/50 group">
                {service.icon}
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to={service.link} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white group-hover:text-orange-500 transition-colors">
                  Read More <ArrowRight className="ml-2" size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center px-8 py-4 border border-orange-500 text-orange-500 font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all rounded-sm">
              View All Services <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Brands / Collaborations */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-4">Our Network</h4>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-gray-900">Exclusive Collaborations</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {brands.map((brand, index) => (
              <div key={index} className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-gray-800 text-center hover:text-orange-500 transition-colors cursor-default">
                {brand.logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-4">Testimonials</h4>
            <h2 className="text-4xl font-bold uppercase tracking-tight">Some Users Feedback</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative">
                <div className="text-orange-500 opacity-20 absolute top-6 right-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.41 14.596C16.666 13.904 16.8 13.173 16.8 12.43V3H24V12.43C24 15.6 22.84 18.52 20.76 21H14.017ZM0 21L2.393 14.596C2.649 13.904 2.783 13.173 2.783 12.43V3H9.983V12.43C9.983 15.6 8.823 18.52 6.743 21H0Z" />
                  </svg>
                </div>
                <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm">{testimonial.name}</h4>
                  <p className="text-orange-500 text-xs uppercase tracking-widest mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
