import React from 'react'
import project from "./Password.png"
import Amazon from "./Amazon.png";
import Spotify from "./Spotify.png";
import Typing from "./Typing.png";
const Projects = () => {
    const list=[
        {
            title:"Password Manager",
            p:"Saves Credentials",
            logo:project
        },
        {
            title:"Amazon clone",
            p:"Clone",
            logo:Amazon
        },
        {
            title:"Spotify clone",
            p:"Clone",
            logo:Spotify
        },
        {
            title:"Typing",
            p:"Clone",
            logo:Typing
        },
    ];
  return ( 
    <section id='projects'
     className='min-h-screen flex items-center justify-center'
     >
        <div className='max-w-5xl mx-auto px-4 z-10'>
            <div className='text-center'>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>Projects</h1>
            <p className='p-1 px-4 text-gray-300'>A collection of my projects that showcase my skills in web Development</p>
            </div>
            <div className='rounded border border-white/10 items-center justify-center '>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {list.map((item)=>(
                        
                   
                    <div className='bg-gray-900 p-2'>
                         <img src={item.logo}
                          className='w-full h-44 object-cover mb-4 border border-white/30 transition-transform duration-300 rounded-xl'></img>
                          <h2 className='font-bold px-4 py-0'>{item.title}</h2>
                          <p className='py-0 px-4 text-gray-400'>{item.p}</p>
                          <div className='flex flex-wrap'>
                              <p className='text-blue-400 py-1 px-3 bg-blue-500/25 rounded-2xl mx-2 cursor-pointer hover:-translate-y-1 transition-all mb-1'>Html</p>
                              <p className='text-blue-400 py-1 px-3 bg-blue-500/25 rounded-2xl mx-2 cursor-pointer hover:-translate-y-1 transition-all mb-1'>CSS</p>
                              <p className='text-blue-400 py-1 px-3 bg-blue-500/25 rounded-2xl mx-2 cursor-pointer hover:-translate-y-1 transition-all mb-1'>React</p>
                              <p className='text-blue-400 py-1 px-3 bg-blue-500/25 rounded-2xl mx-2 cursor-pointer hover:-translate-y-1 transition-all mb-1'>Javascript</p>
                          </div>
                        <div className="flex gap-4 mt-6">
                        <button
                            className="px-5 py-2 rounded-lg 
                                    bg-blue-500 text-black font-medium
                                    hover:bg-blue-400
                                    hover:-translate-y-[2px]
                                    transition-all duration-300"
                        >
                            Live
                        </button>

                        <button
                            className="px-5 py-2 rounded-lg 
                                    border border-white/20 text-white
                                    hover:border-blue-400
                                    hover:text-blue-400
                                    hover:-translate-y-[2px]
                                    transition-all duration-300"
                        >
                            GitHub
                        </button>
                        </div>
                    </div>
                  ))}
                </div>
            </div>
        </div>

    </section>
  )
}

export default Projects