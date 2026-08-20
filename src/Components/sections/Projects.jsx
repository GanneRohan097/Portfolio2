import React from 'react'
import project from "./Password.png"
import Amazon from "./Amazon.png";
import Spotify from "./Spotify.png";
import Typing from "./Typing.png";
import Youtube from "./Youtube.png";
import location from "./location.png"
import codecolab from "./Code colab.png"

const Projects = () => {
    const list=[
        {
            title:"Code Collaborative ",
            p:"Real time code editor",
            logo:codecolab,
            live:"https://code-colab-henna.vercel.app/",
            github:"https://github.com/GanneRohan097/CodeColab",
            tech:["React","Node.js","Web sockets"]
        },
        {
            title:"Location Sharing app",
            p:"Shares location",
            logo:location,
            live:"https://location-share-ten.vercel.app/",
            github:"https://github.com/GanneRohan097/Location-share",
            tech:["React","Node.js","MongoDB","Google Maps API"]
        },
        {
            title:"Password Manager",
            p:"Saves Credentials",
            logo:project,
            live:"https://password-manager-hazel.vercel.app/",
            github:"https://github.com/GanneRohan097/PasswordManager",
            tech:["HTML","React","Tailwind","Javascript"]
        },
        {
            title:"Amazon clone",
            p:"Clone",
            logo:Amazon,
            live:"https://amazon-clone-tau-swart.vercel.app/",
            github:"https://github.com/GanneRohan097/Amazon-clone",
             tech:["HTML","React","Tailwind","Javascript"]
        },
        {
            title:"Spotify clone",
            p:"Clone",
            logo:Spotify,
            live:"https://spotify1-gt9u.vercel.app/",
            github:"https://github.com/GanneRohan097/Spotify1",
             tech:["HTML","React","Tailwind","Javascript"]

        },
        {
            title:"Typing",
            p:"Typing practice",
            logo:Typing,
            live:"https://typing1-phi.vercel.app/",
            github:"https://github.com/GanneRohan097/Typing1",
             tech:["HTML","React","CSS","Javascript"]
        },
        {
            title:"Youtube",
            p:"Youtube clone",
            logo:Youtube,
            live:"https://youtube-full-clone.vercel.app/",
            github:"https://github.com/GanneRohan097/YoutubeFullClone",
            tech:["React","Tailwind","Javascript","Youtube API"]
        },
    ];
  return ( 
    <section id='projects'
     className='min-h-screen flex flex-col items-center justify-center py-20 relative'
     >
        <div className='max-w-6xl mx-auto px-4 z-10 w-full'>
            <div className='text-center mb-16'>
                <h1 className='text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 drop-shadow-sm'>
                    Featured Projects
                </h1>
                <p className='text-gray-400 text-base max-w-2xl mx-auto'>
                    A collection of my projects that showcase my skills in web development and my passion for building beautiful interfaces.
                </p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {list.map((item, index)=>(
                <div key={index} className='group bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-blue-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.2)] flex flex-col h-full'>
                        
                        <div className='overflow-hidden p-3 pb-0'>
                            <img src={item.logo} alt={item.title}
                                className='w-full h-52 object-cover object-top transition-transform duration-700 group-hover:scale-105 rounded-2xl border border-white/5' />
                        </div>
                        
                        <div className='p-6 flex flex-col flex-grow'>
                            <h2 className='text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors'>{item.title}</h2>
                            <p className='text-gray-400 text-sm mb-6 flex-grow'>{item.p}</p>
                            
                            <div className='flex flex-wrap gap-2 mb-6'>
                                <span className='text-xs font-medium text-blue-300 py-1 px-3 bg-blue-500/10 rounded-full border border-blue-500/20'>{item.tech[0]}</span>
                                <span className='text-xs font-medium text-cyan-300 py-1 px-3 bg-cyan-500/10 rounded-full border border-cyan-500/20'>{item.tech[1]}</span>
                                <span className='text-xs font-medium text-purple-300 py-1 px-3 bg-purple-500/10 rounded-full border border-purple-500/20'>{item.tech[2]}</span>
                                <span className='text-xs font-medium text-yellow-300 py-1 px-3 bg-yellow-500/10 rounded-full border border-yellow-500/20'>{item.tech[3]}</span>
                            </div>
                            
                            <div className='flex gap-4 mt-auto'>
                                <a href={item.live} target='blank' className='flex-1'>
                                    <button className="w-full flex justify-center items-center gap-2 py-2.5 rounded-xl bg-blue-600/90 text-white font-medium hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                                        <div className='relative flex h-3 w-3 items-center justify-center'>
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                                        </div>
                                        Live Demo
                                    </button>
                                </a>
                                <a href={item.github} target='blank' className='flex-1'>
                                    <button className="w-full py-2.5 rounded-xl border border-white/20 text-gray-300 hover:border-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium">
                                        GitHub
                                    </button>
                                </a>
                            </div>
                        </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects