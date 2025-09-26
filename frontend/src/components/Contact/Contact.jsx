import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsSend } from 'react-icons/bs';

const Contact = () => {
  return (
    <section className='w-full' >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">

        <div className="space-y-8">
          <div className="">
            <h3 className='text-xl mb-4'>Let's Connect</h3>
            <p className='text-sm'>Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Feel free to reach out through any of the channels below.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className=""><AiOutlineMail size={24} /></div>
            <div className=''>
              <h6 className=''>Email</h6>
              <p className=''>winminthant.gwin@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className=""><AiOutlinePhone size={24} /></div>
            <div className=''>
              <h6 className=''>Phone</h6>
              <p className=''>(+959)773156667</p>
            </div>
          </div>

        </div>

        <div className="">
          <div className="backdrop-blur-[2px] border border-white/20 rounded-lg p-8">
            <h2 className='text-xl font-bold mb-4'>Send me a message</h2>
            <p className='text-sm'>Fill out the form below and I'll get back to you as soon as possible.</p>

            <div className="flex flex-col gap-4 my-8">
              <label htmlFor="name" className='text-sm'>Name<span className='text-red-500 ms-2'>*</span></label>
              <input type="text" name="name" id="name" className='rounded bg-gray-500/10 text-sm text-gray-100 outline-none border border-indigo-500/10 focus:border-indigo-300/50 px-4 py-2' placeholder='Your name' />
            </div>

            <div className="flex flex-col gap-4 my-8">
              <label htmlFor="email" className='text-sm'>Email<span className='text-red-500 ms-2'>*</span></label>
              <input type="text" name="email" id="email" className='rounded bg-gray-500/10 text-sm text-gray-100 outline-none border border-indigo-500/10 focus:border-indigo-300/50 px-4 py-2' placeholder='example@example.com' />
            </div>

            <div className="flex flex-col gap-4 my-8">
              <label htmlFor="message" className='text-sm'>Message<span className='text-red-500 ms-2'>*</span></label>
              <textarea name="message" id="message" className='rounded bg-gray-500/10 text-sm text-gray-100 outline-none border border-indigo-500/10 focus:border-indigo-300/50 px-4 py-2 resize-none' rows="4" placeholder='Your message here...' ></textarea>
            </div>

            <button type="submit" className="w-full flex justify-center items-center gap-4 bg-indigo-600 text-white rounded active:scale-95 transition mt-5 px-4 py-2">Send Message <BsSend /></button>

            <div className="text-center tracking-wide mt-4">
              <span className='text-[8px]'>Your message will be stored securely and I'll respond within 24 hours</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;