import React, { useState } from 'react'
import LoadingScreen from './Components/sections/LoadingScreen'
import "./index.css"
import "./App.css"
import Navbar from './Components/Navbar'
import MobileMenu from './Components/MobileMenu'
import Home from './Components/sections/Home'
import About from './Components/sections/About'
import Projects from './Components/sections/Projects'
import Contact from './Components/sections/Contact'
import Coding from './Components/sections/Coding'
import ScrollProgressBar from './Components/Scroll'

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <ScrollProgressBar></ScrollProgressBar>
      {isLoaded && (
        <div className='blob-outer-container'>
          <div className='blob-inner-container'>
            <div className='blob'></div>
          </div>
        </div>
      )}

      <div
        className={`min-h-screen transition-opacity duration-700 
        ${isLoaded ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events: none"} 
        bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Coding/>
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
