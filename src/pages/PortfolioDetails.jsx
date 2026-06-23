import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BreadcrumbHeader from '../components/BreadcrumbHeader';
import ProgramCard from '../components/ProgramCard';

export default function PortfolioDetails() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const programs = [
    { title: "Basic Exercises", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&q=80", featured: false },
    { title: "Advanced Exercises", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&q=80", featured: false },
    { title: "Regular Set of Workout", img: "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=500&q=80", featured: false }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-[128px]">
      <BreadcrumbHeader 
        title="Programs Details" 
        current="Programs Details" 
        breadcrumbs={[
          { name: 'Programs', path: '/portfolio' }
        ]}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-[60%]">
            <h2 className="font-poppins font-bold text-3xl md:text-[40px] text-primary-dark mb-4 leading-tight">
              Bodybuilding Localized
            </h2>
            <span className="inline-block bg-primary-pink/10 text-primary-pink px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
              #min 16 weeks workout
            </span>
            
            <h4 className="font-poppins font-bold text-xl text-primary-dark mb-4">Recommended workout times</h4>
            <p className="text-muted leading-relaxed mb-6">
              Aliquam etiam erat velit scelerisque in dictum non consectetur a. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.
            </p>
            <ul className="space-y-3 mb-10 text-muted">
              <li className="flex gap-2"><svg className="w-5 h-5 text-primary-pink shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Pretium viverra suspendisse potenti nullam ac tortor</li>
              <li className="flex gap-2"><svg className="w-5 h-5 text-primary-pink shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Faucibus ornare suspendisse sed nisi lacus sed viverra</li>
              <li className="flex gap-2"><svg className="w-5 h-5 text-primary-pink shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Odio ut sem nulla pharetra diam sit amet nisl</li>
            </ul>

            <h4 className="font-poppins font-bold text-xl text-primary-dark mb-6">To enter this class you will need:</h4>
            <div className="space-y-6 mb-12">
               {[
                 { num: '1.', title: 'Motivation', desc: 'Tellus id interdum velit laoreet id donec ultrices tincidunt. Tincidunt augue interdum velit euismod.' },
                 { num: '2.', title: 'Time', desc: 'Suscipit tellus mauris a diam maecenas sed enim ut sem. Pharetra diam sit amet nisl suscipit.' },
                 { num: '3.', title: 'Water', desc: 'At tellus at urna condimentum mattis pellentesque id nibh tortor.' }
               ].map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                   <div className="font-poppins font-bold text-xl text-primary-pink">{item.num}</div>
                   <div>
                     <h5 className="font-poppins font-bold text-lg text-primary-dark mb-1">{item.title}</h5>
                     <p className="text-muted text-sm">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>

            <h4 className="font-poppins font-bold text-xl text-primary-dark mb-6">The goals that you will achieve:</h4>
            <div className="bg-light p-8 rounded-2xl relative overflow-hidden">
               {/* Progress bar BG image overlay could be here, we'll keep it clean with white bars */}
               <div className="space-y-6 relative z-10">
                 <div>
                   <div className="flex justify-between text-sm font-poppins font-semibold text-primary-dark mb-2">
                     <span>Power Workout</span>
                     <span>70%</span>
                   </div>
                   <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                     <div className="h-full bg-primary-pink rounded-full w-[70%]" />
                   </div>
                 </div>
                 <div>
                   <div className="flex justify-between text-sm font-poppins font-semibold text-primary-dark mb-2">
                     <span>TRX Training</span>
                     <span>60%</span>
                   </div>
                   <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                     <div className="h-full bg-primary-pink rounded-full w-[60%]" />
                   </div>
                 </div>
                 <div>
                   <div className="flex justify-between text-sm font-poppins font-semibold text-primary-dark mb-2">
                     <span>Cardio & Weight</span>
                     <span>80%</span>
                   </div>
                   <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                     <div className="h-full bg-primary-pink rounded-full w-[80%]" />
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6">
             <img src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=700&q=80" alt="Detail 1" className="w-full h-auto rounded-2xl shadow-lg" />
             <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=80" alt="Detail 2" className="w-full h-auto rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80)' }} />
        <div className="absolute inset-0 bg-[#1C1C2E]/80 z-0" />
        <div className="relative z-10 text-center px-4">
          <h3 className="font-poppins font-bold text-3xl md:text-[40px] text-white mb-8">Start changing your life now</h3>
          <Link to="/pricing-table" className="inline-block bg-primary-pink text-white rounded-full px-10 py-4 font-poppins font-semibold hover:bg-[#d44c77] hover:scale-105 transition-all shadow-lg">
            Join Now
          </Link>
        </div>
      </section>

      {/* Motivational Quote */}
      <section className="relative py-24 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-cover bg-center z-0 fixed-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1400&q=80)' }} />
        <div className="absolute inset-0 bg-[#1C1C2E]/85 z-0" />
        <div className="relative z-10 max-w-3xl px-4">
          <p className="font-poppins font-bold italic text-3xl md:text-[40px] leading-snug text-white">
            "Nobody who ever gave his best regretted it."
          </p>
        </div>
      </section>

      {/* Related Programs */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-poppins font-bold text-3xl text-primary-dark">You may also be interested in</h2>
            <Link to="/portfolio" className="hidden sm:flex text-primary-pink font-semibold hover:underline items-center gap-2">
              View more <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {programs.map((p, idx) => (
               <ProgramCard key={idx} title={p.title} image={p.img} isFeatured={p.featured} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
