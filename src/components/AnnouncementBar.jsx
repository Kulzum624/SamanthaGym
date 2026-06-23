import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 48) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -48 }}
          animate={{ y: 0 }}
          exit={{ y: -48 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-12 bg-primary-dark z-50 flex items-center justify-between px-4 lg:px-12"
        >
          <div className="flex items-center text-sm">
            <span className="text-white font-bold mr-2 hidden sm:inline">Let's be Together</span>
            <span className="text-gray-400 mr-2 hidden md:inline">Don't miss the next workout:</span>
            <span className="text-primary-lime font-bold mr-1">22 June</span>
            <span className="text-primary-lime font-bold">6:30pm</span>
          </div>
          <div className="hidden lg:flex items-center text-xs text-gray-500">
            <span className="mr-2">Huntington Central Park, 18381 Goldenwest St, Huntington Beach</span>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-lime transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}





