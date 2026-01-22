import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaRoad, FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      
      {/* MOBILE FIX: Use aspect-[4/3] on mobile for taller images, aspect-video on desktop */}
      <div className="relative w-full aspect-[4/3] md:aspect-video bg-gray-900 overflow-hidden">
        {/* POSTER IMAGE */}
        <img 
          src={project.posterSrc} 
          alt={project.title} 
          // FIX: Only scale on desktop (md:group-hover) to avoid sticky hover on mobile
          className="w-full h-full object-cover transform md:group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          onError={(e) => {e.target.style.display='none'}} 
        />
        
        {/* Status Badge */}
        <div className="absolute top-3 right-3 bg-white text-primary text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider">
          {project.status}
        </div>
        
        {/* Price Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-3 pt-8">
          <p className="text-white font-bold text-lg leading-none">{project.shortPrice}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-secondary mb-1 truncate">
          {project.title}
        </h3>
        
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
          <FaMapMarkerAlt className="text-primary" />
          <span>{project.location}</span>
        </div>

        {/* Features Preview */}
        <div className="flex gap-2 mb-4 mt-auto">
          <div className="flex items-center gap-1 text-[10px] text-gray-600 bg-gray-50 px-2 py-1 rounded">
             <FaRoad className="text-green-600"/> 40ft Roads
          </div>
          <div className="flex items-center gap-1 text-[10px] text-gray-600 bg-gray-50 px-2 py-1 rounded">
             <span className="font-bold text-blue-600">RERA</span> Approved
          </div>
        </div>

        <Link 
          to={`/projects/${project.slug}`} 
          className="w-full btn btn-outline py-2 text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-white active:bg-primary active:text-white"
        >
          View Details <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;