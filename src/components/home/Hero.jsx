import { motion } from 'framer-motion';
import { FaPhoneAlt, FaSearch } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="/assets/images/land-hero.png" // Fallback image
          className="w-full h-full object-cover"
        >
          {/* Using one of your provided videos as the main hero background */}
          <source src="/assets/videos/canal.MP4" type="video/mp4" />
        </video>
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium mb-6">
            Trusted by 100+ Families in Pune
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Premium Land Plots in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Loni Kalbhor & Hadapsar
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            100% Clear Title Plots with Roads, Water, and Electricity. 
            Invest in Pune's fastest-growing corridors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#projects" 
              className="btn bg-primary hover:bg-primary-dark text-white border-none text-lg px-8 py-4 shadow-lg hover:shadow-green-900/50"
            >
              <FaSearch className="mr-2" /> View Available Plots
            </a>
            <a 
              href="#contact" 
              className="btn bg-white/10 hover:bg-white text-white hover:text-secondary border border-white/30 backdrop-blur-sm text-lg px-8 py-4"
            >
              <FaPhoneAlt className="mr-2" /> Book Site Visit
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <span className="text-sm">Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;