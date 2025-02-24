import {useEffect, useState} from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';



export default function Navbar() {

    const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const offset = window.scrollY;
          if (offset > 300) { 
              setHideNavbar(true);
          } else {
              setHideNavbar(false); 
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

    
  return (
      <>
        {/* Desktop Navbar */}
      <nav className={`w-full z-10 transition-colors duration-300 bg-gray-300 sm:sticky top-0 hidden sm:block ${hideNavbar ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="navbar w-10/12 m-auto rounded-br-2xl rounded-bl-2xl">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <ul className="flex space-x-4">
                    <li>
                    <img src={logo} className='w-[40px]' alt="" />
                    </li>
                    <li className=" hover:bg-gray-500 hover:text-red-300 rounded-md px-3 py-2 text-sm font-medium">
                      <Link to={'/'}>
                        ArcRead
                      </Link> 
                    </li>
                    <li className="text-red-600 hover:bg-red-200  rounded-md px-3 py-2 text-sm font-medium">
                      <Link to={'/About'}>
                        Readme
                      </Link>
                    </li>
                    <li className=" hover:bg-gray-500 hover:text-red-300 rounded-md px-3 py-2 text-sm font-medium">
                      <Link to={'/Try'}>
                        Try
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className={`sm:relative bg-gray-300 w-full z-10 transition-colors duration-300 bg-transparent  top-0 block sm:hidden`}>
        <div className="navbar w-full m-auto rounded-br-2xl rounded-bl-2xl">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                </div>
                <div className="sm:ml-6 sm:block">
                  <ul className="flex space-x-4">
                  <li>
                    <img src={logo} className='w-[40px]' alt="" />
                    </li>
                    <li className=" hover:bg-gray-500 hover:text-red-300 rounded-md px-3 py-2 text-sm font-medium">
                      <Link to={'/'}>
                        ArcRead
                      </Link>
                    </li>
                    <li className="text-red-600 hover:bg-red-200 rounded-md px-3 py-2 text-sm font-medium">
                      <Link to={'/About'}>
                        Readme
                      </Link>
                    </li>
                    <li className=" hover:bg-gray-500 hover:text-red-300 rounded-md px-3 py-2 text-sm font-medium">
                      <Link to={'/Try'}>
                        Try
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      </>
  )
}
