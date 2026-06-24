import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import BreadcrumbHeader from '../components/BreadcrumbHeader';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-[120px]">
      <BreadcrumbHeader
        title="Contact with me"
        current="Contact"
      />

      {/* Map */}
      <section className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106140.75503460667!2d-118.06456070660401!3d33.7661706173003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd26e84ed0ebbd%3A0xc6fbef1a836dafc9!2sHuntington%20Central%20Park%20Equestrian%20Center!5e0!3m2!1sen!2sus!4v1622646635293!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Embed"
        ></iframe>
      </section>

      {/* Info and Form */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row gap-16">

          {/* Left Info Cards */}
          <div className="w-full md:w-[40%] space-y-6">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-white border border-gray-100 p-6 rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-lime/10 rounded-xl flex items-center justify-center text-primary-lime shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="font-poppins font-bold text-lg text-primary-dark mb-1">Addres</h4>
                <p className="text-muted text-sm leading-relaxed">Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-white border border-gray-100 p-6 rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-lime/10 rounded-xl flex items-center justify-center text-primary-lime shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h4 className="font-poppins font-bold text-lg text-primary-dark mb-1">Call My</h4>
                <a href="tel:+1234567890" className="text-muted text-sm hover:text-primary-lime transition-colors">+1 (234) 567 890</a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-white border border-gray-100 p-6 rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-lime/10 rounded-xl flex items-center justify-center text-primary-lime shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="font-poppins font-bold text-lg text-primary-dark mb-1">E-mail</h4>
                <a href="mailto:kulzummujtabakalhoro@gmail.com" className="text-muted text-sm hover:text-primary-lime transition-colors">kulzummujtabakalhoro@gmail.com</a>
              </div>
            </motion.div>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-[60%]">
            <motion.h3
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="font-poppins font-bold text-[28px] text-primary-dark mb-4"
            >
              Get in Touch
            </motion.h3>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-muted mb-8 leading-relaxed max-w-lg"
            >
              Cras pulvinar mattis nunc sed blandit. Id tristique fames ac turpis egestas integer eget aliquet nibh.
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input type="text" placeholder="Name" className="w-full h-14 px-6 border border-gray-200 focus:outline-none focus:border-primary-lime bg-light" required />
              </div>
              <div>
                <input type="email" placeholder="Email" className="w-full h-14 px-6 border border-gray-200 focus:outline-none focus:border-primary-lime bg-light" required />
              </div>
              <div>
                <input type="tel" placeholder="Phone" className="w-full h-14 px-6 border border-gray-200 focus:outline-none focus:border-primary-lime bg-light" />
              </div>
              <div>
                <textarea placeholder="Message" rows="4" className="w-full p-6 border border-gray-200 focus:outline-none focus:border-primary-lime bg-light resize-none" required></textarea>
              </div>

              <button type="submit" className="w-full bg-primary-lime text-black h-14 font-poppins font-bold uppercase tracking-widest text-[15px] hover:brightness-110 transition-all shadow-md">
                Join Now
              </button>

              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 text-center text-sm font-medium"
                  >
                    Thanks for reaching out! We'll be in touch soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </section>

      {/* Custom Subscribe Section with Split BG */}
      <section className="relative min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80)' }} />
          <div className="w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&q=80)' }} />
        </div>
        <div className="absolute inset-0 bg-[#1C1C2E]/80" />

        <div className="relative z-10 max-w-xl mx-auto text-center px-4 py-16">
          <h2 className="font-poppins font-bold text-3xl md:text-[36px] text-white mb-4">
            Subscribe to Newsletter
          </h2>
          <p className="text-gray-300 text-[16px] mb-8">
            Duis at consectetur lorem donec massa sapien faucibus et molestie. Ut etiam sit amet nisl purus. Massa tempor nec feugiat nisl pretium.
          </p>
          <form className="relative mb-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full h-14 pl-6 pr-[120px] rounded-full border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary-lime transition-colors font-inter"
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1 h-12 bg-primary-lime text-black px-8 font-poppins font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-colors shadow-md"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-400 text-[13px] italic">
            Nec feugiat in fermentum posuere urna nec tincidunt praesent.
          </p>
        </div>
      </section>

    </motion.div>
  );
}





