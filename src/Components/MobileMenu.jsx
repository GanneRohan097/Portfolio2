import React, { useEffect } from 'react'

const MobileMenu = ({menuOpen,setMenuOpen}) => {
  return (
    <>
      <div className={`fixed top-0 left-0 w-full bg-black/60 backdrop-blur-2xl z-40 flex flex-col items-center justify-center
         transition-all duration-300 ease-in-out ${menuOpen? "h-screen opacity-100 pointer-events-auto":"h-0 opacity-0 pointer-events-none"}
        `}>
        <button onClick={()=>setMenuOpen(false)} className='absolute top-6 right-6 text-white/50 hover:text-white text-4xl focus:outline-none cursor-pointer transition-colors duration-300'
            aria-label='Close Menu'
            >
            &times;
        </button>
                     <a href='#home' onClick={()=> setMenuOpen(false)} className={`text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent my-6 transform transition-all duration-500 hover:scale-110
                           ${menuOpen?"opacity-100 translate-y-0 delay-100" :"opacity-0 translate-y-10"}
                        `}>
                        Home
                     </a>
                     <a href='#about' onClick={()=> setMenuOpen(false)} className={`text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent my-6 transform transition-all duration-500 hover:scale-110
                           ${menuOpen?"opacity-100 translate-y-0 delay-150" :"opacity-0 translate-y-10"}
                        `}>
                        About
                     </a>
                     <a href='#coding' onClick={()=> setMenuOpen(false)} className={`text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent my-6 transform transition-all duration-500 hover:scale-110
                           ${menuOpen?"opacity-100 translate-y-0 delay-200" :"opacity-0 translate-y-10"}
                        `}>
                        Coding Profile
                     </a>
                     <a href='#projects' onClick={()=> setMenuOpen(false)} className={`text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent my-6 transform transition-all duration-500 hover:scale-110
                           ${menuOpen?"opacity-100 translate-y-0 delay-300" :"opacity-0 translate-y-10"}
                        `}>
                        Projects
                     </a>
                     <a href='#contact' onClick={()=> setMenuOpen(false)} className={`text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent my-6 transform transition-all duration-500 hover:scale-110
                           ${menuOpen?"opacity-100 translate-y-0 delay-[400ms]" :"opacity-0 translate-y-10"}
                        `}>
                        Contact
                     </a>
      </div>
    </>
  );
}

export default MobileMenu;