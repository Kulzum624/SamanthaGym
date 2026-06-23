import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProgramCard({ image, title, isFeatured }) {
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      className={`flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border ${isFeatured ? 'border-primary-lime border-2' : 'border-gray-100'} transition-all duration-300`}
    >
      <div className="w-full md:w-[280px] h-64 md:h-auto overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex-1 p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block bg-primary-lime/10 text-primary-lime px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            {title}
          </span>
          <span className="inline-flex items-center text-muted text-sm gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Workout Duration
          </span>
        </div>
        
        <h3 className="font-poppins font-bold text-2xl text-primary-dark mb-4">{title}</h3>
        <p className="text-muted text-sm mb-6 line-clamp-2">
          Duis at consectetur lorem donec massa sapien faucibus et molestie. Ut etiam sit amet nisl purus. Massa tempor nec feugiat nisl pretium.
        </p>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-8">
          {[
            'Eget egestas purus viverra accumsan',
            'Consectetur adipiscing elit',
            'In egestas erat imperdiet',
            'Morbi tristique senectus et netus'
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-primary-dark">
              <svg className="w-4 h-4 text-primary-lime mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              {item}
            </li>
          ))}
        </ul>
        
        <Link 
          to="/portfolio-details" 
          className="inline-block bg-primary-lime text-black px-8 py-3 rounded-full font-poppins font-medium hover:brightness-110 transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          Join Now
        </Link>
      </div>
    </motion.div>
  );
}





