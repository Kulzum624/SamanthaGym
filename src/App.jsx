import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Global Components
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Schedule from './pages/Schedule';
import OnlineSchedule from './pages/OnlineSchedule';
import Appointment1 from './pages/Appointment1';
import Appointment2 from './pages/Appointment2';
import Portfolio from './pages/Portfolio';
import PortfolioDetails from './pages/PortfolioDetails';
import PricingTable from './pages/PricingTable';
import BlogStyle1 from './pages/BlogStyle1';
import BlogStyle2 from './pages/BlogStyle2';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/online-schedule" element={<OnlineSchedule />} />
        <Route path="/appointment-1" element={<Appointment1 />} />
        <Route path="/appointment-2" element={<Appointment2 />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/pricing-table" element={<PricingTable />} />
        <Route path="/blog-style-1" element={<BlogStyle1 />} />
        <Route path="/blog-style-2" element={<BlogStyle2 />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen relative pb-16 sm:pb-0">
          <AnnouncementBar />
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
          <ScrollToTopButton />
          
          {/* Mobile Floating CTA */}
          <div className="fixed bottom-0 left-0 w-full z-50 sm:hidden bg-white border-t border-gray-200 p-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
            <Link to="/pricing-table" className="flex items-center justify-center w-full bg-primary-lime text-black font-poppins font-bold uppercase text-[15px] py-3.5 tracking-wider hover:brightness-110 transition-all gap-2">
              START TODAY
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;





