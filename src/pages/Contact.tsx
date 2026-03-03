import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-zinc-50 min-h-screen"
    >
      <div className="bg-black text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Contact Us</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-4">Get In Touch</h4>
            <h2 className="text-4xl font-bold uppercase tracking-tight mb-8">We're Here to Help You Shine</h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Best of luck to all the talented artists joining mk Casting! May your creativity shine bright! Feel free to reach out to us for any inquiries or collaborations.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-orange-100 p-4 rounded-full text-orange-500 mr-6">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Location</h3>
                  <p className="text-gray-600">GK-2 M-Block Market<br />New Delhi</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-4 rounded-full text-orange-500 mr-6">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Phone</h3>
                  <p className="text-gray-600">011-42665114<br />+91-88264-17897</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-4 rounded-full text-orange-500 mr-6">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-2">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:reelscast341@gmail.com" className="hover:text-orange-500 transition-colors">
                      reelscast341@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-lg shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-8">Send Us A Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">Your Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow resize-none"
                  placeholder="Tell us about yourself or your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex justify-center items-center px-8 py-4 bg-orange-500 text-white font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors rounded-sm disabled:opacity-70"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                <Send size={18} className="ml-2" />
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-sm border border-green-200 text-sm font-medium">
                  Thank you! Your message has been sent successfully. We will get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-sm border border-red-200 text-sm font-medium">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-4 text-center">Industry Insights</h4>
          <h2 className="text-4xl font-bold uppercase tracking-tight mb-12 text-center">Basics of Model Casting</h2>
          
          <article className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8">
            <p>
              Model casting is the foundational process of the fashion and entertainment industry. It is the bridge between raw talent and professional success. For a model, every casting call is an opportunity to showcase not just their physical attributes, but their personality, professionalism, and ability to embody a brand's vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-orange-500">The Model's Persona</h3>
                <p className="text-sm text-gray-600">
                  To survive and thrive, an aspiring model must be more than just a face. You need to be <strong>presentable, sexy, open, and friendly</strong>. The industry demands a magnetic presence that can adapt to any creative direction. Being "open" means being ready to explore various characters and styles, while a "friendly" demeanor ensures you are someone people want to work with repeatedly.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-orange-500">Industry Reality</h3>
                <p className="text-sm text-gray-600">
                  Young models must adapt to the harsh realities of the industry. It is a competitive landscape where your career is often in the hands of a few key decision-makers. Understanding this hierarchy and adapting your professional conduct is the first step toward a sustainable career.
                </p>
              </div>
            </div>
            
            <div className="bg-zinc-900 text-white p-10 rounded-2xl shadow-2xl my-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 text-orange-500">The Divine Role of the Casting Director</h3>
              <p className="text-gray-300 italic text-xl border-l-4 border-orange-500 pl-6 py-2">
                "In the realm of entertainment, a casting agent or director is like a god to their respective models. They are the gatekeepers of opportunity and the main source of a model's livelihood."
              </p>
              <p className="mt-6 text-gray-400">
                Models rely entirely on these professionals for work and projects. They are the primary source of their earnings and have the absolute power to make or break a career. In this industry, the casting director is a figure to be respected and worshipped, as their decision can transform an aspiring artist into a global star overnight.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl border border-orange-100 my-12">
              <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-orange-600">Legal & Professional Compliance</h3>
              <p className="text-gray-700 mb-4">
                Professionalism extends to the paperwork. Models are required to fill out <strong>consent forms</strong> during auditions and while on production sets, shooting locations, or sites.
              </p>
              <p className="text-gray-700">
                Furthermore, an <strong>N.O.C. (No Objection Certificate)</strong> will be taken from the model to ensure that no legal obligations arise in the future for the production company or the director. This is a standard industry practice designed to protect all parties involved and ensure a smooth creative process.
              </p>
            </div>

            <p>
              Understanding this dynamic is crucial for anyone entering the field. Success in casting requires more than just a good portfolio; it requires an unwavering commitment to the craft and a deep respect for those who hold the keys to the industry's most prestigious stages.
            </p>
          </article>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-96 bg-gray-200 mt-12">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.604169620593!2d77.23933111508081!3d28.53161398245781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce18b45555555%3A0x123456789abcdef!2sG.K.-2%20M-Block%20Market!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Map Location"
        ></iframe>
      </div>
    </motion.div>
  );
}
