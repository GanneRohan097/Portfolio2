import React from 'react'
import { SiCodechef } from 'react-icons/si'
import { SiCodeforces } from 'react-icons/si'
const Coding = () => {
  return (
    <section id='coding' className='min-h-screen flex items-center justify-center'>
        <div className='z-10 flex flex-col items-center'>
          <h1 className='mb-8 font-bold text-[30px] bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>Coding Profile</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='flex flex-col items-center w-40 border border-yellow-600 p-2 shadow-[0_0_20px_rgba(234,179,8,0.5)] rounded'>
                    <img className='w-10 h-10 md:w-20 h-20 ' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg" />
                    <p className='text-orange-500 ml-1 font-bold'>Leetcode</p>
                    <h2 className='text-xl font-bold'>100+ Solved</h2>
                    <div className='flex items-center border border-2 border-yellow-700 rounded-[15px] p-1 px-4 shadow-[0_0_20px_rgba(234,179,8,0.3)]'>
                        <p className='text-2xl'>⭐</p>
                        <p className='text-2xl'>1345</p>
                    </div>
                </div>
                <div className='flex flex-col items-center w-40 border border-green-600 p-2 shadow-[0_0_20px_rgba(154,194,184,0.7)] rounded'>
                     <SiCodechef color="#d2d3da" className='w-10 h-10 md:w-20 h-20 '/>
                    <p className='text-green-400 ml-1 font-bold'>Codechef</p>
                    <h2 className='text-xl font-bold'>500+ Solved</h2>
                    <div className='flex items-center border border-2 border-green-700 rounded-[15px] p-1 px-4 shadow-[0_0_20px_rgba(154,194,184,0.5)]'>
                        <p className='text-2xl'>⭐</p>
                        <p className='text-2xl'>1035</p>
                    </div>
                </div>
                <div className='flex flex-col items-center w-40 border border-blue-500 p-2 shadow-[0_0_20px_rgba(0,0,255,0.7)] rounded'>
                    <SiCodeforces className='w-10 h-10 md:w-20 h-20 'color="#6a1fcb" />
                    <p className='text-white-500 ml-1 font-bold'>Codeforces</p>
                    <h2 className='text-xl font-bold'>50+ Solved</h2>
                    <div className='flex items-center border border-2 border-yellow-700 rounded-[15px] p-1 px-4 shadow-[0_0_20px_rgba(0,0,255,0.5)]'>
                        <p className='text-2xl'>⭐</p>
                        <p className='text-2xl'>345</p>
                    </div>
                </div>
          </div>
        </div>
    </section>
  )
}

export default Coding;