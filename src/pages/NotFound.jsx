import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-light px-4 text-center">
      <SEO title="Page Not Found" noindex={true} />
      <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
      <h2 className="text-3xl font-bold text-secondary -mt-12 mb-4">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mb-8">The plot or page you are looking for might have been sold out or moved.</p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default NotFound;