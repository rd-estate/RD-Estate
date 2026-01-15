import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";

import logo from "/src/assets/images/rd-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#about" },
    { name: "Available Plots", path: "/plots" },
   { name: 'Completed Projects', path: '/completed-projects' },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "h-20 bg-white/95 backdrop-blur shadow-md"
          : "h-24 bg-white"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        
        {/* ✅ LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="RD Estate Logo"
            className={`transition-all duration-300 ${
              scrolled ? "h-16" : "h-16"
            } w-auto object-contain`}
          />
          {/* Optional brand text */}
          {/* <span className="text-xl font-bold text-primary">Kshitij Realty</span> */}
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="font-semibold text-secondary hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-2xl text-secondary cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col justify-center items-center gap-8 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-xl font-semibold text-secondary hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Floating Call Button (Mobile) */}
      <a
        href="tel:+917758003828"
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg md:hidden flex items-center justify-center animate-bounce"
      >
        <FaPhone />
      </a>
    </header>
  );
};

export default Navbar;
