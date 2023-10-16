import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Component/Navbar'
import { Hero } from './Component/Hero'
import { Destinations } from './Component/Destinations'
import Search from './Component/Search'
import { Selects } from './Component/Selects'
import  Carousel  from './Component/Carousel'


function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <Destinations/>
    <Search/>
    <Selects/>
    <Carousel/>
    </>
  )
}

export default App
