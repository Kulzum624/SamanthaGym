import { Link } from 'react-router-dom';

export default function BreadcrumbHeader({ title, current, breadcrumbs = [] }) {
  return (
    <div className="bg-primary-dark pt-24 pb-16 text-center text-white px-4 relative overflow-hidden">
      {/* Decorative dot grid */}
      <div className="absolute top-0 right-0 w-48 h-full dot-grid-lime opacity-20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 dot-grid-lime opacity-10" />

      <div className="relative z-10">
        <div className="text-[12px] mb-5 font-poppins uppercase tracking-[0.12em] text-gray-400">
          <Link to="/" className="hover:text-primary-lime transition-colors">Home</Link>
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx}>
              <span className="mx-2 text-gray-600">/</span>
              <Link to={crumb.path} className="hover:text-primary-lime transition-colors">{crumb.name}</Link>
            </span>
          ))}
          <span className="mx-2 text-gray-600">/</span>
          <span className="text-primary-lime">{current}</span>
        </div>
        <h2 className="font-poppins font-black text-4xl md:text-5xl text-white uppercase tracking-tight heading-dots">
          {title}
        </h2>
      </div>
    </div>
  );
}





