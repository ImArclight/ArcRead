import React from 'react'
import trial1 from '../assets/trial1.jfif'
import Navbar from '../component/Navbar'

export default function Try() {
  return (
    <div>
      <Navbar />
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 justify-center items-center text-center m-auto'>
      <div>
        <a href="">
          <img src={trial1} alt="" />
        </a>
      </div>
      
    </div>
    </div>
  )
}
