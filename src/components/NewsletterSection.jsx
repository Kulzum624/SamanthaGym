export default function NewsletterSection() {
  return (
    <section className="bg-primary-dark py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-poppins font-black text-2xl md:text-3xl text-white uppercase tracking-tight mb-2 heading-dots">
          Stay Updated
        </h2>
        <p className="text-gray-400 text-[15px] mb-8">
          Stay updated with the latest news.
        </p>
        <form className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 h-14 px-6 bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-primary-lime transition-colors font-inter"
            required
          />
          <button
            type="submit"
            className="btn-lime h-14 px-8 text-sm whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}





