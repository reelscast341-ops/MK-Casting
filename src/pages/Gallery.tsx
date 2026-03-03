import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  thumbnail: string;
  images: string[];
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    thumbnail: 'https://picsum.photos/seed/gallery1/800/1200',
    images: [
      'https://picsum.photos/seed/gallery1/800/1200',
      'https://picsum.photos/seed/gallery1-2/800/1200',
      'https://picsum.photos/seed/gallery1-3/800/1200'
    ],
    title: 'Fashion Editorial',
    description: 'A high-fashion editorial shoot for a leading lifestyle magazine, featuring avant-garde designs and dramatic lighting.'
  },
  {
    id: 2,
    thumbnail: 'https://picsum.photos/seed/gallery2/1000/700',
    images: [
      'https://picsum.photos/seed/gallery2/1000/700',
      'https://picsum.photos/seed/gallery2-2/1000/700'
    ],
    title: 'Commercial Campaign',
    description: 'A national commercial campaign for a premium sportswear brand, focusing on movement, energy, and athletic performance.'
  },
  {
    id: 3,
    thumbnail: 'https://picsum.photos/seed/gallery3/800/800',
    images: [
      'https://picsum.photos/seed/gallery3/800/800',
      'https://picsum.photos/seed/gallery3-2/800/800'
    ],
    title: 'Urban Lifestyle',
    description: 'Street-style photography capturing the essence of modern urban life for a contemporary clothing line.'
  },
  {
    id: 4,
    thumbnail: 'https://bookartistsonline.weebly.com/uploads/2/2/4/5/22456530/whatsapp-image-2024-02-18-at-3-36-40-pm-1-orig_16.jpeg',
    images: [
      'https://bookartistsonline.weebly.com/uploads/2/2/4/5/22456530/whatsapp-image-2024-02-18-at-3-36-40-pm-1-orig_16.jpeg',
      'https://media.istockphoto.com/id/1488264866/photo/portrait-of-young-caucasian-upset-woman-looking-at-camera-against-beige-background.jpg?s=612x612&w=0&k=20&c=NIW0vpir2coNRJacxZswA_wpLBryM6-WXCUfLgw1KMk=',
      'https://modnet.io/wp-content/uploads/2025/03/4594.webp',
      'https://thumbs.dreamstime.com/b/happy-young-woman-teen-girl-fancy-dress-people-style-holidays-hairstyle-fashion-concept-sequins-touching-long-wavy-62398784.jpg',
      'https://d1i4t8bqe7zgj6.cloudfront.net/thumbnails/5406436de4b0b19c172c92a7/Male_Model_STILL.jpg'
    ],
    title: 'Cinematic Portrait',
    description: 'Character-driven portraits for an upcoming independent film, highlighting the emotional depth of the cast.'
  },
  {
    id: 5,
    thumbnail: 'https://picsum.photos/seed/gallery5/800/1100',
    images: [
      'https://picsum.photos/seed/gallery5/800/1100',
      'https://picsum.photos/seed/gallery5-2/800/1100'
    ],
    title: 'Luxury Brand Shoot',
    description: 'Elegant and sophisticated imagery for a luxury watch brand, emphasizing craftsmanship and timeless style.'
  },
  {
    id: 6,
    thumbnail: 'https://picsum.photos/seed/gallery6/1000/900',
    images: [
      'https://picsum.photos/seed/gallery6/1000/900'
    ],
    title: 'Music Video Casting',
    description: 'Behind-the-scenes look at the casting process for a major artist\'s music video, featuring diverse and expressive talent.'
  },
  {
    id: 7,
    thumbnail: 'https://lh3.googleusercontent.com/d/1n0H3nQHMD1cXXT8d-TiqU26MOSPAkCsx',
    images: [
      'https://lh3.googleusercontent.com/d/1n0H3nQHMD1cXXT8d-TiqU26MOSPAkCsx',
      'https://lh3.googleusercontent.com/d/1yYAdAOUKECgEju95M84tUZKGGeN9cCkj',
      'https://lh3.googleusercontent.com/d/12Lr7qmCiv37WcWhBuOZBwfSgzjegGJ8s',
      'https://lh3.googleusercontent.com/d/1VuqoMYkEPRehhxRhO4aGrI4pIFA9FYY-'
    ],
    title: 'Beauty Campaign',
    description: 'Close-up beauty shots for a new skincare line, focusing on natural textures and radiant skin.'
  },
  {
    id: 8,
    thumbnail: 'https://picsum.photos/seed/gallery8/1000/1400',
    images: [
      'https://picsum.photos/seed/gallery8/1000/1400'
    ],
    title: 'Corporate Branding',
    description: 'Professional and approachable headshots and lifestyle images for a global tech company\'s rebrand.'
  },
  {
    id: 9,
    thumbnail: 'https://picsum.photos/seed/gallery9/800/1000',
    images: [
      'https://picsum.photos/seed/gallery9/800/1000'
    ],
    title: 'Fashion Runway',
    description: 'Dynamic shots from the runway of a major fashion week, capturing the movement and detail of the latest collections.'
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'ArrowRight') {
        const project = projects[selectedIndex];
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      } else if (e.key === 'ArrowLeft') {
        const project = projects[selectedIndex];
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  const handleOpenProject = (index: number) => {
    setSelectedIndex(index);
    setCurrentImageIndex(0);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      const project = projects[selectedIndex];
      setCurrentImageIndex((currentImageIndex + 1) % project.images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      const project = projects[selectedIndex];
      setCurrentImageIndex((currentImageIndex - 1 + project.images.length) % project.images.length);
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
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Our Gallery</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-4">Portfolio</h4>
          <h2 className="text-4xl font-bold uppercase tracking-tight">Creative Works</h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-0">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              layoutId={`project-${project.id}`}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => handleOpenProject(index)}
              className="break-inside-avoid mb-6 relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white"
            >
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-8 text-center">
                <motion.div
                  initial={false}
                  className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out"
                >
                  <h3 className="text-white text-xl font-bold uppercase tracking-wider mb-4">{project.title}</h3>
                  <div className="flex justify-center">
                    <span className="text-white text-[10px] uppercase tracking-[0.2em] border border-white/60 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 rounded-full backdrop-blur-md">
                      Explore Project
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Carousel Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
          >
            <button 
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
            >
              <X size={32} />
            </button>

            {projects[selectedIndex].images.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] bg-white/5 p-2 rounded-full hover:bg-white/10"
                >
                  <ChevronLeft size={40} />
                </button>

                <button 
                  onClick={handleNext}
                  className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110] bg-white/5 p-2 rounded-full hover:bg-white/10"
                >
                  <ChevronRight size={40} />
                </button>
              </>
            )}

            <div 
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
            >
              <div className="lg:col-span-2 flex items-center justify-center">
                <motion.img
                  key={`${projects[selectedIndex].id}-${currentImageIndex}`}
                  layoutId={currentImageIndex === 0 ? `project-${projects[selectedIndex].id}` : undefined}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={projects[selectedIndex].images[currentImageIndex]}
                  alt={projects[selectedIndex].title}
                  className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-white space-y-6">
                <motion.div
                  key={`info-${projects[selectedIndex].id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <h4 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">Project Details</h4>
                  <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">{projects[selectedIndex].title}</h2>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {projects[selectedIndex].description}
                  </p>
                  <div className="pt-8 flex items-center space-x-4">
                    <div className="h-px flex-grow bg-white/10"></div>
                    <span className="text-white/30 text-sm font-mono">
                      {currentImageIndex + 1} / {projects[selectedIndex].images.length}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
