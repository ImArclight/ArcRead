import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import ArcRead from './pages/ArcRead'
import Trial1 from './Trial/Trial1'
import Trial2 from './Trial/Trial2'
import Trial3 from './Trial/Trial3'
import Trial4 from './Trial/Trial4'
import About from './pages/About'
import Try from './pages/Try'
 

export default function App() { 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<ArcRead/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Try' element={<Try/>}/>
          <Route path='/Trial1' element={<Trial1/>}/>
          <Route path='/Trial2' element={<Trial2/>}/>
          <Route path='/Trial3' element={<Trial3/>}/>
          <Route path='/Trial4' element={<Trial4/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}
