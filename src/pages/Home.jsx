import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import ProjectCard from '../components/ui/ProjectCard';
import ContactForm from '../components/ui/ContactForm';
import { projectsData } from '../data/projects';
import SEO from '../components/seo/SEO';
import ContactDetails from '../components/home/ContactDetails';

const Home = () => {
  // FILTER: Only show projects that are NOT completed
  const featuredProjects = projectsData.filter(project => project.type === 'ongoing');

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "RD-Estate & Developers",
    "image": "https://rd-estate.in/assets/images/logo.png",
    "telephone": "+919922042225",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 4, Pune - Solapur Highway",
      "addressLocality": "Loni Kalbhor",
      "addressRegion": "Maharashtra",
      "postalCode": "412201",
      "addressCountry": "IN"
    },
    "priceRange": "₹10 Lakhs - ₹1 Crore"
  };

  return (
    <>
      <SEO 
        /* UPDATED: Stronger Keyword Targeting */
        title="RD-Estate | Premium Residential Plots in Pune, Loni & Hadapsar"
        description="RD-Estate offers trusted land investments in Pune. 100% Clear Title Plots in Loni Kalbhor, Hadapsar & Uruli Kanchan. RERA registered & Loan facility available."
        keywords="rd estate, plots in pune, land for sale loni kalbhor, na plots hadapsar, uruli kanchan plots, clear title land pune, investment plots pune"
        schema={orgSchema}
      />
      <Hero />
      <Services />
      
      {/* Featured Projects Section (ADDED) */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-3 md:mb-4">
              Featured Investment Opportunities
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Prime land parcels in high-growth corridors. <strong>Clear Title. Ready Possession.</strong>
            </p>
            <div className="w-16 md:w-24 h-1 bg-primary mx-auto mt-4 md:mt-6 rounded-full"></div>
          </div>

          {featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
             <div className="text-center py-10">
                <p className="text-xl text-gray-500">New premium layouts launching soon.</p>
             </div>
          )}

          <div className="text-center mt-8 md:mt-12">
            <a 
              href="/plots" 
              className="w-full md:w-auto inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg border-2 border-transparent hover:border-white text-center"
            >
              View All Properties
            </a>
          </div>
        </div>
      </section>

      <About />
      <Testimonials />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Contact Us</h2>
                  <p className="text-gray-600 text-lg">
                    Ready to see the plots? Call us directly to schedule a site tour.
                  </p>
                  <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
              </div>
              
              <ContactDetails /> 
          </div>
      </section>
    </>
  );
};

export default Home;