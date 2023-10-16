import React from 'react'
import FirstOne from '../assets/1.png.jpg'
import SecondOne from '../assets/2.png.jpg'
import thirdOne from '../assets/3.png.jpg'
import FourOne from '../assets/4.png.jpg'
import Borabora from '../assets/borabora.jpg'

export const Destinations = () => {
  return (
   <div  className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
    <h1>All-Inclusive Resorts</h1>
    <p>On the Caribbean's Bast Beaches</p>
    <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
    <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Borabora} />
    <img className='w-full h-full object-cover' src={FirstOne} />
    <img className='w-full h-full object-cover' src={SecondOne} />
    <img className='w-full h-full object-cover' src={thirdOne} />
    <img className='w-full h-full object-cover' src={FourOne} />
    </div>

   </div>
  )
}
