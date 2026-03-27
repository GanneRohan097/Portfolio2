import React, { useEffect } from 'react'

const Navbar = ({menuOpen,setMenuOpen}) => {
    useEffect(()=>{
        document.body.style.overflow=menuOpen?"hidden":"";
    },[menuOpen])
  return (
    <>
       <nav className='fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 shadow-lg transition-all duration-300'>
         <div className='max-w-6xl mx-auto px-6 lg:px-12'>
            <div className='flex justify-between items-center h-20'>
                 <a href="#home" className='font-mono text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:scale-105 transition-transform'>
                    Web<span className='text-blue-500'>dev</span>
                 </a>
                 <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden flex flex-col justify-between' onClick={()=>setMenuOpen((prev)=>!prev)}>
                     <span className={`h-[2px] w-full bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[8.5px]' : ''}`}></span>
                     <span className={`h-[2px] w-full bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                     <span className={`h-[2px] w-full bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[8.5px]' : ''}`}></span>
                 </div>
                 <div className='hidden md:flex items-center space-x-10'>
                     <a href='#home' className='relative text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider group'>
                        Home
                        <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full'></span>
                     </a>
                     <a href='#about' className='relative text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider group'>
                        About
                        <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full'></span>
                     </a>
                     <a href='#coding' className='relative text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider group'>
                        Coding
                        <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full'></span>
                     </a>
                     <a href='#projects' className='relative text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider group'>
                        Projects
                        <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full'></span>
                     </a>
                     <a href='#contact' className='relative text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider group'>
                        Contact
                        <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full'></span>
                     </a>
                 </div>
            </div>
         </div>
       </nav>
    </>
  )
}

export default Navbar