import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-primary inline-block pb-1">RD-Estate</h3>
          <p className="text-gray-300 mb-6">Pune's trusted land plotting specialists since 2014. We develop premium residential plots with clear titles and complete infrastructure.</p>
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Icon />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-primary inline-block pb-1">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'Available Plots', 'Locations', 'About Us', 'Contact'].map(item => (
              <li key={item}><a href="#" className="text-gray-300 hover:text-primary transition-colors hover:pl-2">{item}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-primary inline-block pb-1">Locations</h3>
           <ul className="space-y-2">
            {['Loni Kalbhor', 'Hadapsar', 'Wagholi', 'Hinjewadi'].map(item => (
              <li key={item}><a href="#" className="text-gray-300 hover:text-primary transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-primary inline-block pb-1">Newsletter</h3>
          <p className="text-gray-300 mb-4">Subscribe for updates on new plot releases.</p>
          <form className="flex">
            <input type="email" placeholder="Email address" className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none" />
            <button className="bg-primary px-4 py-2 rounded-r-md hover:bg-primary-dark transition-colors">Go</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 RD-Estate. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;