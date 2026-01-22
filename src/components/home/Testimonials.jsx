import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: "Mr. Sanjay Patil",
    role: "Plot Owner, Vasant Park",
    text: "The canal view from our plot is priceless. I bought this for investment in 2021, and the price has already appreciated by 50%. The legal process was very smooth.",
    rating: 5
  },
  {
    name: "Priya Nair",
    role: "NRI Investor",
    text: "As an NRI, I was worried about land encroachment issues. RD-Estate's team sends me monthly updates and photos of my plot. Very trustworthy family business.",
    rating: 5
  },
  {
    name: "Rajesh Sharma",
    role: "Resident, Gurudatta Park",
    text: "I looked at 10 projects in Hadapsar before finalizing here. The 40ft wide roads and water connection were the deciding factors. Highly recommended.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Stories from Real Investors</h2>
          <p className="text-gray-400">Join 100+ happy families who have trusted us with their dreams.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 relative hover:transform hover:-translate-y-2 transition-transform duration-300">
              <FaQuoteLeft className="text-4xl text-primary/40 absolute top-6 left-6" />
              
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-600"} />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic leading-relaxed relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-xl">
                    {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-sm text-primary-light">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;