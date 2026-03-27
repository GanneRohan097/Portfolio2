import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser'
import Loading from '../Loading';
import { FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const email="gannerohan@gmail.com";
  const [sender,setSender]=useState();
  const [senderEmail,setSenderEmail]=useState();
  const [msg,setmsg]=useState();
  const [loading,setLoading]=useState(false);
  const [sent,setSent]=useState(false);
  console.log(sender);
  
const handleSend=()=>{
  setLoading(true);
   emailjs.send(
      "service_4d848wo",
      "template_ix8kd7f",
      {
         email:email,
         from:sender,
         name:senderEmail,
         msg:msg
      },
      "quL03Wa7MCnVTAAQm"
   )
   .then(
    ()=>{
       setLoading(false);
       setSent(true);
    },
    (error)=>{
      setLoading(false);
      setSent(false);
    }
   )
   setTimeout(()=>{
      setSent(false);
   },3000)
};

  return (
    <section id='contact' className='min-h-screen flex items-center justify-center py-20 relative'>
      <div className='max-w-6xl z-10 mx-auto px-4 w-full'>
        <div className='text-center mb-16'>
          <h1 className='text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 drop-shadow-sm'>
            Get In Touch
          </h1>
          <p className='text-gray-400 text-base max-w-2xl mx-auto'>
            Feel free to reach out to me via email or connect with me on GitHub and LinkedIn. I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Social Links Side */}
          <div className='flex flex-col gap-6 lg:w-1/2'>
            <a href='mailto:gannerohan@gmail.com' className='group bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-blue-500/50 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex items-center gap-6'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                <div className='bg-blue-500/20 text-blue-400 p-4 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 z-10'>
                    <MdEmail className='text-3xl' />
                </div>
                <div className='z-10'>
                    <h2 className='text-lg font-bold text-white mb-1'>Email</h2>
                    <p className='text-gray-400 text-sm group-hover:text-gray-300 transition-colors'>gannerohan@gmail.com</p>
                </div>
            </a>

            <a href='https://github.com/GanneRohan097' target='blank' className='group bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-purple-500/50 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex items-center gap-6'>
                <div className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                <div className='bg-purple-500/20 text-purple-400 p-4 rounded-2xl group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300 z-10'>
                    <FaGithub className='text-3xl' />
                </div>
                <div className='flex-grow z-10'>
                    <h2 className='text-lg font-bold text-white mb-1'>GitHub</h2>
                    <p className='text-gray-400 text-sm group-hover:text-gray-300 transition-colors'>GanneRohan097</p>
                </div>
                <div className='z-10 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm font-medium text-white group-hover:bg-purple-500 transition-colors'>
                    View Profile
                </div>
            </a>

            <a href='https://www.linkedin.com/in/rohan-ganne-266082318/' target='blank' className='group bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-blue-400/50 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex items-center gap-6'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                <div className='bg-blue-400/20 text-blue-400 p-4 rounded-2xl group-hover:bg-blue-400 group-hover:text-white transition-colors duration-300 z-10'>
                    <FaLinkedin className='text-3xl' />
                </div>
                <div className='flex-grow z-10'>
                    <h2 className='text-lg font-bold text-white mb-1'>LinkedIn</h2>
                    <p className='text-gray-400 text-sm group-hover:text-gray-300 transition-colors'>Rohan Ganne</p>
                </div>
                <div className='z-10 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm font-medium text-white group-hover:bg-blue-400 transition-colors'>
                    View Profile
                </div>
            </a>
          </div>

          {/* Contact Form Side */}
          <div className='bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-3xl lg:w-1/2 flex flex-col justify-between relative shadow-[0_0_30px_rgba(59,130,246,0.05)]'>
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/5 rounded-3xl pointer-events-none'></div>
            <div className='relative z-10'>
              <h2 className='text-xl font-bold text-white mb-6'>Send me a message</h2>
              
              <div className='mb-4'>
                <label className='block text-gray-400 text-sm font-medium mb-2'>Name</label>
                <input onChange={(e)=>setSender(e.target.value)} type='text' className='w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600' placeholder='Your name' />
              </div>
              
              <div className='mb-4'>
                <label className='block text-gray-400 text-sm font-medium mb-2'>Email</label>
                <input onChange={(e)=>setSenderEmail(e.target.value)} type='email' className='w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600' placeholder='Your email' />
              </div>
              
              <div className='mb-6'>
                <label className='block text-gray-400 text-sm font-medium mb-2'>Message</label>
                <textarea onChange={(e)=>setmsg(e.target.value)} className='w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600 resize-none' rows="4" placeholder='Your message...'></textarea>
              </div>
            </div>
            
            <div className='relative z-10 flex items-center justify-between'>
                {loading ? (
                    <div className='w-32 flex justify-center py-3'><Loading /></div>
                ) : (
                    <button onClick={handleSend} className='w-full sm:w-auto relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-blue-600 px-8 font-medium text-white shadow-xl transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:scale-95'>
                        Send Message
                    </button>
                )}
                
                {sent && (
                    <div className='flex items-center text-green-400 bg-green-400/10 px-4 py-2 rounded-lg border border-green-500/20 animate-fade-in'>
                        <FaCheckCircle className='mr-2' />
                        <span className='font-medium'>Sent Successfully</span>
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
