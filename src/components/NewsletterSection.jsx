export default function NewsletterSection() {
  return (
    <section className="bg-light py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-poppins font-bold text-2xl md:text-[28px] text-primary-dark mb-4">
          Subscribe to Newsletter
        </h2>
        <p className="text-muted text-[16px] mb-8">
          Duis at consectetur lorem donec massa sapien faucibus et molestie. Ut etiam sit amet nisl purus. Massa tempor nec feugiat nisl pretium.
        </p>
        <form className="relative mb-4" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full h-14 pl-6 pr-[120px] rounded-full border border-borderLight focus:outline-none focus:border-primary-pink transition-colors font-inter"
            required
          />
          <button 
            type="submit" 
            className="absolute right-1 top-1 h-12 bg-primary-pink text-white px-8 rounded-full font-poppins font-semibold text-[15px] hover:bg-[#d44c77] transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="text-[#9CA3AF] text-[13px] italic">
          Nec feugiat in fermentum posuere urna nec tincidunt praesent.
        </p>
      </div>
    </section>
  );
}
