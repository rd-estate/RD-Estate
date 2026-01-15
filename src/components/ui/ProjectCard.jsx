import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaRoad, FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.posterSrc} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        {/* Status Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
          {project.status}
        </div>
        {/* Price Overlay (Mobile Friendly) */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
          <p className="text-white font-bold text-lg">{project.shortPrice}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <div className="flex items-start gap-2 text-sm text-gray-500 mb-4">
          <FaMapMarkerAlt className="mt-1 text-primary flex-shrink-0" />
          <span>{project.location}</span>
        </div>

        {/* Features Preview */}
        <div className="flex gap-4 mb-6 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2 text-xs text-gray-600">
             <span className="bg-green-50 text-green-700 p-1.5 rounded"><FaRoad /></span>
             <span>40ft Roads</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
             <span className="bg-blue-50 text-blue-700 p-1.5 rounded font-bold">RERA</span>
             <span>Compliant</span>
          </div>
        </div>

        <Link 
          to={`/projects/${project.slug}`} 
          className="mt-auto w-full btn btn-outline py-2 text-sm flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary"
        >
          View Details <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;