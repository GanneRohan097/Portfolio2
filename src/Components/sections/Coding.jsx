import React from 'react'
import { SiCodechef } from 'react-icons/si'
import { SiCodeforces } from 'react-icons/si'

const Coding = () => {
  return (
    <section id='coding' className='min-h-screen flex items-center justify-center py-20 relative'>
        <div className='max-w-6xl mx-auto px-4 w-full z-10 flex flex-col items-center'>
            <div className='text-center mb-16'>
                <h1 className='text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 drop-shadow-sm'>
                    Coding Profile
                </h1>
                <p className='text-gray-400 text-base max-w-2xl mx-auto'>
                    Consistent problem solving and participation in competitive programming.
                </p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl'>
                {/* Leetcode */}
                <div className='group relative flex flex-col items-center p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-orange-500/50 rounded-3xl transition-all duration-500 hover:-translate-y-2'>
                    <div className='absolute inset-0 bg-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl'></div>
                    <div className='relative z-10 flex flex-col items-center'>
                        <div className='p-4 bg-white/5 rounded-2xl mb-6 shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] transition-all duration-500'>
                            <img className='w-16 h-16 object-contain' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg" alt="Leetcode" />
                        </div>
                        <p className='text-orange-400 font-bold mb-2 tracking-wide uppercase text-sm'>Leetcode</p>
                        <h2 className='text-2xl font-extrabold text-white mb-6'>230+ Solved</h2>
                        <div className='flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/30 rounded-full py-2 px-6 shadow-[0_0_15px_rgba(249,115,22,0.15)]'>
                            <span className='text-lg'>⭐</span>
                            <span className='text-xl font-bold text-orange-300'>1345</span>
                        </div>
                    </div>
                </div>

                {/* Codechef */}
                <div className='group relative flex flex-col items-center p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-green-500/50 rounded-3xl transition-all duration-500 hover:-translate-y-2'>
                    <div className='absolute inset-0 bg-green-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl'></div>
                    <div className='relative z-10 flex flex-col items-center'>
                        <div className='p-4 bg-white/5 rounded-2xl mb-6 shadow-[0_0_15px_rgba(34,197,94,0.1)] group-hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all duration-500'>
                            <SiCodechef className='w-16 h-16 text-gray-200'/>
                        </div>
                        <p className='text-green-400 font-bold mb-2 tracking-wide uppercase text-sm'>Codechef</p>
                        <h2 className='text-2xl font-extrabold text-white mb-6'>500+ Solved</h2>
                        <div className='flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/30 rounded-full py-2 px-6 shadow-[0_0_15px_rgba(34,197,94,0.15)]'>
                            <span className='text-lg'>⭐</span>
                            <span className='text-xl font-bold text-green-300'>1035</span>
                        </div>
                    </div>
                </div>

                {/* Codeforces */}
                <div className='group relative flex flex-col items-center p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-blue-500/50 rounded-3xl transition-all duration-500 hover:-translate-y-2'>
                    <div className='absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl'></div>
                    <div className='relative z-10 flex flex-col items-center'>
                        <div className='p-4 bg-white/5 rounded-2xl mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-500'>
                            <SiCodeforces className='w-16 h-16 text-[#6a1fcb]' />
                        </div>
                        <p className='text-blue-400 font-bold mb-2 tracking-wide uppercase text-sm'>Codeforces</p>
                        <h2 className='text-2xl font-extrabold text-white mb-6'>50+ Solved</h2>
                        <div className='flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/30 rounded-full py-2 px-6 shadow-[0_0_15px_rgba(59,130,246,0.15)]'>
                            <span className='text-lg'>⭐</span>
                            <span className='text-xl font-bold text-blue-300'>645</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Coding