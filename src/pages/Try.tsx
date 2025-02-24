import { Link } from 'react-router-dom'
import trial1 from '../assets/trial1.jfif'
import trial2 from '../assets/trial2.jfif'
import trial3 from '../assets/trial3.jfif'
import trial4 from '../assets/trial4.jfif'
import Navbar from '../component/Navbar'

export default function Try() {
  return (
    <div>
      <Navbar />
      <div > 
        <div>
          <p className='mt-6 text-teal-500 mb-5 text-2xl italic text-center'>Read Some Ebook Examples Below</p>
        </div>
        <div className='mt-8 md:flex md:justify-center md:gap-7 grid grid-cols-2 gap-4 ml-3'>
          <Link to="/Trial1">
            <img className='w-[250px]' src={trial1} alt="" />
          </Link>
          <Link to="/Trial2">
            <img className='w-[250px]' src={trial2} alt="" />
          </Link>
          <Link to="Trial3">
            <img className='w-[250px]' src={trial3} alt="" />
          </Link>
          <Link to="Trial4">
            <img className='w-[250px]' src={trial4} alt="" />
          </Link>
        </div>
      </div>
      <p className='mt-10 text-center'>I like reading light novel and most of it are Epub file, thus I create this Epub reader using react by Epub.js v0.3</p>
      <p className='mt-10 text-center'>
        Credit: 
      </p>
      <p className='mt-1 text-center text-red-400'>
      <span><Link to="https://github.com/futurepress/epub.js">Epub.js </Link></span>
      </p>
      <p className='mt-1 text-center text-red-400'>
        <span>
          <Link to="https://github.com/gerhardsletten/react-reader?tab=readme-ov-file">
            React Reader
          </Link>
        </span>
      </p>
    </div>
  ) 
}
