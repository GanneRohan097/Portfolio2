import React from 'react'

const About = () => {
    return (
        <section id='about' className='min-h-screen flex items-center justify-center py-20 relative'>
            <div className='max-w-4xl mx-auto px-4 z-10 w-full'>
                <h2 className='text-3xl md:text-4xl font-extrabold mb-10 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent text-center drop-shadow-sm'>
                    About Me
                </h2>

                <div className='rounded-3xl p-8 md:p-12 border border-white/10 bg-white/[0.03] backdrop-blur-2xl hover:-translate-y-2 transition-transform duration-500 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] relative overflow-hidden group'>
                    <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                    <p className='text-gray-300 mb-10 leading-relaxed text-base font-light relative z-10'>
                        I’m <strong className='text-white font-semibold'>Rohan</strong>, a Computer Science student focused on building strong fundamentals and real-world projects.
                        I work with C, C++, Java, Python, JavaScript, and React, and regularly practice DSA to improve problem-solving skills.
                        Currently, I’m strengthening DSA, React, OS and DBMS.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10'>
                        <div className='transition-all'>
                            <h3 className='text-xl font-semibold mb-5 text-gray-100 flex items-center gap-3'>
                                <span className='w-6 h-[2px] bg-blue-500'></span> Web Technologies
                            </h3>
                            <div className='flex flex-wrap gap-4'>
                                <span className='flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300'>
                                    <i title='React' className="devicon-react-original-wordmark colored text-[40px]"></i>
                                </span>
                                <span className='flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:-translate-y-1 transition-all duration-300'>
                                    <i title='HTML' className="devicon-html5-plain colored text-[40px]"></i>
                                </span>
                                <span className='flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-400/50 hover:bg-blue-400/10 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] hover:-translate-y-1 transition-all duration-300'>
                                    <i title='CSS' className="devicon-css3-plain colored text-[40px]"></i>
                                </span>
                                <span className='flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:-translate-y-1 transition-all duration-300'>
                                    <i title='Tailwind CSS' className="devicon-tailwindcss-original colored text-[40px]"></i>
                                </span>
                                <span className='flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10 hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:-translate-y-1 transition-all duration-300'>
                                    <i title='Javascript' className="devicon-javascript-plain colored text-[40px]"></i>
                                </span>
                                <span className='flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10 hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:-translate-y-1 transition-all duration-300'>

                                    <i title='Node js' class="devicon-nodejs-plain-wordmark colored text-[42px]"></i>

                                </span>
                            </div>
                        </div>

                        <div className='transition-all'>
                            <h3 className='text-xl font-semibold mb-5 text-gray-100 flex items-center gap-3'>
                                <span className='w-6 h-[2px] bg-cyan-500'></span> Core Languages
                            </h3>
                            <div className='flex flex-wrap gap-4'>
                                <span className='flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-600/50 hover:bg-blue-600/10 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:-translate-y-1 transition-all duration-300'>
                                    <img title='C/C++' className='w-10 h-10 drop-shadow-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                                </span>
                                <span className='flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10 hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:-translate-y-1 transition-all duration-300'>
                                    <img title='python' className='w-10 h-10 drop-shadow-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
                                </span>
                                <span className='flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:-translate-y-1 transition-all duration-300'>
                                    <img title='Java' className='w-10 h-10 drop-shadow-md' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" />
                                </span>
                            </div>
                        </div>
                        <div className='transition-all'>
                            <h3 className='text-xl font-semibold mb-5 text-gray-100 flex items-center gap-3'>
                                <span className='w-6 h-[2px] bg-blue-500'></span> Tools
                            </h3>
                            <div className='flex flex-wrap gap-4'>
                                <span className='flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300'>


                                    <i class="devicon-visualstudio-plain colored text-[40px]" title='vs code'></i>


                                </span>
                                <span className='flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:-translate-y-1 transition-all duration-300'>

                                    <i class="devicon-git-plain colored text-[40px]" title='git'></i>

                                </span>
                                <span className='flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-400/50 hover:bg-blue-400/10 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] hover:-translate-y-1 transition-all duration-300'>

                                    <i class="devicon-github-original-wordmark text-[40px]" title='Github'></i>

                                </span>
                                <span className='flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:-translate-y-1 transition-all duration-300'>

                                    <i class="devicon-postman-plain colored text-[40px]" title='postman'></i>

                                </span>
                                <span className='flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10 hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:-translate-y-1 transition-all duration-300'>

                                    <i class="devicon-vercel-original text-[40px]" title='vercel'></i>

                                </span>
                                <span className='flex items-center justify-center w-16 h-16 bg-white/5 rounded-2xl border border-white/10 hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:-translate-y-1 transition-all duration-300'>


                                    <i class="devicon-netlify-plain text-[40px]" title='Netlify'></i>


                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About