import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbHeader from '../components/BreadcrumbHeader';
import NewsletterSection from '../components/NewsletterSection';
import img4 from '../assets/images/4.webp';
import img5 from '../assets/images/5.webp';
import img8 from '../assets/images/8.webp';
import img10 from '../assets/images/10.webp';
import img11 from '../assets/images/11.webp';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } };

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (2000 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.ceil(start));
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return (
    <div className="text-center py-12 relative">
      <div className="font-poppins font-black text-[80px] text-primary-lime leading-none mb-2">{count}</div>
      <div className="font-poppins font-bold text-xs uppercase tracking-[0.15em] text-gray-500">{label}</div>
    </div>
  );
};

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <BreadcrumbHeader title="About Me" current="About" />

      {/* ─── HERO IMAGE COLLAGE ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <img
              src={img10}
              alt="About Hero 1"
              loading="lazy"
              className="w-full h-[400px] object-cover"
            />
            <img
              src={img11}
              alt="About Hero 2"
              loading="lazy"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="relative group overflow-hidden cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80"
              alt="Video Thumbnail"
              loading="lazy"
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-primary-lime flex items-center justify-center cursor-pointer"
              >
                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE SECTION ─── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row gap-16">
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h3 variants={fadeUp} className="font-poppins font-black text-[36px] uppercase text-primary-dark mb-2 heading-dots">
              My Experience
            </motion.h3>

            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8">
              Cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Tellus id interdum velit laoreet id donec ultrices tincidunt. Tincidunt augue interdum velit euismod.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/schedule" className="btn-lime text-sm">Book a Session</Link>
            </motion.div>
          </motion.div>

          <div className="w-full md:w-1/2">
            <motion.ul
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={stagger}
              className="space-y-5"
            >
              {[
                { skill: 'Cardio Training', pct: '90%', w: 'w-[90%]' },
                { skill: 'Strength Training', pct: '85%', w: 'w-[85%]' },
                { skill: 'Nutrition Coaching', pct: '80%', w: 'w-[80%]' },
                { skill: 'Flexibility & Yoga', pct: '75%', w: 'w-[75%]' },
              ].map((item, idx) => (
                <motion.li key={idx} variants={fadeUp}>
                  <div className="flex justify-between mb-2">
                    <span className="font-poppins font-bold text-sm uppercase tracking-wide text-primary-dark">{item.skill}</span>
                    <span className="font-poppins font-bold text-sm text-primary-lime">{item.pct}</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 w-full">
                    <motion.div
                      className={`h-full bg-primary-lime ${item.w}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: item.w.replace('w-[', '').replace(']', '') }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ─── COUNTER STATS ─── */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {[
              { end: 3, label: 'Certificate\nTrainer' },
              { end: 8, label: 'Years\nExperience' },
              { end: 47, label: 'Loyal\nClients' },
              { end: 150, label: 'Programs\nCompleted' },
            ].map((stat, i) => (
              <Counter key={i} end={stat.end} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── STORY / TIMELINE ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <img
              src={img8}
              alt="Hana Evans Story"
              loading="lazy"
              className="h-[600px] w-auto -scale-x-100 rounded-2xl shadow-2xl shadow-lime-500/40"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <motion.h3
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
              className="font-poppins font-black text-[36px] uppercase mb-2 text-primary-dark heading-dots"
            >
              My Story
            </motion.h3>

            <div className="relative pl-8 border-l-[3px] border-primary-lime space-y-10">
              {[
                { year: '2011', title: 'Training', desc: 'Consectetur purus ut faucibus pulvinar elementum integer enim neque. Egestas tellus rutrum tellus pellentesque eu.' },
                { year: '2014', title: 'Certification', desc: 'Viverra orci sagittis eu volutpat odio facilisis mauris. Enim nec dui nunc mattis enim ut.' },
                { year: '2017', title: 'Personal Studio', desc: 'Amet volutpat consequat mauris nunc congue nisi vitae. Turpis egestas pretium aenean pharetra magna.' },
                { year: '2022', title: 'Online Coaching', desc: 'Viverra adipiscing at in tellus integer feugiat scelerisque varius. Sit amet nisl purus in mollis.' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                  variants={fadeUp}
                  className="relative"
                >
                  <div className="absolute -left-[41px] w-4 h-4 bg-primary-lime border-2 border-white" />
                  <span className="font-poppins font-black text-xs text-primary-lime uppercase tracking-widest mb-1 block">{item.year}</span>
                  <h4 className="font-poppins font-bold text-lg text-primary-dark mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="bg-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-0">
          <motion.div
            className="w-full md:w-1/2 py-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h3 variants={fadeUp} className="font-poppins font-black text-[38px] uppercase text-primary-dark mb-2 heading-dots leading-tight">
              Start Changing<br />Your Life
            </motion.h3>

            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-10">
              Aliquam ultrices sagittis orci a scelerisque purus. Tellus orci ac auctor augue mauris augue neque gravida in. Elementum eu facilisis sed odio pellentesque diam volutpat commodo.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/pricing-table" className="btn-lime text-sm">Join Now</Link>
            </motion.div>
          </motion.div>
          <div className="w-full md:w-1/2 flex justify-end">
            <img
              src={img5}
              alt="Start changing your life"
              loading="lazy"
              className="max-h-[520px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ─── DIPLOMAS ─── */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 pointer-events-none dot-grid-gray opacity-10" />

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-[1fr_250px_1fr] gap-8 md:gap-12 items-start"
          >
            {/* Column 1 */}
            <div className="flex flex-col gap-16 pt-0 md:pt-20">
              <motion.div variants={fadeUp}>
                <h2 className="font-poppins font-black text-[32px] md:text-[38px] uppercase text-primary-dark mb-4 leading-[1.1]">
                  Diplomas and<br />
                  <span className="heading-dots">Certificates</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed max-w-[90%]">
                  Ultricies mi quis hendrerit dolor magna eget est. Nisl nisi scelerisque eu ultrices vitae. Fermentum iaculis eu non diam phasellus.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="relative z-10 bg-white p-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)] mt-8 md:mt-16">
                <img src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=600&q=80" alt="Certificate 3" loading="lazy" className="w-full h-auto object-cover border border-gray-50" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 dot-grid-gray opacity-40 -z-10" />
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col pt-0 md:pt-4">
              <motion.div variants={fadeUp} className="relative z-10 bg-white p-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                <img src={img4} alt="Certificate 1" loading="lazy" className="w-[250px] h-auto object-cover border border-gray-50" />
              </motion.div>

              <motion.div variants={fadeUp} className="relative z-10 bg-white p-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)] mt-4 md:mt-8">
                <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80" alt="Certificate 4" loading="lazy" className="w-[250px] h-auto object-cover border border-gray-50" />
              </motion.div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-16 pt-0 md:pt-16">
              <motion.div variants={fadeUp} className="relative z-10 bg-white p-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80" alt="Certificate 2" loading="lazy" className="w-full h-auto object-cover border border-gray-50" />
                <div className="absolute top-1/2 -right-12 w-48 h-48 dot-grid-gray opacity-40 -z-10" />
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 md:mt-12">
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. In metus vulputate eu scelerisque. Velit euismod in pellentesque massa.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <NewsletterSection />
    </motion.div>
  );
}


