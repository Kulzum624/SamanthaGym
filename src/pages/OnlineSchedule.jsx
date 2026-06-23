import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BreadcrumbHeader from '../components/BreadcrumbHeader';
import NewsletterSection from '../components/NewsletterSection';

export default function OnlineSchedule() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const meetings = [
    { date: "28 June", start: "04:00 pm", duration: "30min", title: "A Guide to At-home Workouts for Beginners", id: "127623693235", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
    { date: "03 July", start: "05:00 pm", duration: "377min", title: "How to Stick to a Diet: 7 Tips That Make Dieting Easier", id: "127623693235", img: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?w=400&q=80" },
    { date: "11 July", start: "04:20 pm", duration: "45min", title: "30 Minute HIIT Workout You Can Do at Home", id: "127623693235", img: "https://images.unsplash.com/photo-1593476123561-9516f2097158?w=400&q=80" },
    { date: "17 July", start: "05:00 pm", duration: "32min", title: "6 Core Exercises to Get and Keep Strong Abs", id: "127623693235", img: "https://images.unsplash.com/photo-1604480132736-44c188fe4d20?w=400&q=80" },
    { date: "23 July", start: "04:00 pm", duration: "40min", title: "15-day Summer Shape-up Program", id: "127623693235", img: "https://images.unsplash.com/photo-1596357395217-80de13130e92?w=400&q=80" },
    { date: "27 July", start: "04:30 pm", duration: "40min", title: "How to Stay Active When You're Traveling", id: "127623693235", img: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=400&q=80" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-[128px]">
      <BreadcrumbHeader title="Online Schedule" current="Online Schedule" breadcrumbs={[{ name: 'Schedule', path: '/schedule' }]} />

      {/* Header Video Placeholder */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=700&q=80" 
              alt="Online Schedule Header" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors group-hover:bg-black/10">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-24 h-24 bg-red-600 text-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting List */}
      <section className="pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 space-y-6">
          {meetings.map((m, idx) => (
            <motion.div 
              key={idx} 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col md:flex-row items-center gap-8"
            >
              {/* Date */}
              <div className="w-full md:w-32 text-center md:text-left shrink-0">
                <div className="font-poppins font-bold text-3xl text-primary-pink">
                  {m.date.split(' ')[0]}
                </div>
                <div className="font-poppins font-medium text-lg text-primary-dark">
                  {m.date.split(' ')[1]}
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-48 h-32 shrink-0">
                <img src={m.img} alt={m.title} className="w-full h-full object-cover rounded-xl" />
              </div>

              {/* Details */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start gap-4 text-sm text-muted mb-2 font-inter">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Start: {m.start}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {m.duration}
                  </span>
                </div>
                <h4 className="font-poppins font-bold text-xl text-primary-dark mb-2">{m.title}</h4>
                <div className="text-sm font-medium text-primary-dark">Meeting ID: {m.id}</div>
              </div>

              {/* Action */}
              <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0 text-center md:text-right">
                <a href="#" className="inline-block bg-teal-500 text-white px-6 py-3 rounded-full font-poppins font-medium text-sm hover:bg-teal-600 transition-colors shadow-md hover:shadow-lg w-full md:w-auto">
                  Join Via Zoom
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next Workout Countdown + Instagram strip */}
      <section className="bg-primary-dark text-white text-center">
         <div className="py-16 px-4">
            <h3 className="font-poppins font-bold text-3xl mb-4">Don't miss the next workout:</h3>
            <div className="font-poppins font-extrabold text-[40px] text-primary-pink mb-8">
              22 June · 6:30pm
            </div>
         </div>
         <div className="w-full h-48 md:h-64 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=1200&q=80" alt="Instagram Strip" className="w-full h-full object-cover opacity-80" />
         </div>
      </section>

      <NewsletterSection />
    </motion.div>
  );
}
