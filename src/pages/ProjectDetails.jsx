import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaCheckCircle, FaFileAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { projectsData } from '../data/projects';
import SEO from '../components/seo/SEO';
import DirectCallCard from '../components/ui/DirectCallCard';
import NotFound from './NotFound';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  // Helper to extract YouTube ID
  const getYouTubeId = (url) => {
    if (!url || (!url.includes('youtube') && !url.includes('youtu.be'))) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const heroVideoId = getYouTubeId(project.videoSrc);
  const isLocalHero = project.videoSrc && project.videoSrc.toLowerCase().endsWith('.mp4');

  return (
    /* --- SAFETY WRAPPER: PREVENTS HORIZONTAL SCROLLING --- */
    <div className="pt-0 w-full overflow-x-hidden relative"> 
      <SEO 
        title={`${project.title} - Plots in ${project.location}`}
        description={project.description}
        image={project.posterSrc}
        url={`/projects/${slug}`}
      />

      {/* ========================================================= */}
      {/* HERO SECTION: FIXED OVERFLOW */}
      {/* ========================================================= */}
      <section className="relative h-screen min-h-[600px] w-full bg-black overflow-hidden">
        
        {/* 1. BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            {heroVideoId ? (
                /* YOUTUBE HERO: Smart Object-Fit Simulation */
                /* This math ensures the video covers the screen without causing scroll */
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.77vh] h-[56.25vw]">
                     <iframe 
                        src={`https://www.youtube.com/embed/${heroVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${heroVideoId}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1`} 
                        className="w-full h-full opacity-60"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        title="Hero Video"
                    ></iframe>
                </div>
            ) : isLocalHero ? (
                /* LOCAL HERO: Standard Cover */
                <video 
                    autoPlay muted loop playsInline 
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src={project.videoSrc} type="video/mp4" />
                </video>
            ) : (
                /* IMAGE FALLBACK */
                <img src={project.posterSrc} alt={project.title} className="w-full h-full object-cover opacity-60" />
            )}
        </div>

        {/* 2. GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 z-10"></div>
        
        {/* 3. TEXT CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
            <div className="text-center max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }}
                >
                    {/* Status Badge */}
                    <span className="bg-primary text-white px-4 py-1.5 rounded-full font-bold text-xs md:text-sm uppercase tracking-wider mb-6 inline-block shadow-lg border border-green-400/30 backdrop-blur-md">
                        {project.status}
                    </span>
                    
                    {/* Main Title - Responsive sizing fixed */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl leading-tight">
                        {project.title}
                    </h1>
                    
                    {/* Location */}
                    <p className="text-lg md:text-2xl text-gray-200 mb-8 font-light flex items-center justify-center gap-2 drop-shadow-md">
                        <FaMapMarkerAlt className="text-primary animate-bounce"/> {project.location}
                    </p>
                    
                    {/* Price */}
                    <div className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-10 drop-shadow-lg">
                        {project.price}
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto">
                        <a href="tel:+919022003828" className="btn btn-primary w-full sm:w-auto text-lg px-8 py-4 shadow-[0_0_20px_rgba(46,125,50,0.6)] animate-pulse">
                            <FaPhone /> Call Owner
                        </a>
                        <a href={`https://wa.me/919022003828?text=I want brochure for ${project.title}`} target="_blank" rel="noopener noreferrer" className="btn bg-white/10 backdrop-blur-md border-white/50 text-white hover:bg-white hover:text-black w-full sm:w-auto text-lg px-8 py-4">
                            <FaWhatsapp /> Brochure
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-secondary text-white py-4 border-b border-gray-700">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base">
            <span className="flex items-center gap-2"><FaCheckCircle className="text-primary-light"/> Clear Title (7/12)</span>
            <span className="flex items-center gap-2"><FaCheckCircle className="text-primary-light"/> Immediate Registration</span>
            <span className="flex items-center gap-2"><FaCheckCircle className="text-primary-light"/> Vastu Compliant</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.features.map((feature, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <div className="text-3xl text-primary mb-2 flex justify-center">{feature.icon}</div>
                  <h3 className="font-bold text-gray-800 text-sm">{feature.title}</h3>
                  <p className="text-gray-500 text-xs">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* About Project */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-secondary mb-4">About the Project</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                
                <h3 className="font-bold text-lg mb-3">Project Amenities</h3>
                <div className="grid grid-cols-2 gap-3">
                    {project.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700">
                            <FaCheckCircle className="text-green-500 flex-shrink-0" /> {amenity}
                        </div>
                    ))}
                </div>
            </div>

            {/* ========================================================= */}
            {/* GALLERY SECTION: NO SCALING, CLEAN FIT */}
            {/* ========================================================= */}
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">Project Gallery</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.galleryImages.map((mediaSrc, idx) => {
                  const yId = getYouTubeId(mediaSrc);
                  const isLocalVideo = mediaSrc.toLowerCase().endsWith('.mp4');
                  const gridClass = idx === 0 ? 'md:col-span-2' : '';

                  return (
                    <div 
                      key={idx} 
                      className={`relative rounded-xl overflow-hidden shadow-lg bg-black w-full aspect-video ${gridClass}`}
                    >
                      {yId ? (
                        /* YOUTUBE: Autoplay + Loop */
                        <div className="w-full h-full pointer-events-none">
                            <iframe 
                              src={`https://www.youtube.com/embed/${yId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${yId}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1`} 
                              className="w-full h-full" 
                              title={`Gallery Video ${idx}`}
                              allow="autoplay; encrypted-media"
                              frameBorder="0"
                            ></iframe>
                        </div>
                      ) : isLocalVideo ? (
                        /* LOCAL VIDEO */
                        <video 
                          src={mediaSrc} 
                          className="w-full h-full object-cover pointer-events-none"
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                        </video>
                      ) : (
                        /* IMAGE */
                        <img 
                          src={mediaSrc} 
                          alt={`Gallery view ${idx}`} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                          loading="lazy" 
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Location Map */}
            {project.mapSrc && (
                <div>
                    <h2 className="text-2xl font-bold text-secondary mb-6">Location Map</h2>
                    <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
                        <iframe src={project.mapSrc} width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            )}
        </div>

        {/* Sidebar Sticky Area */}
        <div className="lg:col-span-1">
            <div className="sticky top-24">
                <DirectCallCard projectTitle={project.title} />

                <div className="mt-6 bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2"><FaFileAlt /> Download Layout</h4>
                    <a 
                      href={`https://wa.me/919022003828?text=Send PDF for ${project.title}`}
                      target="_blank"
                      className="w-full btn bg-blue-600 text-white hover:bg-blue-700 block text-center"
                    >
                      Request PDF on WhatsApp
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;