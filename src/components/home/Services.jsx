import { FaFileContract, FaChartLine, FaDraftingCompass, FaHandshake } from 'react-icons/fa';

const features = [
  {
    icon: <FaFileContract />,
    title: "100% Clear Title",
    desc: "We provide complete 7/12 extract and legal history. Every plot is verified by top legal experts in Pune."
  },
  {
    icon: <FaDraftingCompass />,
    title: "Ready Infrastructure",
    desc: "Don't wait for development. We provide internal tar roads, street lights, and water connection before you buy."
  },
  {
    icon: <FaChartLine />,
    title: "High Appreciation",
    desc: "Our locations (Loni, Hadapsar, Fursungi, Uruli) are chosen for maximum ROI due to upcoming Ring Road and Metro projects."
  },
  {
    icon: <FaHandshake />,
    title: "Transparent Dealings",
    desc: "No hidden charges. We assist with loan processing, registration, and mutation entry (Ferfar)."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Why Buy From RD-Estate?</h2>
          <p className="text-gray-600 text-lg">We don't just sell land; we sell peace of mind. Here is our promise to every investor.</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border-b-4 border-transparent hover:border-primary group">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-3xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;