import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img10 from "../assets/images/10.webp";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Suspendisse in est ante in nibh mauris cursus mattis molestie. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Feugiat in fermentum posuere urna nec tincidunt praesent semper.",
      name: "First Name Last Name",
      label: "4 Weeks Workouts",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
    },
    {
      quote: "Suspendisse in est ante in nibh mauris cursus mattis molestie. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Feugiat in fermentum posuere urna nec tincidunt praesent semper.",
      name: "Second Name",
      label: "8 Weeks Workouts",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
    },
    {
      quote: "Suspendisse in est ante in nibh mauris cursus mattis molestie. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Feugiat in fermentum posuere urna nec tincidunt praesent semper.",
      name: "Third Name",
      label: "12 Weeks Workouts",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-poppins font-bold text-3xl md:text-4xl text-center text-primary-dark mb-16"
        >
          Real people. Real Results
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto"
            >
              {/* Left Images */}
              <div className="flex gap-4 w-full md:w-1/2 justify-center">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&q=80"
                  alt="Before"
                  loading="lazy"
                  className="w-1/2 h-auto rounded-2xl object-cover shadow-lg"
                />
                <img
                  src={img10}
                  alt="After"
                  loading="lazy"
                  className="w-1/2 h-auto rounded-2xl object-cover shadow-lg"
                />
              </div>

              {/* Right Content */}
              <div className="w-full md:w-1/2">
                <p className="text-muted text-lg italic leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    loading="lazy"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-poppins font-bold text-primary-dark text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <span className="text-primary-lime font-inter text-sm font-medium">
                      {testimonials[currentIndex].label}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary-dark hover:bg-primary-lime hover:text-white hover:border-primary-lime transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentIndex === idx ? 'bg-primary-lime' : 'bg-gray-200'}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-primary-dark hover:bg-primary-lime hover:text-white hover:border-primary-lime transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}





