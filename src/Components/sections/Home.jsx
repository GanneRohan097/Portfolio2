import React from 'react'

const Home = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative pt-20'>
        <div className='text-center z-10 px-4'>
            <h1 className='text-4xl md:text-6xl font-extrabold mb-5 tracking-tight'>
                <span className='bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent'>Hi, I'm </span>
                <span className='bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]'>Rohan Ganne</span>
            </h1>
            <p className='text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-light'>
                Computer Science undergraduate focused on problem-solving, DSA, and building practical web applications.
            </p>
            <div className='flex flex-wrap justify-center gap-6'>
                <a href='#projects' className='relative inline-flex h-14 w-44 items-center justify-center overflow-hidden rounded-full bg-blue-600 font-medium text-white shadow-2xl transition duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]'>
                    <span className='absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity duration-300 hover:opacity-100'></span>
                    <span className='relative flex items-center gap-2'>View Projects</span>
                </a>
                <a href='#contact' className='relative inline-flex h-14 w-44 items-center justify-center overflow-hidden rounded-full border border-blue-500/30 bg-white/5 backdrop-blur-sm font-medium text-blue-400 shadow-2xl transition duration-300 hover:scale-105 hover:border-blue-400 hover:bg-white/10 hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'>
                    <span className='relative'>Contact Me</span>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Home