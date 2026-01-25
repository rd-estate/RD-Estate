import { motion } from 'framer-motion';
import { FaPhoneAlt, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const Hero = () => {
  return (
    /* FIXED: h-[55vh] on mobile (Shorter = Less Crop), min-h-screen on desktop */
    <section className="relative h-[55vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="/assets/images/land-hero.png"
          /* FIXED: object-cover ensures it fills the box with NO black bars */
          className="w-full h-full object-cover opacity-80"
        >
          {/* Ensure this video path is correct and file exists! */}
          {/* <source src="/assets/videos/canal.MP4" type="video/mp4" /> */}
        </video>
        {/* Gradient: Makes text readable even if video is bright */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Removed backdrop-blur for cleaner look */}
          <span className="inline-block py-1 px-3 rounded-full bg-black/40 border border-white/20 text-xs md:text-sm font-medium mb-3 md:mb-6">
            Trusted by 100+ Families in Pune
          </span>
          
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-6 leading-tight text-shadow-lg">
            <span className="text-green-400">RD-Estate:</span> Premium Land <br />
            <span className="text-white">
              Hadapsar, Loni & Uruli
            </span>
          </h1>

          <p className="text-sm md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto drop-shadow-md">
            100% Clear Title Plots with Roads & Water. 
          </p>

          <div className="flex flex-row gap-3 justify-center items-center">
            <a 
              href="/AvailablePlots" 
              className="btn bg-primary hover:bg-primary-dark text-white border-none text-sm md:text-lg px-6 py-3 shadow-lg rounded-lg"
            >
              <FaSearch className="mr-2" /> View Plots
            </a>
            <a 
              href="#contact" 
              className="btn bg-white/10 hover:bg-white text-white hover:text-secondary border border-white/30 text-sm md:text-lg px-6 py-3 rounded-lg"
            >
              <FaPhoneAlt className="mr-2" /> Visit Site
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;