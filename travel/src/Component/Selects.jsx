import React from 'react'
import Asad1 from '../assets/1.jpg'
import Asad2 from '../assets/2.jpg'
import Asad3 from '../assets/3.jpg'
import Asad4 from '../assets/4.jpg'
import Asad5 from '../assets/5.jpg'
import Asad6 from '../assets/6.jpg'
import { SelectsCard } from './SelectsCard'
export const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
       <SelectsCard bg={Asad1} text='Cox Bazar' />
       <SelectsCard bg={Asad2} text='Maldives' />
       <SelectsCard bg={Asad3} text='Antigua ' />
       <SelectsCard bg={Asad4} text='Cozumel' />
       <SelectsCard bg={Asad5} text='Jamaica' />
       <SelectsCard bg={Asad6} text='Key West' />
      
        
        

    </div>
  )
}
