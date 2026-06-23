import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BreadcrumbHeader from '../components/BreadcrumbHeader';
import NewsletterSection from '../components/NewsletterSection';
import img6 from '../assets/images/6.webp';

export default function BlogStyle1() {
  const posts = [
    {
      title: "How diet influences flexibility",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80",
      cat: "Food",
      author: "By Author Name",
      date: "June 06, 2022",
      comments: "3",
      views: "87"
    },
    {
      title: "7 Tips for Effective Practice",
      img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=900&q=80",
      cat: "lifestyle",
      author: "By Author Name",
      date: "June 06, 2022",
      comments: "5",
      views: "87"
    },
    {
      title: "Training at home: how to maintain the tone",
      img: img6,
      cat: "lifestyle",
      cat2: "health",
      author: "By Author Name",
      date: "June 06, 2022",
      comments: "2",
      views: "102"
    },
    {
      title: "5 reasons to start playing sports",
      img: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=900&q=80",
      cat: "lifestyle",
      cat2: "health",
      author: "By Author Name",
      date: "June 06, 2022",
      comments: "0",
      views: "45"
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-[120px]">
      <BreadcrumbHeader
        title="Healthy Tips & Tricks"
        current="Blog Style 1"
        breadcrumbs={[{ name: 'Blog', path: '#' }]}
      />

      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 space-y-12">
          {posts.map((post, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="flex flex-col md:flex-row bg-white overflow-hidden border border-gray-100 transition-all duration-300 group"
            >
              {/* Left Image */}
              <div className="w-full md:w-[400px] h-64 md:h-auto overflow-hidden shrink-0">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Content */}
              <div className="p-8 flex flex-col justify-center flex-1">
                <div className="flex gap-2 mb-4">
                  <span className="inline-block bg-primary-lime/10 text-primary-lime px-4 py-1.5 rounded-full text-xs font-semibold capitalize tracking-wide">
                    {post.cat}
                  </span>
                  {post.cat2 && (
                    <span className="inline-block bg-primary-lime/10 text-primary-lime px-4 py-1.5 rounded-full text-xs font-semibold capitalize tracking-wide">
                      {post.cat2}
                    </span>
                  )}
                </div>

                <h3 className="font-poppins font-bold text-2xl md:text-3xl text-primary-dark mb-4 group-hover:text-primary-lime transition-colors">
                  <Link to="/blog-details">{post.title}</Link>
                </h3>

                <p className="text-muted leading-relaxed mb-6">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>

                <div className="mb-6">
                  <Link to="/blog-details" className="text-primary-dark font-semibold border-b-2 border-primary-dark pb-1 hover:text-primary-lime hover:border-primary-lime transition-colors">
                    Read More &rarr;
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted font-inter pt-4 border-t border-gray-100">
                  <span className="font-medium text-primary-dark">{post.author}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>Share</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    {post.comments} Comments
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="text-center mt-12">
            <button className="inline-block px-10 py-4 btn-lime text-sm transition-all">
              View more
            </button>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </motion.div>
  );
}





