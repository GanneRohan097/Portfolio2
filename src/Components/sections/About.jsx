import React from 'react'
const About = () => {
    const skills = ["HTML", "JavaScript", "Tailwind CSS", "React"];
    const lang = ["C/C++", "Python", "Java"];
    return (
        <section id='about' className='min-h-screen flex items-center justify-center py-20'>
            <div className='max-w-3xl mx-auto px-4 z-10'>
                <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
                    About Me
                </h2>

                <div className='rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-1 transition-all duration-300 shadow-2xl'>
                    <p className='text-gray-300 mb-8 leading-relaxed text-lg'>
                        I’m Rohan, a Computer Science student focused on building strong fundamentals and real-world projects.
                        I work with C, C++, Java, Python, JavaScript, and React, and regularly practice DSA to improve problem-solving skills.
                        Currently, I’m strengthening DSA, React, OS, and DBMS.
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                        <div className='transition-all'>
                            <h3 className='text-xl font-bold mb-4 text-white'>Web Technologies</h3>
                            <div className='flex flex-wrap gap-3'>
                                <span className='bg-blue-500/10 text-blue-400 py-1.5 px-4 rounded-full text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 hover:shadow-[0_2px_15px_rgba(59,130,246,0.3)] transition-all cursor-default'>
                                    <i className="devicon-react-original-wordmark colored text-[40px]"></i>
                                </span>
                                <span className='bg-blue-500/10 text-blue-400 py-1.5 px-4 rounded-full text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 hover:shadow-[0_2px_15px_rgba(59,130,246,0.3)] transition-all cursor-default'>

                                    <i class="devicon-html5-plain colored text-[40px]"></i>
          
                                </span>
                                <span className='bg-blue-500/10 text-blue-400 py-1.5 px-4 rounded-full text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 hover:shadow-[0_2px_15px_rgba(59,130,246,0.3)] transition-all cursor-default'>
                                    <i className="devicon-css3-plain text-[40px]"></i>
                                </span>
                                <span className='bg-blue-500/10 text-blue-400 py-1.5 px-4 rounded-full text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 hover:shadow-[0_2px_15px_rgba(59,130,246,0.3)] transition-all cursor-default'>

                                    
                                        <i class="devicon-tailwindcss-original colored text-[40px]"></i>
          
          
                                </span>
                                <span className='bg-blue-500/10 text-blue-400 py-1.5 px-4 rounded-full text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 hover:shadow-[0_2px_15px_rgba(59,130,246,0.3)] transition-all cursor-default'>
                                    <i className="devicon-javascript-plain colored text-[40px]"></i>
                                </span>
                            </div>
                        </div>
                        <div className='transition-all'>
                            <h3 className='text-xl font-bold mb-4 text-white'>Core Languages</h3>
                            <div className='flex flex-wrap gap-3'>

                                <span className='bg-cyan-500/10 text-cyan-400 py-1.5 px-4 rounded-full text-sm font-medium border border-cyan-500/20 hover:bg-cyan-500/20 hover:shadow-[0_2px_15px_rgba(34,211,238,0.3)] transition-all cursor-default'>

                                    <img className='w-10 h-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />

                                </span>
                                <div className='bg-cyan-500/10 text-cyan-400 py-1.5 px-4 rounded-full text-sm font-medium border border-cyan-500/20 hover:bg-cyan-500/20 hover:shadow-[0_2px_15px_rgba(34,211,238,0.3)] transition-all cursor-default'>

                                    <img className='w-10 h-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"></img>

                                </div>
                                <div className='bg-cyan-500/10 text-cyan-400 py-1.5 px-4 rounded-full text-sm font-medium border border-cyan-500/20 hover:bg-cyan-500/20 hover:shadow-[0_2px_15px_rgba(34,211,238,0.3)] transition-all cursor-default'>


                                    <img className='w-10 h-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About