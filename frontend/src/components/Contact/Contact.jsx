import React from 'react';

const Contact = () => {
  return (
    <section className="p-8 md:p-16">
      <form className="flex flex-col items-center text-sm border shadow rounded-xl p-8">
            <h2 className="text-4xl md:text-5xl mb-12 font-bold" style={{ color: "var(--color-text-primary)" }} >Contact Me</h2>
            <p className="text-sm text-gray-500 text-center pb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text.</p>
            
            <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-[#cbd5e1]" htmlFor="name">Your Name</label>
                    <input className="h-12 p-2 mt-2 w-full border  rounded outline-none focus:border-indigo-300" type="text" required />
                </div>
                <div className="w-full">
                    <label className="text-[#cbd5e1]" htmlFor="name">Your Email</label>
                    <input className="h-12 p-2 mt-2 w-full border rounded outline-none focus:border-indigo-300" type="email" required />
                </div>
            </div>
        
            <div className="mt-6 w-[350px] md:w-[700px]">
                <label className="text-[#cbd5e1]" htmlFor="name">Message</label>
                <textarea className="w-full mt-2 p-2 h-40 border rounded resize-none outline-none focus:border-indigo-300" required></textarea>
            </div>
        
            <button type="submit" className="mt-5 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition">Send Message</button>
    </form>
    </section>
  );
}

export default Contact;