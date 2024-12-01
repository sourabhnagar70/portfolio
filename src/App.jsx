import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experiance from './components/Experiance'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <> 
    <div className='bg-black text-white'>

     <div
     className='bg-black text-white'>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experiance/>
    <Contact/>
    <Footer/>
    
    </div>
    <Toaster/>
   
    </div>
    </>
  )
}

export default App
