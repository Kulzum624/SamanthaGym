import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Col 1 */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="font-poppins font-black text-[22px] tracking-tight text-white uppercase relative">
                SAMANTHA
                <span className="absolute bottom-0 left-0 w-full h-[4px] bg-primary-lime" />
              </span>
            </Link>
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
              Elementum facilisis leo vel fringilla est ullamcorper. Ac tortor vitae purus faucibus ornare suspendisse.
            </p>
            <div className="flex gap-3">
              {[
                <path key="fb" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
                <path key="ig" fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />,
                <path key="tw" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />,
              ].map((path, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-white/10 flex items-center justify-center text-white hover:bg-primary-lime hover:text-black transition-all duration-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{path}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-poppins font-bold text-white text-xs uppercase tracking-[0.15em] mb-6 relative inline-block">
              Menu
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-primary-lime" />
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Schedule', path: '/schedule' },
                { label: 'Blog', path: '/blog-style-1' },
                { label: 'Contact', path: '/contact' },
                { label: 'Online Schedule', path: '/online-schedule' },
              ].map(item => (
                <li key={item.label}>
                  <Link to={item.path} className="text-[#9CA3AF] text-[14px] hover:text-primary-lime transition-colors uppercase tracking-wide">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-poppins font-bold text-white text-xs uppercase tracking-[0.15em] mb-6 relative inline-block">
              Contacts
              <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-primary-lime" />
            </h4>
            <ul className="space-y-4 text-[#9CA3AF] text-sm">
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-primary-lime shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Themeforest, Envato HQ 24 Fifth st., Los Angeles, USA</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-primary-lime shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+1234567890" className="hover:text-primary-lime transition-colors">+1 (234) 567 890</a>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-primary-lime shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:example@gmail.com" className="hover:text-primary-lime transition-colors">example@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9CA3AF] text-[13px]">
            © 2024 Samantha. All rights reserved.
          </p>
          <div className="flex gap-6 text-[#9CA3AF] text-[13px]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Term of Service</a>
            <a href="#" className="hover:text-white transition-colors">Legal info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}





