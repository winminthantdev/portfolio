import React from 'react';

const Contact = () => {
  return (
    <section className="p-8 md:p-16 bg-bg-start text-text-primary text-center">
      <h2 className="text-2xl md:text-5xl mb-12 font-bold text-primary-accent">Contact Me</h2>
      <div className="flex flex-col gap-8 max-w-xl mx-auto bg-bg-end p-8 md:p-12
                      rounded-xl shadow-2xl border border-border-color">

        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2">Phone:</h3>
          <a href="tel:+959263038660" className="text-sm md:text-xl text-text-secondary hover:text-hover-glow transition-colors duration-200">
            +959 2630 38 660 
          </a>
        </div>

        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2">Email:</h3>
          <a href="mailto:winminthant.gwin@gmail.com" className="text-sm md:text-xl text-text-secondary hover:text-hover-glow transition-colors duration-200">
            winminthant.gwin@gmail.com 
          </a>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-text-primary mb-2">Address:</h3>
          <p className="text-sm md:text-xl text-text-secondary m-0">
            Hlaing, Yangon
          </p>
        </div>

        {/* Simple Contact Form Placeholder */}
        <div className="mt-8 pt-8 border-t border-border-color">
          <h3 className="text-2xl font-semibold text-text-primary mb-6">Send me a message!</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md border border-border-color bg-bg-start text-text-primary
                         placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-accent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md border border-border-color bg-bg-start text-text-primary
                         placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-accent"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded-md border border-border-color bg-bg-start text-text-primary
                         placeholder-text-secondary resize-y focus:outline-none focus:ring-2 focus:ring-primary-accent"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 text-lg bg-secondary-accent text-text-primary
                         rounded-md shadow-lg hover:bg-hover-glow transition-all duration-300
                         transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-hover-glow mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;