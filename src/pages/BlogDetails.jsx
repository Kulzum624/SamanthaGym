import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import NewsletterSection from '../components/NewsletterSection';
import img6 from '../assets/images/6.webp';

export default function BlogDetails() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-[120px]">

      {/* Full-width Hero */}
      <section className="w-full h-[400px] md:h-[500px]">
        <img
          src={img6}
          alt="Blog Details Hero"
          className="w-full h-full object-cover"
        />
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">

          {/* Header Info */}
          <div className="flex justify-center gap-2 mb-6">
            <span className="inline-block bg-primary-lime/10 text-primary-lime px-4 py-1.5 rounded-full text-xs font-semibold capitalize">lifestyle</span>
            <span className="inline-block bg-primary-lime/10 text-primary-lime px-4 py-1.5 rounded-full text-xs font-semibold capitalize">health</span>
          </div>

          <h2 className="font-poppins font-bold text-3xl md:text-[40px] text-center text-primary-dark mb-8 leading-tight">
            H2 Training at home: how to maintain the tone
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted font-inter pb-8 border-b border-gray-100 mb-8">
            <span className="font-medium text-primary-dark">By Author Name</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>June 01, 2021</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>Share</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>Comments</span>
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none text-muted leading-relaxed">
            <p className="text-xl font-medium text-primary-dark mb-6">
              Commodo ullamcorper a lacus vestibulum sed arcu. Sollicitudin nibh sit amet commodo nulla facilisi nullam. Id interdum velit laoreet id donec ultrices tincidunt.
            </p>

            <p className="mb-6">
              Pharetra massa massa ultricies mi quis hendrerit dolor magna. Lectus sit amet est placerat in egestas erat. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc.
            </p>
            <p className="mb-10">
              Morbi blandit cursus risus at ultrices mi tempus. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Justo donec enim diam vulputate ut pharetra sit.
            </p>

            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
              alt="Article Inline"
              className="w-full rounded-2xl mb-10"
            />

            <blockquote className="italic text-gray-500 border-l-4 border-primary-lime pl-6 py-2 mb-10 bg-light rounded-r-xl">
              *Nunc vel risus commodo viverra maecenas accumsan. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Sem nulla pharetra diam sit amet nisl suscipit.
            </blockquote>

            <h3 className="font-poppins font-bold text-2xl text-primary-dark mb-6">H3 Aliquet lectus proin nibh nisl...</h3>
            <p className="mb-6">Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Elementum integer enim neque volutpat ac tincidunt. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue.</p>

            <ul className="list-disc pl-6 space-y-2 mb-10 text-primary-dark">
              <li># Elementum nibh tellus molestie nunc non blandit massa enim nec</li>
              <li># Vitae tortor condimentum lacinia quis vel eros donec ac odio</li>
              <li># Enim neque volutpat ac tincidunt vitae semper quis</li>
              <li># Amet consectetur adipiscing elit ut aliquam purus sit amet</li>
            </ul>

            <h4 className="font-poppins font-bold text-xl text-primary-dark mb-4">H4 subheading</h4>
            <p className="mb-10">Id faucibus nisl tincidunt eget nullam non. Sagittis eu volutpat odio facilisis mauris sit amet. Egestas diam in arcu cursus euismod quis viverra. Facilisi etiam dignissim diam quis enim. Amet consectetur adipiscing elit ut aliquam purus sit amet.</p>

            {/* Styled blockquote */}
            <div className="bg-primary-dark p-10 text-center mb-10 relative mt-16">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary-lime rounded-full flex items-center justify-center text-white text-3xl font-serif">
                "
              </div>
              <p className="font-poppins italic text-2xl text-white mb-6">
                "You have to do something in your life that is honorable and not cowardly if you are to live in peace with yourself."
              </p>
              <span className="text-primary-lime font-semibold uppercase tracking-wider text-sm">(Larry Brown)</span>
            </div>

            <h5 className="font-poppins font-bold text-lg text-primary-dark mb-4">H5 subheading</h5>
            <p className="mb-10">Pulvinar pellentesque habitant morbi tristique senectus et. Vitae sapien pellentesque habitant morbi tristique. Egestas dui id ornare arcu. At auctor urna nunc id. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat.</p>

            {/* Table */}
            <div className="overflow-x-auto mb-10 border border-gray-100 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary-dark text-white">
                    <th className="p-4 font-poppins font-semibold border-b border-gray-700">Table Header 1</th>
                    <th className="p-4 font-poppins font-semibold border-b border-gray-700">Table Header 2</th>
                    <th className="p-4 font-poppins font-semibold border-b border-gray-700">Table Header 3</th>
                    <th className="p-4 font-poppins font-semibold border-b border-gray-700">Table Header 4</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-light'}>
                      <td className="p-4 border-b border-gray-100">Section 1</td>
                      <td className="p-4 border-b border-gray-100">Section 2</td>
                      <td className="p-4 border-b border-gray-100">Section 3</td>
                      <td className="p-4 border-b border-gray-100">Section 4</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mb-8">Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Est placerat in egestas erat imperdiet sed euismod nisi porta. Ut tortor pretium viverra suspendisse potenti nullam ac.</p>

            <div className="flex flex-col sm:flex-row justify-between items-center py-6 border-y border-gray-100 mb-12">
              <span className="text-sm font-medium text-primary-dark">Updated: June 01, 2021</span>
              <div className="flex gap-2 mt-4 sm:mt-0">
                <span className="inline-block bg-primary-lime/10 text-primary-lime px-4 py-1.5 rounded-full text-xs font-semibold capitalize">lifestyle</span>
                <span className="inline-block bg-primary-lime/10 text-primary-lime px-4 py-1.5 rounded-full text-xs font-semibold capitalize">health</span>
              </div>
            </div>
          </article>

          {/* Author Bio Card */}
          <div className="bg-light p-8 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
              alt="Hana Evans"
              className="w-24 h-24 rounded-full object-cover shrink-0"
            />
            <div className="text-center md:text-left">
              <h4 className="font-poppins font-bold text-xl text-primary-dark mb-2">Hana Evans</h4>
              <p className="text-muted text-sm mb-4 leading-relaxed">
                Viverra vitae congue eu consequat ac felis donec et odio. Faucibus scelerisque eleifend donec pretium. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt.
              </p>
              <div className="flex justify-center md:justify-start gap-3">
                {/* Social Icons */}
                <a href="#" className="w-8 h-8 rounded-full bg-primary-lime/10 text-primary-lime flex items-center justify-center hover:bg-primary-lime hover:text-white transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary-lime/10 text-primary-lime flex items-center justify-center hover:bg-primary-lime hover:text-white transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary-lime/10 text-primary-lime flex items-center justify-center hover:bg-primary-lime hover:text-white transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Post Navigation */}
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-16">
            <Link to="#" className="flex items-center gap-4 group">
              <div className="text-primary-lime shrink-0 transition-transform group-hover:-translate-x-1">&larr;</div>
              <span className="font-poppins font-semibold text-primary-dark group-hover:text-primary-lime transition-colors">7 Tips for Effective Practice</span>
            </Link>
            <Link to="#" className="flex items-center justify-end gap-4 group text-right">
              <span className="font-poppins font-semibold text-primary-dark group-hover:text-primary-lime transition-colors">5 reasons to start playing sports</span>
              <div className="text-primary-lime shrink-0 transition-transform group-hover:translate-x-1">&rarr;</div>
            </Link>
          </div>

          {/* Comments */}
          <div className="mb-16">
            <h3 className="font-poppins font-bold text-2xl text-primary-dark mb-8">5 Comments</h3>
            <div className="space-y-8">
              {[
                { name: "Rosy Aldridge", date: "June 01, 2021", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80", isReply: false },
                { name: "John Doe", date: "June 02, 2021", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80", isReply: true },
                { name: "Jane Smith", date: "June 03, 2021", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80", isReply: false },
                { name: "Rosy Aldridge", date: "June 04, 2021", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80", isReply: false },
                { name: "John Doe", date: "June 05, 2021", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80", isReply: true }
              ].map((comment, idx) => (
                <div key={idx} className={`flex gap-6 ${comment.isReply ? 'ml-12 md:ml-20' : ''}`}>
                  <img src={comment.img} alt={comment.name} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover shrink-0" />
                  <div className="flex-1 bg-light p-6 rounded-2xl rounded-tl-none">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h5 className="font-poppins font-bold text-primary-dark">{comment.name}</h5>
                        <span className="text-xs text-muted">{comment.date}</span>
                      </div>
                      <button className="text-primary-lime text-sm font-medium hover:underline">Reply</button>
                    </div>
                    <p className="text-muted text-sm leading-relaxed mt-2">
                      Amet dictum sit amet justo donec enim diam vulputate. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Tincidunt augue interdum velit euismod.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button className="px-8 py-3 btn-lime text-sm transition-all">
                View More Comments
              </button>
            </div>
          </div>

          {/* Comment Form */}
          <div>
            <h3 className="font-poppins font-bold text-2xl text-primary-dark mb-2">Leave a Reply</h3>
            <p className="text-sm text-muted mb-8 italic">*Your email address will not be published</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name*" className="w-full h-14 px-6 border border-gray-200 focus:outline-none focus:border-primary-lime bg-light" required />
                <input type="email" placeholder="Email*" className="w-full h-14 px-6 border border-gray-200 focus:outline-none focus:border-primary-lime bg-light" required />
              </div>
              <input type="url" placeholder="Website" className="w-full h-14 px-6 border border-gray-200 focus:outline-none focus:border-primary-lime bg-light" />
              <textarea placeholder="Comment*" rows="6" className="w-full p-6 border border-gray-200 focus:outline-none focus:border-primary-lime bg-light resize-none" required></textarea>
              <button type="submit" className="px-10 py-4 bg-primary-lime text-black font-poppins font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-md">
                Submit
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Related Posts */}
      <section className="py-24 bg-light border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <h3 className="font-poppins font-bold text-3xl text-primary-dark mb-12 text-center">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Re-use BlogStyle2 cards style for related posts */}
            <div className="bg-white overflow-hidden shadow-sm flex flex-col sm:flex-row-reverse border border-gray-100 group">
              <div className="w-full sm:w-[200px] h-48 sm:h-auto overflow-hidden">
                <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80" alt="Related 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center">
                <span className="text-xs text-primary-lime font-semibold uppercase tracking-wide mb-2">#food</span>
                <h4 className="font-poppins font-bold text-lg text-primary-dark mb-2 group-hover:text-primary-lime transition-colors">How diet influences flexibility</h4>
                <span className="text-xs text-muted">June 06, 2022</span>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow-sm flex flex-col sm:flex-row-reverse border border-gray-100 group">
              <div className="w-full sm:w-[200px] h-48 sm:h-auto overflow-hidden">
                <img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&q=80" alt="Related 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center">
                <span className="text-xs text-primary-lime font-semibold uppercase tracking-wide mb-2">#lifestyle</span>
                <h4 className="font-poppins font-bold text-lg text-primary-dark mb-2 group-hover:text-primary-lime transition-colors">7 Tips for Effective Practice</h4>
                <span className="text-xs text-muted">June 06, 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection />
    </motion.div>
  );
}





