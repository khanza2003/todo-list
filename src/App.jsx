import './App.css'
import Home from './Home'
import Landing from './Landing'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <Routes>
     <Route path='/' element={<Landing/> }/>
     <Route path='/home' element={<Home/>}/>
    </Routes>
    </>
   
  )
}

export default App
