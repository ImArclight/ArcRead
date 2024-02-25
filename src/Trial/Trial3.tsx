import Navbar from '../component/Navbar'
import { useState } from 'react'
import { ReactReader } from 'react-reader'
import { NTrial3 } from '../component/EpubImport'


export default function Trial3() {

  const [location, setLocation] = useState<string | number>(0)
  
  return (
    <div>
      <Navbar />
      <div className='h-[100vh]'>
        <ReactReader 
        url={NTrial3}
        location={location} 
        locationChanged={(epubcfi: string) => setLocation(epubcfi)} />
      </div>
    </div>
  )
}
