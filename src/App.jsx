import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Album from './pages/Album/Album'
import Playlist from './pages/Playlist/Playlist'
import Home from './pages/Home/Home'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/Music-App' element={<Home/>} />
        <Route path='/album' element={<Album/>} />
        <Route path='/playlist' element={<Playlist/>} />
      </Routes>
    </div>
  )
}

export default App