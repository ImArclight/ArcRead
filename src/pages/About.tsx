import React from 'react'
import Navbar from '../component/Navbar'
import back from '../assets/Art12.png'

export default function About() {
  return (
    <div>
        <Navbar />
        <div className='mt-10 text-center'>
            <h1 className='text-teal-500 italic text-2xl'>ArcRead</h1>
            <p className='mt-4'>I like reading light novel and most of it are Epub file, thus I create this Epub reader using react by Epub.js v0.3</p>
        </div>
    </div>
  )
}
