import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
      {/* Left Side: Contact Information */}
      <div className="space-y-8">
        
        
       

        {/* Phone Card */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl flex-shrink-0">
            <FaPhoneAlt />
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary mb-2">Call Us</h3>
            <p className="text-gray-600 mb-2">For Site Visits & Bookings:</p>
            <a href="tel:+919022003828" className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors block">
              +91 90220 03828
            </a>
            <a href="https://wa.me/919022003828" className="inline-flex items-center gap-2 text-green-600 font-semibold mt-2 hover:underline">
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Email Card */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl flex-shrink-0">
            <FaEnvelope />
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary mb-2">Email Us</h3>
            <a href="mailto:info@rdestate.com" className="text-gray-600 hover:text-primary text-lg">
              info@rdestate.com
            </a>
          </div>
        </div>

        {/* Hours Card */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl flex-shrink-0">
            <FaClock />
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary mb-2">Working Hours</h3>
            <p className="text-gray-600">
              Monday - Sunday: 9:00 AM - 8:00 PM<br />
              <span className="text-sm text-gray-400">(Site visits available on all days)</span>
            </p>
          </div>
        </div>

      </div>

      {/* Right Side: Google Map */}
      <div className="h-[400px] w-full bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-200">
        {/* Replace the src below with your actual Google Maps Embed Link */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5676456789!2d74.0200!3d18.4900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI5JzI0LjAiTiA3NMKwMDEnMTIuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="RD Estate Office Location"
        ></iframe>
      </div>

    </div>
  );
};

export default ContactDetails;