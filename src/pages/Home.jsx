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
    "image": "https://rdestate.com/assets/images/logo.png",
    "telephone": "+919022003828",
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
        title="Best NA Plots for Sale in Loni Kalbhor & Hadapsar"
        description="RD-Estate offers premium residential plots in Pune. 100% clear title, ready possession, and loan facility available. Trusted by 500+ families."
        keywords="plots in pune, land for sale,land for sale loni kalbhor, na plots hadapsar, rd estate"
        schema={orgSchema}
      />
      <Hero />
      <Services />
      
      {/* Projects Section */}
     

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
              
              {/* REPLACED FORM WITH CONTACT DETAILS */}
              <ContactDetails /> 
              
          </div>
      </section>
    </>
  );
};

export default Home;