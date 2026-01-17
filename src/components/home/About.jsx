import { FaCheck } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/images/About.jpeg" 
                alt="RD-Estate Team" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Trust Float */}
              <div className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <p className="text-4xl font-bold text-primary mb-1">12+</p>
                <p className="text-gray-600 font-medium">Years of Delivering Promises in Pune Real Estate</p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-primary/20 rounded-2xl transform translate-x-4 translate-y-4"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Transforming Raw Land into <br />
              <span className="text-primary">Family Legacies</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded in 2014, RD-Estate began with a simple mission: to make land investment in Pune <strong>safe, transparent, and profitable</strong> for the common man.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              We specialize in identifying high-growth corridors like Loni Kalbhor, Uruli Kanchan, and Hadapsar Annexe. Unlike aggregators, we own and develop our layouts, ensuring you get direct deals with zero brokerage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "RERA Registered Projects",
                "Assistance for 7/12 Transfer",
                "Fencing & Demarcation",
                "Lifetime Plot Maintenance"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="bg-green-100 text-green-700 p-1 rounded-full text-xs">
                    <FaCheck />
                  </span>
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-outline px-8">Meet Our Team</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;