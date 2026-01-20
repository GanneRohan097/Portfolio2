import React from 'react'

const About = () => {
    const skills=["Html","Javascript","TailwindCss","React"];
    const lang=["C/C++","Python","Java"]
  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20 '>
        <div className='max-w-3xl mx-auto px-4 '>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>About me</h2>
         <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
             <p className='text-gray-300 mb-6'>
                I’m Rohan, a Computer Science student focused on building strong fundamentals and real-world projects.
I work with C, C++, Java, Python, JavaScript, and React, and regularly practice DSA to improve problem-solving skills.
Currently, I’m strengthening DSA, React, OS, and DBMS.
             </p>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4'>Web Technologies</h3>
                    <div className='flex flex-wrap gap-2'>
                        {skills.map((item,key)=>(
                            <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                             hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                             {item}
                            </span>
                        ))}
                    </div>
                    
                </div>

                <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                    <h3 className='text-xl font-bold mb-4'>Core Languages</h3>
                    <div className='flex flex-wrap gap-2'>
                        {lang.map((item,key)=>(
                            <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                             hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                             {item}
                            </span>
                        ))}
                    </div>
                    
                </div>


             </div>
         </div>
        </div>
    </section>
  )
}

export default About