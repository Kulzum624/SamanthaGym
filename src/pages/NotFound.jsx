import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-[128px]">
      <section className="min-h-[calc(100vh-128px)] flex flex-col md:flex-row bg-white items-center">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="font-poppins font-extrabold text-[100px] md:text-[120px] text-primary-pink leading-none mb-4 shadow-sm"
          >
            404
          </motion.div>
          <h2 className="font-poppins font-bold text-[36px] text-primary-dark mb-6">
            Page Not Found
          </h2>
          <p className="text-muted text-lg mb-10 max-w-md">
            The page you are looking for does not exist; it may have been moved or removed altogether.
          </p>
          <Link to="/" className="inline-block bg-primary-pink text-white px-10 py-4 rounded-full font-poppins font-semibold hover:bg-[#d44c77] hover:scale-105 transition-all shadow-lg">
            Back to Home
          </Link>
        </div>

        {/* Right Illustration */}
        <div className="w-full md:w-1/2 p-8 flex justify-center items-center">
          <img 
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80" 
            alt="404 Illustration" 
            className="max-w-md w-full rounded-3xl object-cover grayscale-[30%] opacity-90 shadow-2xl"
          />
        </div>

      </section>
    </motion.div>
  );
}
