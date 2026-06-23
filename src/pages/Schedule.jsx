import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BreadcrumbHeader from '../components/BreadcrumbHeader';
import BMICalculator from '../components/BMICalculator';
import NewsletterSection from '../components/NewsletterSection';
import img13 from '../assets/images/13.webp';
import img6 from '../assets/images/6.webp';
import diet from '../assets/images/diet.webp';
import img14 from '../assets/images/14.webp';

export default function Schedule() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const scheduleData = [
    { time: "9:00 am - 10:00 am", mon: "Basic Exercises", tue: "", wed: "Basic Exercises", thu: "", fri: "Basic Exercises", sat: "" },
    { time: "9:00 am - 10:00 am", mon: "Advanced Exercises", tue: "", wed: "Advanced Exercises", thu: "", fri: "Advanced Exercises", sat: "" },
    { time: "10:00 am - 11:00 am", mon: "", tue: "Bodybuilding Local", wed: "", thu: "Bodybuilding Local", fri: "", sat: "Bodybuilding Local" },
    { time: "10:00 am - 11:00 am", mon: "", tue: "Stretching Workout", wed: "", thu: "Stretching Workout", fri: "", sat: "Stretching Workout" },
  ];

  const onlineMeetings = [
    { id: 1, date: "28 June", start: "04:00 pm", duration: "30min", title: "A Guide to At-home Workouts for Beginners", meetingId: "127623693235", img: [img6] },
    { id: 2, date: "03 July", start: "05:00 pm", duration: "377min", title: "How to Stick to a Diet: 7 Tips That Make Dieting Easier", meetingId: "127623693235", img: [diet] },
    { id: 3, date: "11 July", start: "04:20 pm", duration: "45min", title: "30 Minute HIIT Workout You Can Do at Home", meetingId: "127623693235", img: [img14] },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-[120px]">
      <BreadcrumbHeader title="Schedule" current="Schedule" />

      {/* Header Image */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={img13}
              alt="Schedule Header"
              className="w-full h-full object-cover object-[50%_60%]"
            />
            <div className="absolute top-6 right-6 bg-primary-lime w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Table Desktop */}
      <section className="pb-24 bg-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="overflow-x-auto border border-gray-100 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary-dark text-white">
                  {['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, i) => (
                    <th key={i} className="p-4 font-poppins font-semibold border-b border-gray-700">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-primary-lime/10'}>
                    <td className="p-4 font-medium text-muted border-b border-gray-100">{row.time}</td>
                    {['mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map((day, j) => (
                      <td key={j} className={`p-4 border-b border-gray-100 ${row[day] ? 'bg-primary-lime/5' : ''}`}>
                        {row[day] && (
                          <div className="font-poppins font-semibold text-primary-dark hover:text-primary-lime cursor-pointer transition-colors">
                            {row[day]}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Schedule Mobile (Accordion) */}
      <section className="pb-24 bg-white md:hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="font-poppins font-bold text-2xl text-primary-dark mb-6">Weekly Schedule</h3>
          <div className="space-y-4">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, idx) => (
              <details key={idx} className="bg-light rounded-xl border border-gray-100 [&_summary::-webkit-details-marker]:hidden">
                <summary className="font-poppins font-semibold text-lg p-4 cursor-pointer flex justify-between items-center text-primary-dark">
                  {day}
                  <svg className="w-5 h-5 text-primary-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="p-4 pt-0 border-t border-gray-200">
                  {scheduleData.map((row, i) => {
                    const dayKey = day.substring(0, 3).toLowerCase();
                    if (row[dayKey]) {
                      return (
                        <div key={i} className="py-3 border-b border-gray-200 last:border-0 flex justify-between items-center">
                          <span className="font-medium text-primary-dark">{row[dayKey]}</span>
                          <span className="text-sm text-muted">{row.time}</span>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* BMI Calculator Light Variant */}
      <div className="bg-light">
        <BMICalculator variant="light" />
      </div>

      {/* Upcoming Online Meetings */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <motion.h3
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="font-poppins font-bold text-3xl md:text-[36px] text-primary-dark"
            >
              Upcoming online meetings
            </motion.h3>
            <Link to="/online-schedule" className="text-primary-lime font-semibold hover:underline flex items-center gap-2">
              View More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {onlineMeetings.map((meeting) => (
              <motion.div
                key={meeting.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="bg-white overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={meeting.img} alt={meeting.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-primary-lime text-black px-4 py-1.5 rounded-full text-sm font-semibold">
                    {meeting.date}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-4 text-sm text-muted mb-4 font-inter">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Start: {meeting.start}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {meeting.duration}
                    </span>
                  </div>
                  <h4 className="font-poppins font-bold text-xl text-primary-dark mb-4 group-hover:text-primary-lime transition-colors line-clamp-2">
                    {meeting.title}
                  </h4>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-primary-dark">Meeting ID: {meeting.meetingId}</span>
                    <a href="#" className="text-teal-500 font-semibold text-sm hover:underline">Join Meeting Via Zoom App</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Workout CTA */}
      <section className="relative flex flex-col md:flex-row h-[500px]">
        <div className="w-full md:w-1/2 h-full">
          <img src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=700&q=80" alt="CTA 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 relative h-full flex items-center justify-center p-12">
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=80)' }} />
          <div className="absolute inset-0 bg-[#1C1C2E]/80 z-0" />
          <div className="relative z-10 text-center max-w-sm">
            <h3 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-8 leading-tight">Start changing your life now</h3>
            <Link to="/pricing-table" className="inline-block bg-primary-lime text-black px-10 py-4 font-poppins font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg">
              Join Now
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </motion.div>
  );
}





