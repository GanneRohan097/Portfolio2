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
    <section id='contact' className='min-h-screen flex items-center justify-center'>
      <div className='max-w-5xl z-10 mx-auto px-3 py-4 shadow-[10px_20px_500px_50px_rgba(59,130,246,0.50)]'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2'>
            Contact Me
          </h1>
          <p className='text-gray-300 mb-6 px-2'>
            Feel free to reach out to me via email or connect with me on Github and Linkedin
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex flex-col gap-4'>
            <div className='flex bg-slate-900 items-center border border-white/20 rounded p-3'>
              <MdEmail className='text-5xl bg-blue-500 rounded p-1 mr-2' />
              <div>
                <h2>Email</h2>
                <p className='text-gray-400'>gannerohan@gmail.com</p>
              </div>
            </div>

            <div className='bg-slate-900 border border-white/20 rounded p-3'>
              <div className='flex items-center'>
                <FaGithub className='text-5xl bg-gray-900 rounded p-1 mr-2' />
                <div>
                  <h2>Github</h2>
                  <p className='text-gray-400'>rohan097</p>
                </div>
              </div>
              <button className='flex items-center mt-2 text-gray-300 bg-black border border-gray-500 pr-4 rounded'>
                <FaGithub className='mx-2 mr-4' />View Github
              </button>
            </div>

            <div className='bg-slate-900 border border-white/20 rounded p-3'>
              <div className='flex items-center'>
                <FaLinkedin className='text-5xl bg-blue-800 rounded p-1 mr-2' />
                <div>
                  <h2>Linkedin</h2>
                  <p className='text-gray-400'>rohan097</p>
                </div>
              </div>
              <button className='flex items-center mt-2 text-gray-300 bg-black border border-gray-500 pr-4 rounded'>
                <FaGithub className='mx-2 mr-4' />View Linkedin
              </button>
            </div>
          </div>

          <div className='bg-slate-900 p-4 rounded w-full md:w-[45%]'>
            <div>
              <h1 className='font-bold mb-2'>Send me a message</h1>
              <p className='text-gray-300'>Name</p>
              <input onChange={(e)=>setSender(e.target.value)}type='text' className='bg-slate-800 w-full mb-2 pl-2 rounded' />
              <p className='text-gray-300'>Email</p>
              <input onChange={(e)=>setSenderEmail(e.target.value)} type='Email' className='bg-slate-800 w-full mb-2 pl-2 rounded' />
              <p className='text-gray-300'>Message</p>
              <textarea onChange={(e)=>setmsg(e.target.value)} className='bg-slate-800 w-full pl-2 rounded' rows="5"></textarea>
            </div>
            {loading?<Loading></Loading>:
            <button onClick={handleSend} className='bg-blue-900 px-4 py-1 rounded mt-3'>
              Send</button>
            }
            {sent && <div className='flex items-center transition-all'><FaCheckCircle></FaCheckCircle>
             <p className='ml-2 transition-all'>Sent Successfully...</p>
            </div>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
