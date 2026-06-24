import { motion } from 'framer-motion';

export default function TrustBanner() {
  const logos = [
    { name: "Men's Health", icon: "💪" },
    { name: "Women's Fitness", icon: "🧘‍♀️" },
    { name: "Healthline", icon: "⚕️" },
    { name: "FitLife Mag", icon: "🏆" },
    { name: "Global Wellness", icon: "🌍" },
  ];

  return (
    <section className="bg-primary-dark py-12 overflow-hidden border-t-4 border-primary-lime">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <p className="text-center text-gray-400 font-poppins text-sm uppercase tracking-widest mb-8">
          Trusted By & Featured In
        </p>
        
        {/* Scrolling Banner Container */}
        <div className="relative flex overflow-x-hidden group">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap items-center min-w-full justify-around md:justify-center">
            {logos.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 grayscale hover:grayscale-0 cursor-default">
                <span className="text-3xl">{logo.icon}</span>
                <span className="font-poppins font-bold text-lg tracking-wide">{logo.name}</span>
              </div>
            ))}
            {/* Duplicate for infinite effect on desktop if needed, though justify-center usually handles it */}
            <div className="md:hidden flex space-x-12 items-center">
              {logos.map((logo, idx) => (
                <div key={`dup-${idx}`} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 grayscale hover:grayscale-0">
                  <span className="text-3xl">{logo.icon}</span>
                  <span className="font-poppins font-bold text-lg tracking-wide">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Adding a quick inline style for the marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
