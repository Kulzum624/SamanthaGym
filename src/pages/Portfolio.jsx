import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BreadcrumbHeader from '../components/BreadcrumbHeader';
import ProgramCard from '../components/ProgramCard';
import TestimonialSlider from '../components/TestimonialSlider';
import NewsletterSection from '../components/NewsletterSection';

export default function Portfolio() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const programs = [
    { title: "Basic Exercises", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&q=80", featured: false },
    { title: "Advanced Exercises", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&q=80", featured: false },
    { title: "Bodybuilding Localized", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80", featured: true },
    { title: "Regular Set of Workout", img: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=500&q=80", featured: false },
    { title: "Regular Set of Workout", img: "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=500&q=80", featured: false }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-[128px]">
      <BreadcrumbHeader title="my Programs" current="Portfolio" />

      {/* Header */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/3">
            <h3 className="font-poppins font-bold text-3xl text-primary-dark mb-8">What do you get:</h3>
            <ul className="space-y-6">
              {[
                'Aliquam etiam erat velit scelerisque in dictum non consectetur.',
                'Sagittis id consectetur purus ut faucibus pulvinar elementum.',
                'Faucibus pulvinar elementum integer enim neque volutpat ac.'
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-pink/10 text-primary-pink flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-muted leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col sm:flex-row gap-6">
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&q=80" alt="Portfolio 1" className="w-full sm:w-1/2 h-[400px] object-cover rounded-2xl shadow-lg" />
            <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&q=80" alt="Portfolio 2" className="w-full sm:w-1/2 h-[400px] object-cover rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Programs Cards */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-8">
          {programs.map((p, idx) => (
            <ProgramCard key={idx} title={p.title} image={p.img} isFeatured={p.featured} />
          ))}
        </div>
      </section>

      {/* Next Workout Strip */}
      <section className="relative h-[250px] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80)' }} />
        <div className="absolute inset-0 bg-[#1C1C2E]/80 z-0" />
        <div className="relative z-10 text-center max-w-2xl px-4">
          <div className="inline-block bg-primary-pink text-white px-6 py-2 rounded-full font-bold font-poppins text-lg mb-6">
            22 June · 6:30pm
          </div>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-8">Don't miss the next workout</h3>
          <Link to="/schedule" className="text-white font-medium hover:text-primary-pink transition-colors underline decoration-2 underline-offset-4">
            Workout Schedule
          </Link>
        </div>
      </section>

      <TestimonialSlider />

      {/* Program Services Mini Cards */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
           {[
             { name: 'Cardio', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
             { name: 'Shoulders', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
             { name: 'Abdominal Abs', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
             { name: 'Hands', icon: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11' }
           ].map((srv, idx) => (
             <motion.div key={idx} whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl text-center border border-gray-100 shadow-sm">
               <div className="w-16 h-16 mx-auto bg-[#FFF0F5] text-primary-pink rounded-2xl flex items-center justify-center mb-6">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={srv.icon} />
                 </svg>
               </div>
               <h4 className="font-poppins font-bold text-xl text-primary-dark">{srv.name}</h4>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Exercise Facts */}
      <section className="py-24 bg-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary-dark mb-10">Exercise Facts</h2>
          <ul className="space-y-4 mb-12 text-left md:text-center text-muted">
            <li className="flex items-center justify-center gap-3"><svg className="w-5 h-5 text-primary-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Suspendisse in est ante in nibh mauris cursus mattis.</li>
            <li className="flex items-center justify-center gap-3"><svg className="w-5 h-5 text-primary-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.</li>
            <li className="flex items-center justify-center gap-3"><svg className="w-5 h-5 text-primary-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Feugiat in fermentum posuere urna nec tincidunt praesent.</li>
          </ul>
          <Link to="/pricing-table" className="inline-block bg-primary-pink text-white rounded-full px-10 py-4 font-poppins font-semibold hover:bg-[#d44c77] hover:scale-105 transition-all shadow-lg">
            Join Now
          </Link>
        </div>
      </section>

      {/* Instagram Grid Footer Strip */}
      <div className="w-full h-64 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=1200&q=80" alt="Instagram Strip" className="w-full h-full object-cover" />
      </div>

    </motion.div>
  );
}
