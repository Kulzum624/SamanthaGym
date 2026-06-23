import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BMICalculator from '../components/BMICalculator';
import TestimonialSlider from '../components/TestimonialSlider';
import img1 from '../assets/images/1.webp';
import img2 from '../assets/images/2.webp';
import img3 from '../assets/images/3.webp';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row pt-[128px]">
        {/* Background halves */}
        <div className="absolute inset-0 z-0 flex">
          <div className="w-full md:w-[55%] bg-gradient-to-br from-[#FFF0F5] to-white h-full" />
          <div className="hidden md:block w-[45%] bg-gradient-to-b from-[#E75F8A] to-pink-300 h-full" />
        </div>

        <div className="relative z-10 w-full flex flex-col md:flex-row max-w-7xl mx-auto px-4 lg:px-8">
          {/* Left Content */}
          <div className="w-full md:w-[55%] flex flex-col justify-center py-20 pr-0 md:pr-12">
            <motion.span
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-primary-pink font-inter font-medium text-[12px] tracking-[0.1em] uppercase mb-4"
            >
              Fitness Trainer
            </motion.span>
            <motion.h1
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="font-poppins font-extrabold text-[56px] leading-[1.1] text-primary-dark mb-6"
            >
              Build a Perfect<br />Health Growth
            </motion.h1>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-muted text-[17px] max-w-[400px] mb-10 leading-relaxed"
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </motion.p>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Link to="/portfolio" className="inline-block bg-primary-pink text-white rounded-full px-10 py-4 font-poppins font-semibold text-[15px] hover:bg-[#d44c77] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                JOIN NOW
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[45%] flex items-center right-[10%] relative h-[500px] md:h-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full h-[70%] md:h-[80%] md:-translate-x-[10%]"
            >
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
                alt="Fitness Trainer"
                loading="lazy"
                className="w-full h-full object-cover shadow-2xl rounded-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video / Quote Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <p className="text-muted italic text-lg leading-relaxed border-l-4 border-primary-pink pl-6">
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident."
            </p>
          </div>
          <div className="w-full md:w-1/2 relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
              alt="Video Thumbnail"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <a href="https://www.youtube.com/watch?v=Vr3h5X9kmUo" target="_blank" rel="noopener noreferrer" className="w-20 h-20 bg-primary-pink rounded-full flex items-center justify-center pl-2 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-light py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          >
            {[
              { num: '3', label: 'Certificate trainer' },
              { num: '8', label: 'Years Experience' },
              { num: '47', label: 'Loyal Client' }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <div className="font-poppins font-extrabold text-[64px] text-primary-pink leading-none mb-2">{stat.num}</div>
                <div className="text-muted text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src={img1} alt="Workout" loading="lazy" className="w-full h-64 object-cover rounded-2xl md:-mt-8 shadow-lg" />
            <img src={img2} alt="Workout" loading="lazy" className="w-full h-64 object-cover rounded-2xl md:mt-8 shadow-lg" />
            <img src={img3} alt="Workout" loading="lazy" className="w-full h-64 object-cover rounded-2xl md:-mt-4 shadow-lg" />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-[45%]">
            <motion.h3
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="font-poppins font-bold text-[28px] text-primary-dark mb-6"
            >
              Hi! My name is Hana Evans
            </motion.h3>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-muted leading-relaxed mb-8"
            >
              Cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Tellus id interdum velit laoreet id donec ultrices tincidunt. Tincidunt augue interdum velit euismod.
            </motion.p>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Link to="/about" className="text-primary-pink font-semibold hover:underline flex items-center gap-2">
                learn more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </motion.div>
          </div>
          <div className="w-full md:w-[55%]">
            <img
              src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=700&q=80"
              alt="Hana Evans"
              loading="lazy"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="font-poppins font-bold text-[36px] text-center text-primary-dark mb-16"
          >
            Benefits of Personal Training
          </motion.h2>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              { title: 'Nutrition Strategies', desc: 'Quis varius quam quisque id diam vel. Lobortis scelerisque fermentum.', icon: 'leaf' },
              { title: 'Workout Routines', desc: 'Quis varius quam quisque id diam vel. Lobortis scelerisque fermentum.', icon: 'dumbbell' },
              { title: 'Individual Support', desc: 'Quis varius quam quisque id diam vel. Lobortis scelerisque fermentum.', icon: 'person' },
              { title: 'First-Hand Advice', desc: 'Quis varius quam quisque id diam vel. Lobortis scelerisque fermentum.', icon: 'star' }
            ].map((benefit, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 bg-[#FFF0F5] rounded-xl flex items-center justify-center text-primary-pink mb-6">
                  {/* Generic icon shape for demo */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="font-poppins font-bold text-xl text-primary-dark mb-3">{benefit.title}</h4>
                <p className="text-muted leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-light py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-[40%] lg:sticky top-32 h-fit">
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="font-poppins font-bold text-[36px] text-primary-dark mb-6"
            >
              My program
            </motion.h2>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-muted leading-relaxed mb-8"
            >
              Nulla aliquet enim tortor at auctor urna. Neque sodales ut etiam sit amet nisl purus. Auctor neque vitae tempus quam. At urna condimentum mattis pellentesque.
            </motion.p>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Link to="/portfolio" className="inline-block bg-primary-pink text-white rounded-full px-8 py-3 font-poppins font-semibold hover:bg-[#d44c77] hover:scale-105 transition-all shadow-md">
                Join Now
              </Link>
            </motion.div>
          </div>

          <div className="w-full lg:w-[60%] relative flex justify-center items-center py-12">
            <div className="absolute inset-0 flex justify-center items-center z-0">
              <img src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=500&q=80" alt="Trainer Center" loading="lazy" className="w-[200px] md:w-[300px] object-cover" />
            </div>
            {/* Programs around the center - simplified layout for responsiveness */}
            <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 gap-8 bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white">
              {[
                { title: 'Cardio' }, { title: 'Abdominal abs' }, { title: 'Shoulders' }, { title: 'Hands' }, { title: 'Time' }
              ].map((prog, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm flex gap-4">
                  <div className="w-10 h-10 bg-[#FFF0F5] text-primary-pink rounded-xl shrink-0 flex justify-center items-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-primary-dark">{prog.title}</h4>
                    <p className="text-muted text-sm">Desc here</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BMICalculator variant="dark" />

      {/* Blog Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <motion.h2
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="font-poppins font-bold text-3xl md:text-[36px] text-primary-dark mb-4"
              >
                Healthy Tips & Tricks
              </motion.h2>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-muted">
                Stay updated with the latest news.
              </motion.p>
            </div>
            <Link to="/blog-style-1" className="hidden sm:inline-flex text-primary-pink font-semibold hover:underline items-center gap-2">
              view all <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
              <div className="flex-1 p-8">
                <span className="inline-block bg-primary-pink/10 text-primary-pink px-4 py-1 rounded-full text-xs font-semibold mb-4">food</span>
                <h3 className="font-poppins font-bold text-2xl text-primary-dark mb-4 group-hover:text-primary-pink transition-colors">Title. Lorem ipsum dolor sit amet</h3>
                <Link to="/blog-details" className="text-primary-dark font-semibold border-b border-primary-dark pb-1 mb-8 inline-block hover:text-primary-pink hover:border-primary-pink transition-colors">Read More</Link>
                <div className="text-muted text-sm">June 06, 2022</div>
              </div>
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80" alt="Blog" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            {/* Card 2 & 3 */}
            {[
              { img: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80' },
              { img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' }
            ].map((post, idx) => (
              <div key={idx} className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src={post.img} alt="Blog" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    <span className="inline-block bg-primary-pink/10 text-primary-pink px-3 py-1 rounded-full text-xs font-semibold">health</span>
                    <span className="inline-block bg-primary-pink/10 text-primary-pink px-3 py-1 rounded-full text-xs font-semibold">lifestyle</span>
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-primary-dark mb-4 group-hover:text-primary-pink transition-colors">Title. Lorem ipsum dolor sit amet</h3>
                  <div className="text-muted text-sm flex gap-4">
                    <span>By Hana Evans</span>
                    <span>June 06, 2022</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* CTA Section */}
      <section className="flex flex-col md:flex-row min-h-[500px]">
        <div className="w-full md:w-1/2 relative min-h-[300px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80)' }} />
          <div className="absolute inset-0 bg-[#1C1C2E]/80" />
        </div>
        <div className="w-full md:w-1/2 bg-primary-dark flex items-center justify-center p-12 relative min-h-[400px]">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden md:block z-10">
            <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80" alt="CTA Girl" loading="lazy" className="w-[300px] object-contain drop-shadow-2xl" />
          </div>
          <div className="max-w-md w-full md:ml-32 text-center md:text-left">
            <h3 className="font-poppins font-bold text-3xl text-white mb-4">ready to get started</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Duis at consectetur lorem donec massa sapien faucibus et molestie. Ut etiam sit amet nisl purus.
            </p>
            <p className="text-primary-pink font-medium mb-6">Never be bored by your fitness program again!</p>
            <p className="text-white text-sm mb-8 bg-white/10 py-3 px-4 rounded-lg inline-block">
              Membership is only $29.99/mo, that's less than $1 a day!
            </p>
            <div>
              <Link to="/pricing-table" className="inline-block bg-primary-pink text-white px-10 py-4 rounded-full font-poppins font-semibold hover:bg-[#d44c77] hover:scale-105 transition-all shadow-lg">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
