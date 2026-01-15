import { useState } from 'react';
import { FaPlay, FaYoutube } from 'react-icons/fa';

const SmartVideo = ({ videoId, posterSrc, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videoId) return null;

  return (
    <div className="relative w-full h-full overflow-hidden bg-black group">
      {!isPlaying ? (
        /* --- STATE 1: THE "COVER" (Loads Instantly) --- */
        <button 
          onClick={() => setIsPlaying(true)}
          className="relative w-full h-full block cursor-pointer group"
          aria-label="Play Video"
        >
          {/* 1. The High Quality Image */}
          <img 
            src={posterSrc} 
            alt={title} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
          />
          
          {/* 2. The Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60"></div>

          {/* 3. The Info & Title (Visible BEFORE playing) */}
          <div className="absolute top-0 left-0 w-full p-6 text-left z-20">
            <div className="inline-flex items-center gap-2 bg-red-600/90 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-2">
                <FaYoutube /> Official Video
            </div>
            <h2 className="text-white text-xl md:text-3xl font-bold text-shadow-lg leading-tight">
              {title}
            </h2>
          </div>

          {/* 4. The Big Play Button (Centered) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <FaPlay className="text-white ml-1 text-2xl" />
                </div>
            </div>
            <p className="text-white text-center mt-4 font-bold tracking-widest text-sm uppercase opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Click to Watch
            </p>
          </div>
        </button>
      ) : (
        /* --- STATE 2: THE PLAYER (Loads only on click) --- */
        <iframe 
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=1&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default SmartVideo;