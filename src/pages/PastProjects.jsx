import { motion } from 'framer-motion';
import { FaCheckCircle, FaBuilding } from 'react-icons/fa';
import ProjectCard from '../components/ui/ProjectCard';
import { projectsData } from '../data/projects';
import SEO from '../components/seo/SEO';

const PastProjects = () => {
  // Filter only completed projects
  const completedProjects = projectsData.filter(p => p.type === 'completed');

  return (
    <div className="pt-24 pb-20 min-h-screen bg-light">
      <SEO 
        title="Completed Projects - Our Success Stories" 
        description="See our track record. Over 10+ completed plotted layouts in Pune including Balaji Vishwa and Narayan Park. 100% sold out and handed over."
        url="/completed-projects"
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide mb-4 inline-block">
            Track Record
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Delivered Promises
          </h1>
          <p className="text-gray-600 text-lg">
            We don't just sell land; we build communities. Here are the landmarks 
            we have successfully handed over to our happy customers.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border-b-4 border-primary">
                <div className="text-3xl font-bold text-secondary mb-1">10+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border-b-4 border-primary">
                <div className="text-3xl font-bold text-secondary mb-1">100+</div>
                <div className="text-sm text-gray-500">Happy Families</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border-b-4 border-primary">
                <div className="text-3xl font-bold text-secondary mb-1">10L+</div>
                <div className="text-sm text-gray-500">Sq.Ft Developed</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border-b-4 border-primary">
                <div className="text-3xl font-bold text-secondary mb-1">100%</div>
                <div className="text-sm text-gray-500">Clear Title</div>
            </div>
        </div>

        {/* Projects Grid */}
        {completedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Overlay to dim completed projects slightly */}
                <ProjectCard project={project} />
                
                {/* Sold Out Badge Overlay */}
                <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-2 shadow-lg z-10">
                    <FaCheckCircle className="text-green-400" /> COMPLETED
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl text-gray-300 mb-4"><FaBuilding className="mx-auto"/></div>
            <h3 className="text-xl font-bold text-gray-400">Portfolio being updated...</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default PastProjects;