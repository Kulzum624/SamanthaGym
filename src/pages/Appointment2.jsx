import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import img12 from '../assets/images/12.webp';

export default function Appointment2() {
  const [formData, setFormData] = useState({
    program: '',
    schedules: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-[120px]">
      <section className="min-h-[calc(100vh-128px)] flex flex-col md:flex-row border-t border-gray-100">

        {/* Left Image & Quote (45%) */}
        <div className="w-full md:w-[45%] bg-light flex flex-col items-center justify-center p-8 md:p-12 relative min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            className="relative w-full max-w-[400px] mb-8"
          >
            <img
              src={img12}
              alt="Trainer"
              loading="lazy"
              className="w-full h-auto rounded-2xl shadow-xl shadow-primary-lime/20 object-cover"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="font-poppins font-bold italic text-xl md:text-[22px] text-primary-dark text-center max-w-sm"
          >
            "Nobody who ever gave his best regretted it."
          </motion.p>
        </div>

        {/* Right Form (55%) */}
        <div className="w-full md:w-[55%] bg-white p-8 md:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto w-full"
          >
            <h2 className="font-poppins font-bold text-3xl md:text-[36px] text-primary-dark mb-6 leading-tight">
              Start changing your life now
            </h2>
            <p className="text-muted leading-relaxed mb-10">
              Aliquam ultrices sagittis orci a scelerisque purus. Tellus orci ac auctor augue mauris augue neque gravida in. Elementum eu facilisis sed odio pellentesque.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex flex-col">
                <label className="text-sm font-semibold text-primary-dark mb-2">Program Type</label>
                <select
                  className="w-full border-b border-gray-200 py-3 text-muted focus:outline-none focus:border-primary-lime bg-transparent transition-colors appearance-none"
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  required
                >
                  <option value="" disabled>Select a program</option>
                  <option value="basic">Basic Exercises</option>
                  <option value="advanced">Advanced Exercises</option>
                  <option value="bodybuilding">Bodybuilding Localized</option>
                  <option value="cardio">Cardio Workout</option>
                  <option value="stretching">Stretching</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    id="schedules"
                    className="w-5 h-5 border-2 border-gray-300 rounded text-primary-lime focus:ring-primary-lime cursor-pointer appearance-none checked:bg-primary-lime checked:border-primary-lime transition-colors"
                    checked={formData.schedules}
                    onChange={(e) => setFormData({ ...formData, schedules: e.target.checked })}
                  />
                  {formData.schedules && (
                    <svg className="w-3.5 h-3.5 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  )}
                </div>
                <label htmlFor="schedules" className="text-sm text-primary-dark cursor-pointer font-medium">
                  Workout Schedules
                </label>
              </div>

              <div>
                <Link to="/schedule" className="text-primary-lime font-semibold text-sm hover:underline flex items-center gap-2 mb-8">
                  View Training Schedule <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>

                <button
                  type="submit"
                  className="w-full bg-primary-lime text-black h-14 font-poppins font-bold uppercase tracking-widest text-[15px] hover:brightness-110 transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Join Now
                </button>
              </div>
            </form>
          </motion.div>
        </div>

      </section>
    </motion.div>
  );
}





