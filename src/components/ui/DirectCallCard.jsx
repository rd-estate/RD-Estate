import { FaPhoneAlt, FaWhatsapp, FaUserTie, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const DirectCallCard = ({ projectTitle }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-primary">
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary mb-2">Interested in {projectTitle}?</h3>
        <p className="text-gray-500 text-sm mb-6">
          Don't wait for callbacks. Speak directly to the developer for the best "Final Price" and live availability.
        </p>

        {/* Profile Section - Builds Trust */}
        <div className="flex items-center gap-4 mb-6 bg-green-50 p-4 rounded-lg border border-green-100">
          <div className="w-14 h-14 rounded-full bg-white border-2 border-primary overflow-hidden p-1">
             {/* Use your actual photo if available, or a generic professional icon */}
             <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                <FaUserTie className="text-2xl" />
             </div>
          </div>
          <div>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Project Owner</p>
            <h4 className="font-bold text-secondary">Mr. Raj Dugane</h4>
            <p className="text-xs text-green-700 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Available Now
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <a 
            href="tel:+919022003828" 
            className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-green-900/30 transition-all transform hover:-translate-y-1 text-lg"
          >
            <FaPhoneAlt className="animate-pulse" /> Call +91 90220 03828
          </a>
          
          <a 
            href={`https://wa.me/919022003828?text=Hello, I am interested in ${projectTitle}. Please send details.`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-white border-2 border-[#25D366] text-[#25D366] font-bold py-3 rounded-lg hover:bg-[#25D366] hover:text-white transition-all"
          >
            <FaWhatsapp className="text-xl" /> WhatsApp Layout
          </a>
        </div>

        {/* Assurance Text */}
        <div className="mt-6 pt-6 border-t border-gray-100 text-center space-y-2">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
            <FaClock /> 9:00 AM - 9:00 PM (Mon-Sun)
          </p>
          <p className="text-xs text-gray-500 flex items-center justify-center gap-2">
            <FaMapMarkerAlt /> Office: Loni Kalbhor, Pune
          </p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-3 text-center text-xs text-gray-400 font-medium">
        Zero Brokerage • Direct Deal
      </div>
    </div>
  );
};

export default DirectCallCard;