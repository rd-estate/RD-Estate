import { FaFileContract, FaChartLine, FaDraftingCompass, FaHandshake } from 'react-icons/fa';

const features = [
  {
    icon: <FaFileContract />,
    title: "100% Clear Title",
    desc: "Immediate 7/12 extract & search report. Verified land, zero legal risks."
  },
  {
    icon: <FaDraftingCompass />,
    title: "Ready Infra",
    desc: "Tar roads, water, and electricity are ready. Start building immediately."
  },
  {
    icon: <FaChartLine />,
    title: "High Returns",
    desc: "Prime spots near Ring Road & Metro. Locations chosen for fast growth."
  },
  {
    icon: <FaHandshake />,
    title: "Zero Hidden Costs",
    desc: "We handle Loan, Registration & Ferfar. No brokerage, just transparency."
  }
];

const Services = () => {
  return (
    <section className="py-10 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-2 md:mb-4">Why Buy From RD-Estate?</h2>
          <p className="text-gray-600 text-sm md:text-lg">We don't just sell land; we sell peace of mind.</p>
          <div className="w-16 md:w-24 h-1 bg-primary mx-auto mt-3 md:mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {features.map((item, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border-b-4 border-transparent hover:border-primary group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-50 rounded-full flex items-center justify-center text-2xl md:text-3xl text-primary mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;