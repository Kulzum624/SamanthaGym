import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ item, isActive }) => {
  const active = isActive(item.path) || (item.dropdown && item.dropdown.some(d => isActive(d.path)));

  return (
    <div className="relative group h-full">
      <Link
        to={item.path}
        className={`font-poppins font-medium text-[15px] flex items-center h-full px-3 py-6 transition-colors duration-200 ${active ? 'text-primary-pink' : 'text-primary-dark hover:text-primary-pink'}`}
      >
        {item.name}
        {item.dropdown && (
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        )}
      </Link>
      {active && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-pink"></div>}

      {item.dropdown && (
        <div className="absolute left-0 top-full hidden group-hover:block min-w-[200px] bg-white shadow-lg py-2 rounded-b-lg border-t-2 border-primary-pink">
          {item.dropdown.map((dropItem, idx) => (
            <Link
              key={idx}
              to={dropItem.path}
              className={`block px-4 py-2 text-sm font-inter hover:text-primary-pink hover:bg-light ${isActive(dropItem.path) ? 'text-primary-pink' : 'text-primary-dark'}`}
            >
              {dropItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 48) {
        setAnnouncementVisible(false);
      } else {
        setAnnouncementVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
        { name: '404', path: '/404' },
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
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]' : 'bg-white'} ${announcementVisible ? 'top-12' : 'top-0'}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#1C1C2E" />
            <circle cx="16" cy="16" r="6" fill="#E75F8A" />
            <path d="M16 4C9.37258 4 4 9.37258 4 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-poppins font-bold text-2xl text-primary-dark">Samantha</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center h-full space-x-2">
          {navLinks.map((item, idx) => (
            <NavItem key={idx} item={item} isActive={isActive} />
          ))}
        </div>

        {/* Desktop Contact */}
        <div className="hidden xl:flex flex-col text-right text-sm">
          <a href="tel:+1234567890" className="text-primary-dark font-medium hover:text-primary-pink">+1 (234) 567 890</a>
          <a href="mailto:example@gmail.com" className="text-muted hover:text-primary-pink">example@gmail.com</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-primary-pink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((item, idx) => (
              <div key={idx}>
                <Link
                  to={item.path}
                  className={`block px-4 py-2 font-poppins font-medium rounded-lg ${isActive(item.path) ? 'text-primary-pink bg-light' : 'text-primary-dark'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-8 mt-1 space-y-1">
                    {item.dropdown.map((drop, dIdx) => (
                      <Link
                        key={dIdx}
                        to={drop.path}
                        className={`block px-4 py-2 text-sm rounded-lg ${isActive(drop.path) ? 'text-primary-pink bg-light' : 'text-muted'}`}
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
        </div>
      )}
    </nav>
  );
}
