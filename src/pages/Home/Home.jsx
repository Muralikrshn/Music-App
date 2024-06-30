import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreAlbum from '../../components/ExploreAlbum/ExploreAlbum'
import SongDisplay from '../../components/SongDisplay/SongDisplay'

const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <div>
      <Header />
      <ExploreAlbum category={category} setCategory={setCategory} />
      <SongDisplay category={category} />
    </div>
  )
}

export default Home