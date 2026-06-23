import { useState } from 'react';
import { motion } from 'framer-motion';
import img5 from '../assets/images/5.webp';

export default function BMICalculator({ variant = 'dark' }) {
  const [gender, setGender] = useState('female');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInM = height / 100;
      const calculatedBmi = (weight / (heightInM * heightInM)).toFixed(1);
      setBmi(calculatedBmi);
    }
  };

  const getBmiLabel = () => {
    if (!bmi) return '';
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row min-h-[560px]">
        {/* Left: Lime photo block */}
        <div className="w-full md:w-[45%] bg-primary-lime relative overflow-hidden flex items-end justify-center min-h-[320px]">
          {/* Watermark text */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-poppins font-black text-[80px] md:text-[100px] text-white/20 uppercase leading-none select-none tracking-tighter">
            SLIM<br />MIN
          </span>
          <motion.img
            src={img5}
            alt="Trainer"
            loading="lazy"
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full h-full object-cover object-[50%_20%] max-h-[560px]"
          />
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-[55%] bg-white px-8 md:px-16 py-14 flex flex-col justify-center">
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-black text-3xl md:text-4xl text-primary-dark uppercase mb-2 heading-dots"
          >
            Calculate Your BMI
          </motion.h3>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted mb-8"
          >
            Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Morbi tristique senectus et netus et.
          </motion.p>

          <form onSubmit={calculateBMI} className="space-y-4">
            {/* Gender Toggle */}
            <div className="flex gap-0 mb-2">
              <button
                type="button"
                onClick={() => setGender('female')}
                className={`flex-1 py-3 font-poppins font-bold uppercase text-sm tracking-widest transition-colors border ${gender === 'female' ? 'bg-primary-lime text-black border-primary-lime' : 'bg-white text-primary-dark border-gray-300 hover:border-primary-lime'}`}
              >
                Female
              </button>
              <button
                type="button"
                onClick={() => setGender('male')}
                className={`flex-1 py-3 font-poppins font-bold uppercase text-sm tracking-widest transition-colors border-t border-b border-r ${gender === 'male' ? 'bg-primary-lime text-black border-primary-lime' : 'bg-white text-primary-dark border-gray-300 hover:border-primary-lime'}`}
              >
                Male
              </button>
            </div>

            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full h-14 px-5 border border-gray-200 text-primary-dark placeholder-gray-400 focus:outline-none focus:border-primary-lime transition-colors font-inter"
            />
            <input
              type="number"
              placeholder="Weight / kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full h-14 px-5 border border-gray-200 text-primary-dark placeholder-gray-400 focus:outline-none focus:border-primary-lime transition-colors font-inter"
              required
            />
            <input
              type="number"
              placeholder="Height / cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full h-14 px-5 border border-gray-200 text-primary-dark placeholder-gray-400 focus:outline-none focus:border-primary-lime transition-colors font-inter"
              required
            />

            <div className="flex gap-4 items-center pt-2">
              <button
                type="submit"
                className="btn-lime text-sm px-10 py-4"
              >
                Calculate
              </button>
              <div className="flex flex-col items-center text-center">
                <svg className="w-8 h-8 text-gray-300 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                <p className="text-muted text-xs max-w-[120px]">Fill out the form to calculate calories for weight loss</p>
              </div>
            </div>
          </form>

          {bmi && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-5 border-l-4 border-primary-lime bg-gray-50"
            >
              <span className="block text-sm font-poppins uppercase tracking-widest text-muted mb-1">Your BMI</span>
              <span className="font-poppins font-black text-4xl text-primary-lime">{bmi}</span>
              <span className="ml-3 font-poppins font-bold text-primary-dark">{getBmiLabel()}</span>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}





