import { motion } from 'framer-motion';
import BreadcrumbHeader from '../components/BreadcrumbHeader';
import NewsletterSection from '../components/NewsletterSection';

export default function PricingTable() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-[120px]">
      <BreadcrumbHeader 
        title="Start Your Body Goal from Choosing Our Package." 
        current="Pricing Table" 
        breadcrumbs={[ { name: 'Pages', path: '#' } ]}
      />

      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          >
            {/* Card 1 - Basic */}
            <motion.div variants={fadeInUp} className="bg-white border border-gray-200 p-10 text-center hover:shadow-xl transition-all duration-300">
               <div className="w-12 h-12 mx-auto text-primary-lime mb-6">
                 <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
               </div>
               <h4 className="font-poppins font-bold text-xl text-primary-dark uppercase tracking-wider mb-2">Basic</h4>
               <div className="flex justify-center items-end gap-1 mb-6">
                 <span className="font-poppins font-extrabold text-[48px] text-primary-dark leading-none">$29.99</span>
                 <span className="text-muted pb-1">/month</span>
               </div>
               <p className="text-muted text-sm mb-8">Dictumst vestibulum rhoncus est pellentesque elit ullamcorper.</p>
               <ul className="space-y-4 mb-10 text-left">
                 <li className="flex gap-3 text-primary-dark text-sm"><svg className="w-5 h-5 text-primary-lime shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Eget egestas purus viverra accumsan</li>
                 <li className="flex gap-3 text-primary-dark text-sm"><svg className="w-5 h-5 text-primary-lime shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Consectetur adipiscing elit ut aliquam purus</li>
                 <li className="flex gap-3 text-primary-dark text-sm"><svg className="w-5 h-5 text-primary-lime shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> In egestas erat imperdiet sed euismod nisi</li>
               </ul>
               <button className="w-full py-4 btn-lime text-sm transition-all">
                 Get Started
               </button>
            </motion.div>

            {/* Card 2 - Advanced (Featured) */}
            <motion.div variants={fadeInUp} className="bg-primary-dark p-10 text-center hover:shadow-xl transition-all duration-300 relative transform md:-translate-y-4 shadow-xl border border-primary-dark">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-lime text-black px-6 py-1 rounded-full text-xs font-bold tracking-wider">POPULAR</div>
               <div className="w-12 h-12 mx-auto text-primary-lime mb-6">
                 <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
               </div>
               <h4 className="font-poppins font-bold text-xl text-white uppercase tracking-wider mb-2">Advanced</h4>
               <div className="flex justify-center items-end gap-1 mb-6">
                 <span className="font-poppins font-extrabold text-[48px] text-white leading-none">$99.99</span>
                 <span className="text-primary-lime pb-1">/month</span>
               </div>
               <p className="text-gray-400 text-sm mb-8">Dictumst vestibulum rhoncus est pellentesque elit ullamcorper.</p>
               <ul className="space-y-4 mb-10 text-left">
                 <li className="flex gap-3 text-white text-sm"><svg className="w-5 h-5 text-primary-lime shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Eget egestas purus viverra accumsan</li>
                 <li className="flex gap-3 text-white text-sm"><svg className="w-5 h-5 text-primary-lime shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Consectetur adipiscing elit ut aliquam purus</li>
                 <li className="flex gap-3 text-white text-sm"><svg className="w-5 h-5 text-primary-lime shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> In egestas erat imperdiet sed euismod nisi</li>
                 <li className="flex gap-3 text-white text-sm"><svg className="w-5 h-5 text-primary-lime shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Massa tempor nec feugiat nisl pretium</li>
                 <li className="flex gap-3 text-white text-sm"><svg className="w-5 h-5 text-primary-lime shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Ultrices neque ornare aenean euismod</li>
                 <li className="flex gap-3 text-white text-sm"><svg className="w-5 h-5 text-primary-lime shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Mauris in aliquam sem fringilla ut morbi</li>
               </ul>
               <button className="w-full py-4 btn-lime font-poppins font-semibold hover:brightness-110 transition-colors shadow-lg">
                 Get Started
               </button>
            </motion.div>

            {/* Card 3 - Pro */}
            <motion.div variants={fadeInUp} className="bg-white border border-gray-200 p-10 text-center hover:shadow-xl transition-all duration-300">
               <div className="w-12 h-12 mx-auto text-primary-lime mb-6">
                 <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
               </div>
               <h4 className="font-poppins font-bold text-xl text-primary-dark uppercase tracking-wider mb-2">Pro</h4>
               <div className="flex justify-center items-end gap-1 mb-6">
                 <span className="font-poppins font-extrabold text-[48px] text-primary-dark leading-none">$49.99</span>
                 <span className="text-muted pb-1">/month</span>
               </div>
               <p className="text-muted text-sm mb-8">Dictumst vestibulum rhoncus est pellentesque elit ullamcorper.</p>
               <ul className="space-y-4 mb-10 text-left">
                 <li className="flex gap-3 text-primary-dark text-sm"><svg className="w-5 h-5 text-primary-lime shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Eget egestas purus viverra accumsan</li>
                 <li className="flex gap-3 text-primary-dark text-sm"><svg className="w-5 h-5 text-primary-lime shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Consectetur adipiscing elit ut aliquam purus</li>
                 <li className="flex gap-3 text-primary-dark text-sm"><svg className="w-5 h-5 text-primary-lime shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> In egestas erat imperdiet sed euismod nisi</li>
                 <li className="flex gap-3 text-primary-dark text-sm"><svg className="w-5 h-5 text-primary-lime shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Massa tempor nec feugiat nisl pretium</li>
               </ul>
               <button className="w-full py-4 btn-lime text-sm transition-all">
                 Get Started
               </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <NewsletterSection />
    </motion.div>
  );
}





