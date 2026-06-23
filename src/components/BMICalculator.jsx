import { useState } from 'react';
import { motion } from 'framer-motion';
import img5 from '../assets/images/5.webp';

export default function BMICalculator({ variant = 'dark' }) {
  const [gender, setGender] = useState('female');
  const [height, setHeight] = useState(165);
  const [weight, setWeight] = useState(60);
  const [bmi, setBmi] = useState(null);

  const isDark = variant === 'dark';

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInM = height / 100;
      const calculatedBmi = (weight / (heightInM * heightInM)).toFixed(1);
      setBmi(calculatedBmi);
    }
  };

  return (
    <section className="relative w-full py-12">
      {/* Background Image overlay for dark variant */}
      {isDark && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1400&q=80)' }}
          />
          <div className="absolute inset-0 bg-[#1C1C2E]/75 z-0" />
        </>
      )}

      <div className={`max-w-7xl mx-auto px-4 lg:px-8 relative z-10 flex flex-col md:flex-row gap-12 items-center ${isDark ? 'text-white' : 'text-primary-dark'}`}>

        {/* Left Side: Form */}
        <div className="w-full md:w-1/2">
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-bold text-3xl mb-4"
          >
            Calculate Your BMI
          </motion.h3>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`mb-8 ${isDark ? 'text-gray-300' : 'text-muted'}`}
          >
            Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Morbi tristique senectus et netus et.
          </motion.p>

          <form onSubmit={calculateBMI} className="space-y-6">
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setGender('female')}
                className={`flex-1 py-3 rounded-full font-inter font-medium text-sm transition-colors ${gender === 'female' ? 'bg-primary-pink text-white' : (isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-primary-dark')}`}
              >
                Female
              </button>
              <button
                type="button"
                onClick={() => setGender('male')}
                className={`flex-1 py-3 rounded-full font-inter font-medium text-sm transition-colors ${gender === 'male' ? 'bg-primary-pink text-white' : (isDark ? 'bg-white/10 text-white' : 'bg-gray-100 text-primary-dark')}`}
              >
                Male
              </button>
            </div>

            <div className="flex gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className={`w-full h-12 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-pink transition-colors ${isDark ? 'bg-white/10 text-white placeholder-gray-400' : 'bg-gray-50 border border-gray-200 text-primary-dark'}`}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className={`w-full h-12 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-pink transition-colors ${isDark ? 'bg-white/10 text-white placeholder-gray-400' : 'bg-gray-50 border border-gray-200 text-primary-dark'}`}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-pink text-white h-14 rounded-full font-poppins font-semibold hover:bg-[#d44c77] transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Calculate
            </button>
          </form>

          {bmi && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 rounded-xl bg-primary-pink/20 border border-primary-pink/30 text-center"
            >
              <span className="block text-sm font-medium mb-1">Your BMI is</span>
              <span className="font-poppins font-bold text-3xl text-primary-pink">{bmi}</span>
            </motion.div>
          )}

          <div className="flex items-center gap-3 mt-8">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-white/10' : 'bg-gray-100'}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
            </div>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-muted'}`}>
              Fill out the form to calculate calories for weight loss
            </p>
          </div>
        </div>

        {/* Right Side: Image / Quote */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-end">
          {isDark ? (
            <img
              src={img5}
              alt="Trainer"
              loading="lazy"
              className="w-full max-w-[450px] h-auto object-contain -mb-12"
            />
          ) : (
            <div className="text-center">
              <p className="font-poppins font-bold text-2xl md:text-3xl italic mb-6">
                "If you train hard, you'll not only be hard, you'll be hard to beat."
              </p>
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80"
                alt="Speaker"
                loading="lazy"
                className="w-16 h-16 rounded-full mx-auto object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
