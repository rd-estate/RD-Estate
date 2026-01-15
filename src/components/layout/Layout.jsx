import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WhatsAppFloat from '../ui/WhatsAppFloat';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800 antialiased">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;