import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavItem = ({ item, isActive, onClose }) => {
  const [open, setOpen] = useState(false);
  const active = isActive(item.path) || (item.dropdown && item.dropdown.some(d => isActive(d.path)));

  return (
    <div
      className="relative group h-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={item.path}
        className={`font-poppins font-semibold text-[14px] flex items-center h-full px-4 py-6 transition-colors duration-200 uppercase tracking-wide ${active ? 'text-primary-lime' : 'text-primary-dark hover:text-primary-lime'}`}
      >
        {item.name}
        {item.dropdown && (
          <svg className="w-3 h-3 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </Link>
      {active && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary-lime" />}

      {item.dropdown && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.18 }}
              className="absolute left-0 top-full min-w-[220px] bg-white shadow-xl border-t-[3px] border-primary-lime z-50"
            >
              {item.dropdown.map((dropItem, idx) => (
                <Link
                  key={idx}
                  to={dropItem.path}
                  onClick={onClose}
                  className={`block px-5 py-3 text-sm font-poppins font-medium uppercase tracking-wide hover:bg-primary-lime hover:text-black transition-colors ${isActive(dropItem.path) ? 'text-primary-lime' : 'text-primary-dark'}`}
                >
                  {dropItem.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDir, setScrollDir] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
      
      if (currentScrollY > lastScrollY && currentScrollY > 48) {
        setScrollDir('down');
      } else {
        setScrollDir('up');
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Schedule',
      path: '/schedule',
      dropdown: [
        { name: 'Schedule', path: '/schedule' },
        { name: 'Online Schedule', path: '/online-schedule' },
        { name: 'Appointment 1', path: '/appointment-1' },
        { name: 'Appointment 2', path: '/appointment-2' },
      ]
    },
    {
      name: 'Pages',
      path: '#',
      dropdown: [
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Portfolio Details', path: '/portfolio-details' },
        { name: 'Pricing Table', path: '/pricing-table' },
      ]
    },
    {
      name: 'Blog',
      path: '#',
      dropdown: [
        { name: 'Blog Style 1', path: '/blog-style-1' },
        { name: 'Blog Style 2', path: '/blog-style-2' },
        { name: 'Blog Details', path: '/blog-details' },
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'} ${scrollDir === 'down' ? 'top-0' : 'top-12'}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-poppins font-black text-[22px] tracking-tight text-primary-dark uppercase relative">
            SAMANTHA
            <span className="absolute bottom-0 left-0 w-full h-[4px] bg-primary-lime" />
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center h-full space-x-0">
          {navLinks.map((item, idx) => (
            <NavItem key={idx} item={item} isActive={isActive} onClose={() => setIsMobileMenuOpen(false)} />
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden p-2 text-primary-dark hover:text-primary-lime transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="4" y1="18" x2="20" y2="18" strokeWidth="2.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t-[3px] border-primary-lime"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((item, idx) => (
                <div key={idx}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 font-poppins font-bold uppercase tracking-wide text-sm ${isActive(item.path) ? 'text-primary-lime' : 'text-primary-dark hover:text-primary-lime'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-8 space-y-1">
                      {item.dropdown.map((drop, dIdx) => (
                        <Link
                          key={dIdx}
                          to={drop.path}
                          className={`block px-4 py-2 text-sm font-poppins uppercase tracking-wide ${isActive(drop.path) ? 'text-primary-lime' : 'text-muted hover:text-primary-lime'}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}





