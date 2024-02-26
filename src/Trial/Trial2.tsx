import Navbar from '../component/Navbar'
import { useState } from 'react'
import { ReactReader } from 'react-reader'
import { NTrial2 } from '../component/EpubImport'


export default function Trial2() {

  const [location, setLocation] = useState<string | number>(0)
  
  return (
    <div>
      <Navbar />  
      <div className='h-[100vh]'>
        <ReactReader 
        url={NTrial2} 
        location={location} 
        locationChanged={(epubcfi: string) => setLocation(epubcfi)} />
      </div> 
    </div>
  )
}
