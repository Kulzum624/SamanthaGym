import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BreadcrumbHeader from '../components/BreadcrumbHeader';
import NewsletterSection from '../components/NewsletterSection';
import img4 from '../assets/images/4.webp';

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className="font-poppins font-extrabold text-[72px] text-primary-pink leading-none mb-2">{count}</div>
      <div className="text-muted text-sm uppercase tracking-wider">{label}</div>
    </div>
  );
};

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-[128px]">
      <BreadcrumbHeader
        title="About my"
        current="About"
      />

      {/* About Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <img
              src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=700&q=80"
              alt="About 1"
              loading="lazy"
              className="w-full md:w-[48%] h-[400px] object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80"
              alt="About 2"
              loading="lazy"
              className="w-full md:w-[48%] h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer mb-12">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
              alt="Video Thumbnail"
              loading="lazy"
              className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors group-hover:bg-black/10">
              <a href="https://www.youtube.com/watch?v=Vr3h5X9kmUo" target="_blank" rel="noopener noreferrer" className="w-24 h-24 bg-primary-pink rounded-full flex items-center justify-center pl-2 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </a>
            </div>
          </div>

          <div className="text-center">
            <Link to="/portfolio" className="inline-block bg-primary-pink text-white rounded-full px-10 py-4 font-poppins font-semibold text-[15px] hover:bg-[#d44c77] hover:scale-105 transition-all shadow-lg">
              Workout with me
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2">
            <motion.h3
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="font-poppins font-bold text-[32px] text-primary-dark mb-6"
            >
              Over 8 Year Of Experience
            </motion.h3>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-muted leading-relaxed mb-4">
              Pellentesque habitant morbi tristique senectus et netus. Sed libero enim sed faucibus turpis in eu. Arcu bibendum at varius vel pharetra vel turpis. Et magnis dis parturient montes nascetur ridiculus mus.
            </motion.p>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-muted leading-relaxed mb-8">
              Aliquam etiam erat velit scelerisque in dictum non consectetur a. Sagittis id consectetur purus ut faucibus pulvinar elementum integer.
            </motion.p>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Link to="/portfolio" className="text-primary-pink font-semibold hover:underline flex items-center gap-2">
                join us <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
            <motion.ul
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="space-y-6"
            >
              {[
                'Sed enim ut sem viverra;',
                'Erat nam at lectus urna duis convallis convallis;',
                'Morbi tristique senectus et netus et;',
                'Nisl purus in mollis nunc.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary-pink/10 rounded-full flex items-center justify-center shrink-0 mt-1 text-primary-pink">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-primary-dark leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12"
          >
            <Counter end={8} label="Year of Health Coaching Experience" />
            <Counter end={47} label="Happy Customer with Reference" />
            <Counter end={12} label="Contest and Confer Attended" />
            <Counter end={90} label="Day of a new Superfast Program" />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=80"
              alt="Story"
              loading="lazy"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <motion.h3
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="font-poppins font-bold text-3xl mb-12 text-primary-dark"
            >
              My story
            </motion.h3>

            <div className="relative pl-10 border-l-2 border-primary-pink/30 space-y-12">
              {[
                { year: '2011', title: 'Training', desc: 'Consectetur purus ut faucibus pulvinar elementum integer enim neque. Egestas tellus rutrum tellus pellentesque eu.' },
                { year: '2012–2014', title: 'Job', desc: 'Tristique magna sit amet purus gravida. Nunc id cursus metus aliquam.', bullets: ['Aliquam etiam erat velit', 'Sagittis id consectetur purus ut', 'Faucibus pulvinar elementum integer', 'Enim neque volutpat ac'] },
                { year: '2015–2016', title: 'Professional development', desc: 'Turpis in eu mi bibendum neque egestas. Pellentesque nec nam aliquam sem et tortor.', bullets: ['Pretium viverra suspendisse', 'Potenti nullam ac tortor vitae purus', 'Faucibus ornare suspendisse sed nisi', 'Lacus sed viverra tellus in hac'] },
                { year: '2015–2016', title: 'Professional development', desc: 'Odio ut sem nulla pharetra diam sit amet. Nisl condimentum id venenatis a condimentum. Vitae sapien pellentesque habitant morbi tristique senectus et.' }
              ].map((item, idx) => (
                <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="relative">
                  <div className="absolute -left-[54px] top-0 w-8 h-8 rounded-full bg-white border-4 border-primary-pink flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary-pink" />
                  </div>
                  <h4 className="font-poppins font-bold text-xl text-primary-pink mb-1">{item.year} {item.title}</h4>
                  <p className="text-muted leading-relaxed mb-4">{item.desc}</p>
                  {item.bullets && (
                    <ul className="space-y-2 text-muted">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2 before:content-['-'] before:text-primary-pink">{b}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Start Changing Your Life CTA */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.h3
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="font-poppins font-bold text-[36px] text-primary-dark mb-6 leading-tight"
            >
              Start changing your life now
            </motion.h3>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-muted leading-relaxed mb-8">
              Aliquam ultrices sagittis orci a scelerisque purus. Tellus orci ac auctor augue mauris augue neque gravida in. Elementum eu facilisis sed odio pellentesque diam volutpat commodo.
            </motion.p>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Link to="/pricing-table" className="inline-block bg-primary-pink text-white rounded-full px-10 py-4 font-poppins font-semibold hover:bg-[#d44c77] hover:scale-105 transition-all shadow-lg">
                Join Now
              </Link>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=500&q=80" alt="Trainer" loading="lazy" className="max-h-[500px] object-contain" />
          </div>
        </div>
      </section>

      {/* Diplomas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <motion.h3
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="font-poppins font-bold text-3xl text-primary-dark mb-4"
          >
            Diplomas and certificates
          </motion.h3>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-muted mb-16 max-w-2xl mx-auto">
            Turpis egestas maecenas pharetra convallis posuere morbi leo. Ornare massa eget egestas purus viverra accumsan.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              img4,
              'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&q=80',
              'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&q=80',
              'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=300&q=80'
            ].map((img, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="border-2 border-gray-100 p-2 rounded-xl hover:scale-105 transition-transform duration-300">
                <img src={img} alt="Certificate" loading="lazy" className="w-full h-auto object-cover rounded-lg" />
              </motion.div>
            ))}
          </div>

          <p className="text-muted italic text-sm">
            *Sed augue lacus viverra vitae congue eu consequat ac felis.
          </p>
        </div>
      </section>

      <NewsletterSection />
    </motion.div>
  );
}
