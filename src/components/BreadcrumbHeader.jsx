import { Link } from 'react-router-dom';

export default function BreadcrumbHeader({ title, current, breadcrumbs = [] }) {
  return (
    <div className="bg-primary-dark pt-20 pb-12 text-center text-white px-4">
      <div className="text-[13px] mb-4 font-inter text-gray-300">
        <Link to="/" className="hover:text-primary-pink transition-colors">Home</Link>
        {breadcrumbs.map((crumb, idx) => (
          <span key={idx}>
            <span className="mx-2">&gt;</span>
            <Link to={crumb.path} className="hover:text-primary-pink transition-colors">{crumb.name}</Link>
          </span>
        ))}
        <span className="mx-2">&gt;</span>
        <span className="text-white">{current}</span>
      </div>
      <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white">{title}</h2>
    </div>
  );
}
