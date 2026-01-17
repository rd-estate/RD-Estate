import { FaRulerCombined, FaMapMarkerAlt,FaSwimmingPool, FaTree, FaHome, FaRupeeSign, FaRoad, FaSchool, FaCity, FaWater, FaTrain, FaUniversity } from 'react-icons/fa';

export const projectsData = [
  // --- COMPLETED PROJECTS (Will show on "Completed Projects" Page) ---
  
    {
    id: "sahyadri-hills",
    type: "ongoing",
    slug: "sahyadri-hills",
    title: "Sahyadri Hills",
    status: "New Launch",
    price: "₹55 Lakhs",
    shortPrice: "₹55 Lakhs",
    location: "Mhatobachi Alandi",
    description: "Your perfect weekend gateway. Own a massive 11 Guntha plot that comes with a ready-constructed farmhouse, lavish lawn, and sitting area. Experience the luxury of nature with resort-like amenities including a swimming pool and temple.",
    videoSrc: "https://www.youtube.com/embed/O3gLt2k1zdQ", // Rename your video file to this
    posterSrc: "/assets/images/sahyadri-hills1.png", // You'll need a cover image
    mapSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3784.576169902676!2d74.0528980751901!3d18.445918082632296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI2JzQ1LjMiTiA3NMKwMDMnMTkuNyJF!5e0!3m2!1sen!2sin!4v1715423891000!5m2!1sen!2sin", // Add real map link later
    galleryImages: [
      "/assets/images/shayadri-hills.jpeg",
      "/assets/images/sahyadri-hills3.png",
      "/assets/images/shayadri-hills3.jpeg",
      "/assets/videos/shayadri-hills2.mp4",
      
    ],
    features: [
      { icon: <FaRulerCombined/>, title: "Plot Size", desc: "11 Guntha" },
      { icon: <FaHome/>, title: "Structure", desc: "Ready Farmhouse" },
      { icon: <FaSwimmingPool/>, title: "Luxury", desc: "Swimming Pool" },
      { icon: <FaTree/>, title: "Nature", desc: "Lavish Lawn" },
    ],
    amenities: [
        "Ready Farmhouse Setup", 
        "Electrcity Connection", 
        "Children's Play Area", 
        "Water Connection", 
        "Gated Community", 
        "Internal Roads",
        "Swimming Pool",
        "Party Hall",
    ],
    faq: [
        { question: "What is the exact plot area?", answer: "Each plot is 11 Guntha (approx 11,800 sq.ft)." },
        { question: "Is the farmhouse built?", answer: "Yes, the plot comes with a ready farmhouse structure and developed lawn." }
    ]
  },
  {
    id: "vasant-park-1",
    type: "completed",  // <--- This moves it to the Completed Page
    slug: "vasant-park",
    title: "Vasant Park",
    status: "Sold Out",
    price: "Sold Out",
    shortPrice: "Sold Out",
    location: "Bhekrai Nagar (Near Hadapsar)",
    description: "Premium residential plots in Bhekrai Nagar. Fully developed society with families residing.",
    videoSrc: "https://www.youtube.com/embed/B36hIvna7Rs",
    posterSrc: "/assets/images/vasant.JPG",
    features: [
      { icon: <FaRulerCombined/>, title: "Size", desc: "1000 sq.ft." },
      { icon: <FaMapMarkerAlt/>, title: "Location", desc: "Hadapsar" },
    ],
    mapSrc:"https://www.google.com/maps/embed?pb=!4v1750526196572!6m8!1m7!1sGic9NZJGSWH1IIxbFHr5eQ!2m2!1d18.47015212176395!2d73.96355247875104!3f88.43589981072765!4f-16.596231730731617!5f0.7820865974627469",
    amenities: ["Water Connection", "Electricity", "Drainage Line"],
    galleryImages: ["/assets/images/vasant.JPG", "/assets/images/vasant-f1.png"]
  },
  {
    id: "gurudatta-park",
    type: "completed", // <--- Moves to Completed Page
    slug: "gurudatta-park",
    title: "Gurudatta Park",
    status: "Sold Out",
    price: "Sold Out",
    shortPrice: "Sold Out",
    location: "Hadapsar Annexe",
    description: "Located just 10km from Pune city center. Handed over in 2022.",
    videoSrc: "https://www.youtube.com/embed/EGOxYZiVho0",
    posterSrc: "/assets/images/gurudatta.jpg",
    features: [
      { icon: <FaCity/>, title: "Proximity", desc: "10km from City" },
      { icon: <FaRoad/>, title: "Roads", desc: "Tar Roads" },
    ],
    mapSrc:"https://www.google.com/maps/embed?pb=!4v1750603537023!6m8!1m7!1sZ3c2OSn-3R0EV_qtWAlXIA!2m2!1d18.47108985412514!2d73.96027515708151!3f16.039722443751202!4f-3.9914468706185176!5f0.7820865974627469",
    amenities: ["Gated Community", "Street Lights"],
    galleryImages: ["/assets/images/gurudatta.jpg"]
  },
  {
    id: "mayuresh-park",
    type: "completed", // <--- Moves to Completed Page
    slug: "mayuresh-park",
    title: "Mayuresh Park",
    status: "Sold Out",
    price: "Sold Out",
    shortPrice: "Sold Out",
    location: "Loni Kalbhor (Ramdara)",
    description: "Scenic plots near Ramdara Temple. A peaceful society delivered successfully.",
    videoSrc: "https://www.youtube.com/embed/pnJdNNMuycw",
    posterSrc: "/assets/images/ramdara.JPG",
    features: [
      { icon: <FaWater/>, title: "View", desc: "Lake View" },
      { icon: <FaUniversity/>, title: "College", desc: "MIT Nearby" },
    ],
    mapSrc:"https://www.google.com/maps/embed?pb=!4v1750522616195!6m8!1m7!1sJRSy0lCaFRuypuwDOLs2CA!2m2!1d18.45595462307744!2d74.01552602350915!3f203.45083111212944!4f-14.572984434524074!5f0.7820865974627469",
    amenities: ["Nature View", "Temple Nearby"],
    galleryImages: ["/assets/images/ramdara.JPG", "/assets/images/ramdara-2.JPG"]
  },
  {
    id: "balaji-vishwa",
    type: "completed", // <--- Moves to Completed Page
    slug: "balaji-vishwa",
    title: "Balaji Vishwa",
    status: "Sold Out",
    price: "Sold Out",
    shortPrice: "Sold Out",
    location: "Uruli Kanchan",
    description: "Our flagship project in Uruli Kanchan with top-class amenities.",
    videoSrc: "https://www.youtube.com/embed/SDohSrexjHw", 
    posterSrc: "/assets/images/balaji-1.jpg", // Make sure you have this image or use a placeholder
    features: [
      { icon: <FaTrain/>, title: "Station", desc: "5min Away" },
      { icon: <FaRoad/>, title: "Highway", desc: "Touch" },
    ],
    mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.308197990253!2d73.9642318!3d18.4744714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e921847ac037%3A0x74fb6cbf0346ee80!2sBalaji%20Vishva%20Phursungi!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin&markers=color:red%7C18.4744714,73.9664236",
    amenities: ["Grand Entrance", "Garden"],
    galleryImages: ["/assets/images/balaji-1.jpg", "/assets/images/balaji-2.jpg", "/assets/images/balaji-3.jpg"]
  },
  {
    id: "narayan-park",
    type: "completed", // <--- Moves to Completed Page
    slug: "narayan-park",
    title: "Narayan Park",
    status: "Sold Out",
    price: "Sold Out",
    shortPrice: "Sold Out",
    location: "Canal Road",
    description: "Beautiful canal-touch plots. 100% Sold out and handed over.",
    videoSrc: "https://www.youtube.com/embed/ppoDOlqndLc",
    posterSrc: "/assets/images/canal.jpg", // Make sure you have this image
    features: [
      { icon: <FaWater/>, title: "View", desc: "Canal Touch" },
    ],
    mapSrc:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d562.5494014971512!2d74.00085291462982!3d18.467064434457907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1750515106966!5m2!1sen!2sin",
    amenities: ["Demarcation", "Name Plates"],
    galleryImages: ["/assets/images/canal.jpg", "/assets/images/canal2.jpg", "/assets/images/canal3.png"]
  },

    {
    id: "vasant-park-2",
    type: "completed",  // <--- This moves it to the Completed Page
    slug: "vasant-park",
    title: "Vasant Park",
    status: "Sold Out",
    price: "Sold Out",
    shortPrice: "Sold Out",
    location: "Loni Kalbhor",
    description: "Premium residential plots in Loni Kalbhor. Fully developed society with families residing.",
    videoSrc: "https://www.youtube.com/embed/s8SSlnmqSdo",
    posterSrc: "/assets/images/joynest-f.JPG",
    features: [
      { icon: <FaRulerCombined/>, title: "Size", desc: "1000 sq.ft." },
      { icon: <FaMapMarkerAlt/>, title: "Location", desc: "Loni Kalbhor" },
    ],
    mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.9325383433593!2d73.99574169002231!3d18.468248259407837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1a201ab57bd%3A0xd1096fac2d8f2993!2sHaveli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1750518716055!5m2!1sen!2sin",
    amenities: ["Water Connection", "Electricity", "Drainage Line"],
    galleryImages: ["/assets/images/joynest-f.jpg", "/assets/images/joynest.png"]
  },
  
   
  // --- ONGOING PROJECTS (Add your NEW inventory here for the "Available" page) ---
  // If you have nothing selling right now, you can leave this empty or add one "Coming Soon" project.
];