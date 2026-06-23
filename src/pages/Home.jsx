import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BMICalculator from '../components/BMICalculator';
import TestimonialSlider from '../components/TestimonialSlider';
import img1 from '../assets/images/1.webp';
import img2 from '../assets/images/2.webp';
import img3 from '../assets/images/3.webp';
import img5 from '../assets/images/5.webp';
import img7 from '../assets/images/7.webp';
import img11 from '../assets/images/11.webp';
import ready from '../assets/images/ready.webp';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

export default function Home() {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    { icon: '❤️', title: 'Cardio', desc: 'Pretium quam vulputate dignissim suspen disse. Nisi scelerisque eu ultrices.' },
    { icon: '🏋️', title: 'Abdominal abs', desc: 'Pretium quam vulputate dignissim suspen disse. Nisi scelerisque eu ultrices.' },
    { icon: '🏆', title: 'Shoulders', desc: 'Pretium quam vulputate dignissim suspen disse. Nisi scelerisque eu ultrices.' },
    { icon: '💪', title: 'Hands', desc: 'Pretium quam vulputate dignissim suspen disse. Nisi scelerisque eu ultrices.' },
    { icon: '⏱️', title: 'Time', desc: 'Pretium quam vulputate dignissim suspen disse. Nisi scelerisque eu ultrices.' },
  ];

  const benefits = [
    { title: 'Nutrition Strategies', desc: 'Quis varius quam quisque id diam vel. Lobortis scelerisque fermentum.' },
    { title: 'Workout Routines', desc: 'Quis varius quam quisque id diam vel. Lobortis scelerisque fermentum.' },
    { title: 'Individual Support', desc: 'Quis varius quam quisque id diam vel. Lobortis scelerisque fermentum.' },
    { title: 'First-Hand Advice', desc: 'Sem viverra aliquet eget sit amet. Adipiscing elit duis tristique sollicitudin.' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen flex items-center overflow-visible z-10">
        {/* Radial lime-yellow gradient background */}
        <div className="absolute inset-0 z-0"
          style={{ background: 'radial-gradient(ellipse 80% 90% at 60% 40%, #efffb0 0%, #f5ffd6 30%, #fefff5 65%, #ffffff 100%)' }}
        />
        {/* Dot grid top-right decoration */}
        <div className="absolute top-12 right-[5%] w-52 h-52 dot-grid-gray opacity-30 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full grid grid-cols-1 md:grid-cols-12 min-h-[calc(100vh-72px)] items-center">

          {/* Left text content — 5 cols */}
          <motion.div
            className="md:col-span-5 py-16"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1
              variants={fadeUp}
              className="font-poppins font-black text-[40px] md:text-[32px] lg:text-[52px] leading-[1.1] [word-spacing:20px] text-primary-dark uppercase mb-6 mt-40"
            >
              Build a Perfect
              <br />
              Health Growth
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-600 text-[17px] max-w-[380px] mb-10 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/portfolio" className="btn-lime text-sm">
                JOIN NOW
              </Link>
            </motion.div>
          </motion.div>

          {/* Center hero image — 4 cols */}
          <motion.div
            className="md:col-span-4 flex justify-center items-end h-full relative"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Box behind head */}
            {/* <div className="absolute top-40 -right-40 md:right-20 w-[250px] h-[250px] bg-primary-lime/20 z-0" /> */}
            <div className="absolute top-40 -right-40 md:right-20 w-[250px] h-[250px] dot-grid-dark opacity-30 z-0" />

            <img
              src={img5}
              alt="Fitness Trainer Hana Evans"
              className="w-full max-h-[90vh] top-20 object-cover object-top relative z-10"
            />
          </motion.div>


          {/* Right content card — 3 cols */}
          <motion.div
            className="md:col-span-3 flex flex-col gap-6 py-12"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Quote card */}
            <motion.div variants={fadeUp} className="bg-white/50 border border-white/80 rounded-xl backdrop-blur-sm right-20 w-[400px] p-6 shadow-sm relative z-20">
              {/* <div className="text-3xl text-gray-300 font-serif mb-2 leading-none">"</div> */}

              <p className="text-gray-700 text-[14px] italic leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non provident.
              </p>
            </motion.div>

            {/* Stay healthy card */}
            <motion.div variants={fadeUp} className="pt-6">
              <h3 className="font-poppins font-black text-xl text-primary-dark mb-3">Stay Healthy by active</h3>
              <p className="text-muted text-sm leading-relaxed">
                Habitant morbi tristique senectus et netus. Morbi enim nunc faucibus a pellentesque sit. Sit amet dictum sit amet justo donec.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-white border-y border-gray-100 relative z-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-3 divide-x divide-gray-200"
          >
            {[
              { num: '3', label: 'Certificate\nTrainer' },
              { num: '8', label: 'Years\nExperience' },
              { num: '47', label: 'Loyal\nClient' },
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeUp} className="py-12 flex flex-col items-center text-center">
                <span className="font-poppins font-black text-[72px] md:text-[90px] text-primary-lime leading-none mb-2">{stat.num}</span>
                <span className="font-poppins font-bold text-xs uppercase tracking-[0.15em] text-gray-500 whitespace-pre-line">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="dot-grid-gray absolute top-0 right-0 w-64 h-full opacity-20" />
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Image collage */}
            <motion.div
              className="w-full lg:w-1/2 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <div className="relative grid grid-cols-2 gap-0" style={{ minHeight: 480 }}>
                {/* Top-left small photo with lime block behind */}
                <motion.div variants={fadeUp} className="relative z-10 self-end mb-4">
                  <div className="absolute -left-2 -top-2 w-full h-full bg-primary-lime -z-10" />
                  <img
                    src={img1}
                    alt="Trainer workout"
                    className="w-full h-44 object-cover relative z-10"
                  />
                </motion.div>

                {/* Top-right large portrait */}
                <motion.div variants={fadeUp} className="row-span-2 relative z-10 mt-10">
                  <img
                    src={img2}
                    alt="Hana Evans portrait"
                    className="w-full h-80 object-cover object-top"
                  />
                </motion.div>

                {/* Bottom-left photo */}
                <motion.div variants={fadeUp} className="relative z-10">
                  <img
                    src={img3}
                    alt="Active training"
                    className="w-full h-60 object-cover"
                  />
                </motion.div>

                {/* Dot grid block bottom-right of left photo area */}
                <motion.div
                  variants={fadeUp}
                  className="absolute -bottom-5 left-[30%] w-80 h-40 bg-primary-lime dot-grid-dark"
                  style={{ opacity: 0.85 }}
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="font-poppins font-black text-[42px] md:text-[52px] uppercase leading-tight [word-spacing:10px] text-primary-dark mb-6">
                Hi! My Name Is<br />
                <span className="heading-dots">Hana Evans</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-10 text-[16px]">
                Cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Tellus id interdum velit laoreet id donec ultrices tincidunt. Tincidunt augue interdum velit euismod.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/about" className="btn-lime text-sm">
                  LEARN MORE
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS SECTION ─── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-poppins font-black text-[38px] md:text-[48px] uppercase text-center text-primary-dark mb-16 heading-dots"
          >
            Benefits of Personal<br />Training
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white group hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
              >
                {/* Lime left border accent */}
                <div className="absolute left-0 top-0 w-[3px] h-full bg-primary-lime group-hover:h-full transition-all duration-300" />
                <div className="p-8">
                  <h3 className="font-poppins font-bold text-[18px] text-primary-dark mb-4 border-b border-gray-100 pb-4">
                    {b.title}
                  </h3>
                  <div className="bg-gray-50 p-4 -mx-4">
                    <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── MY PROGRAM SECTION ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-0">

            {/* Left: text + program list left side */}
            <div className="w-full lg:w-[30%] pr-0 lg:pr-8 flex flex-col justify-between py-4">
              <div>
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="font-poppins font-black text-[38px] uppercase text-primary-dark mb-2 heading-dots"
                >
                  My Program
                </motion.h2>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-gray-600 leading-relaxed mb-8 text-[15px]"
                >
                  Nulla aliquet enim tortor at auctor urna. Neque sodales ut etiam sit amet nisl purus. Auctor neque vitae tempus quam. At urna condimentum mattis pellentesque.
                </motion.p>
                <Link to="/portfolio" className="btn-lime text-sm">JOIN NOW</Link>
              </div>

              {/* Left program cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="mt-12 space-y-4"
              >
                {programs.slice(0, 2).map((p, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    onClick={() => setActiveProgram(idx)}
                    className={`p-5 cursor-pointer transition-all duration-200 border-l-4 ${activeProgram === idx ? 'border-primary-lime bg-gray-50' : 'border-transparent bg-gray-50 hover:border-primary-lime'}`}
                  >
                    <div className="text-2xl mb-2">{p.icon}</div>
                    <h4 className="font-poppins font-bold text-[16px] text-primary-dark mb-1">{p.title}</h4>
                    <p className="text-muted text-sm">{p.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Center: Trainer image */}
            <div className="w-full lg:w-[40%] flex items-end justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 z-10" />
              <motion.img
                src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=80"
                alt="Hana Evans program"
                loading="lazy"
                className="w-full object-cover object-top max-h-[600px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {/* Right program cards */}
            <div className="w-full lg:w-[30%] pl-0 lg:pl-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-4 pt-4 lg:mt-24"
              >
                {programs.slice(2).map((p, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    onClick={() => setActiveProgram(idx + 2)}
                    className={`p-5 cursor-pointer transition-all duration-200 border-l-4 ${activeProgram === idx + 2 ? 'border-primary-lime bg-gray-50' : 'border-transparent bg-gray-50 hover:border-primary-lime'}`}
                  >
                    <div className="text-2xl mb-2">{p.icon}</div>
                    <h4 className="font-poppins font-bold text-[16px] text-primary-dark mb-1">{p.title}</h4>
                    <p className="text-muted text-sm">{p.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BMI CALCULATOR ─── */}
      <BMICalculator />

      {/* ─── BLOG SECTION ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left sticky heading */}
            <div className="w-full lg:w-[30%] lg:sticky top-24">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="font-poppins font-black text-[38px] uppercase text-primary-dark mb-3 heading-dots"
              >
                Healthy Tips &amp; Tricks
              </motion.h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                Duis at consectetur lorem donec massa sapien faucibus et molestie. Ut etiam sit amet nisl purus. Massa tempor nec feugiat nisl pretium.
              </p>
              <Link to="/blog-style-1" className="btn-lime text-sm">VIEW ALL TIPS</Link>
            </div>

            {/* Right blog cards masonry */}
            <motion.div
              className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {[
                { img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80', cat: 'food', title: 'Title. Lorem ipsum dolor sit amet', date: 'June 06, 2022', desc: 'Malesuada fames ac turpis egestas sed. Diam maecenas ultricies mi eget mauris...', top: false },
                { img: [img7], cat: 'health', cat2: 'lifestyle', title: 'Title. Lorem ipsum dolor sit amet', date: 'June 06, 2022', desc: 'Malesuada fames ac turpis egestas sed. Diam maecenas ultricies mi eget mauris...', top: false },
                { img: [img11], cat: 'health', cat2: 'lifestyle', title: 'Title. Lorem ipsum dolor sit amet', date: 'June 06, 2022', desc: 'Malesuada fames ac turpis egestas sed. Diam maecenas ultricies mi eget mauris...', top: false },
                { img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', cat: 'food', title: 'Title. Lorem ipsum dolor sit amet', date: 'June 06, 2022', desc: 'Malesuada fames ac turpis egestas sed. Diam maecenas ultricies mi eget mauris...', top: false },
              ].map((post, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="group bg-white border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={post.img}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="bg-primary-dark text-white text-xs font-poppins font-bold uppercase px-3 py-1">{post.cat}</span>
                      {post.cat2 && <span className="bg-primary-dark text-white text-xs font-poppins font-bold uppercase px-3 py-1">{post.cat2}</span>}
                    </div>
                    <h3 className="font-poppins font-bold text-[17px] text-primary-dark mb-3 group-hover:text-primary-lime transition-colors">
                      <Link to="/blog-details">{post.title}</Link>
                    </h3>
                    <p className="text-muted text-sm mb-4 leading-relaxed">{post.desc}</p>
                    <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                      <Link to="/blog-details" className="font-poppins font-bold text-sm text-primary-dark hover:text-primary-lime transition-colors">Read More</Link>
                      <span className="text-xs text-muted">{post.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION "READY TO GET STARTED" ─── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">

            {/* Left: Lime block with trainer + JUST DO IT watermark */}
            <motion.div
              className="w-full md:w-1/2 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Dot grid top decoration */}
              <div className="absolute -top-10 -right-10 w-60 h-60 dot-grid-lime opacity-60 z-10" />
              <div className="relative bg-primary-lime overflow-hidden">
                {/* JUST DO IT watermark */}
                <div className="absolute bottom-4 left-4 z-10 select-none">
                  <p className="font-poppins font-black text-[56px] md:text-[72px] text-white/25 uppercase leading-none">JUST<br />DO IT</p>
                </div>
                <img
                  src={ready}
                  alt="Ready to get started"
                  loading="lazy"
                  className="w-full h-[480px] object-cover object-top mix-blend-multiply"
                />
              </div>
            </motion.div>

            {/* Right: Text */}
            <motion.div
              className="w-full md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="font-poppins font-black text-[42px] md:text-[54px] uppercase text-primary-dark leading-tight mb-6 heading-dots">
                Ready to<br />Get Started
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
                Duis at consectetur lorem donec massa sapien faucibus et molestie. Ut etiam sit amet nisl purus.
              </motion.p>
              <motion.p variants={fadeUp} className="font-poppins font-bold text-primary-dark mb-3">
                Never be bored by your fitness program again!
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 mb-10">
                Membership is only $29.99/mo, that's less than $1 a day!
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/pricing-table" className="btn-lime text-sm">JOIN NOW</Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="font-poppins font-black text-[38px] uppercase text-center text-primary-dark mb-16 heading-dots"
          >
            What Clients Say
          </motion.h2>
          <TestimonialSlider />
        </div>
      </section>

    </motion.div>
  );
}





