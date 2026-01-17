import { useState } from 'react';
import { FaPaperPlane, FaSpinner, FaCheckCircle } from 'react-icons/fa';

const ContactForm = ({ plotInterest = "General Inquiry" }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    interest: plotInterest
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // In production, integrate with EmailJS or Formspree here
      console.log('Form Submitted:', formData);
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in">
        <div className="text-green-600 text-5xl mb-4 flex justify-center"><FaCheckCircle /></div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Inquiry Received!</h3>
        <p className="text-green-700">Thank you, {formData.name}. Our team will call you at {formData.phone} shortly.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-green-700 font-semibold underline hover:text-green-900">Send another inquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-lg border-t-4 border-primary">
      <h3 className="text-2xl font-bold text-secondary mb-6">Request Site Visit</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            type="text" 
            name="name" 
            required 
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Mr. Raj Patil"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input 
            type="tel" 
            name="phone" 
            required 
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit mobile number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="98765 43210"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Interest</label>
          <select 
            name="interest" 
            value={formData.interest} 
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Vasant Park">Vasant Park</option>
            <option value="Gurudatta Park">Gurudatta Park</option>
            <option value="Mayuresh Park">Mayuresh Park</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
          <textarea 
            name="message" 
            rows="3"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="I am looking for a corner plot..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full btn btn-primary py-4 text-lg shadow-xl"
        >
          {status === 'submitting' ? (
            <span className="flex items-center"><FaSpinner className="animate-spin mr-2"/> Sending...</span>
          ) : (
            <span className="flex items-center"><FaPaperPlane className="mr-2"/> Send Inquiry</span>
          )}
        </button>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          By submitting, you agree to receive a call/WhatsApp from ED-Estate regarding your inquiry.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;