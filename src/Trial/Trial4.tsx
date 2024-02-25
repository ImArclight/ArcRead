import Navbar from '../component/Navbar'
import { useState } from 'react'
import { ReactReader } from 'react-reader'
import { NTrial4 } from '../component/EpubImport'

export default function Trial4() {

  const [location, setLocation] = useState<string | number>(0)
  
  return (
    <div>
      <Navbar />
      <div className='h-[100vh]'>
        <ReactReader 
        url={NTrial4} 
        location={location} 
        locationChanged={(epubcfi: string) => setLocation(epubcfi)} />
      </div>
    </div>
  )
}
