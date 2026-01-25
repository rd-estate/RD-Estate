import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import PastProjects from './pages/PastProjects'
// Components
import Layout from './components/layout/Layout';

import AvailablePlots from './pages/AvailablePlots';

// Pages
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            {/* The Main Homepage */}
            <Route path="/" element={<Home />} />
            
            <Route path="/plots" element={<AvailablePlots />} />

            <Route path="/completed-projects" element={<PastProjects />} />

            {/* Dynamic Route for Single Projects (e.g., /projects/vasant-park) */}
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            
            <Route path="/available-plots" element={<AvailablePlots />} />
            
            {/* 404 Catch-all Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;