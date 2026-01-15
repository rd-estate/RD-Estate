import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaSearch } from 'react-icons/fa';
import ProjectCard from '../components/ui/ProjectCard';
import { projectsData } from '../data/projects';
import SEO from '../components/seo/SEO';

const AvailablePlots = () => {
  const [filter, setFilter] = useState('All');
  
  // 1. FILTER FOR ONGOING ONLY
  const ongoingProjects = projectsData.filter(p => p.type === 'ongoing');

  // 2. Get locations from ONGOING projects only
  const locations = ['All', ...new Set(ongoingProjects.map(p => p.location.split(' ')[0]))];

  // 3. Filter based on UI selection
  const filteredProjects = filter === 'All' 
    ? ongoingProjects 
    : ongoingProjects.filter(p => p.location.includes(filter));

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <SEO 
        title="Available Plots for Sale in Pune" 
        description="Explore our latest plot launches in Mhatobachi Alandi, Fursungi, and Uruli Kanchan. Prices starting from ₹20 Lakhs. Download layout maps."
        url="/plots"
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Current Inventory
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our handpicked collection of premium plotted developments. 
            All projects come with 100% clear title and ready infrastructure.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {locations.map(loc => (
            <button
              key={loc}
              onClick={() => setFilter(loc)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium ${
                filter === loc 
                  ? 'bg-primary text-white border-primary shadow-lg transform -translate-y-1' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Plots Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <div className="text-6xl text-gray-200 mb-4"><FaSearch className="mx-auto"/></div>
            <h3 className="text-xl font-bold text-gray-400">No plots found in this location.</h3>
            <button onClick={() => setFilter('All')} className="text-primary font-bold mt-2 hover:underline">
              View all locations
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailablePlots;