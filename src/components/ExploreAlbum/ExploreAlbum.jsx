import React from 'react'
import './ExploreAlbum.css'
import { artist_list } from '../../assets/app'

const ExploreAlbum = ({category, setCategory}) => {
  return (
    <div className='explore-album' id='explore-album'>
      <h1>Explore Our Albums</h1>
      <p className='explore-album-text'>"Immerse yourself in the soulful rhythms of 'Mystic Echoes,' an album where every track tells a story. Experience the electrifying beats of 'Midnight Pulse'—a symphony of night-time adventures."</p>
      <div className="explore-album-list">
        {artist_list.map((artist, index) => {
          return (
            <div onClick={() => {setCategory(prev => prev===artist.name?"All":artist.name)}} key={index} className="explore-album-list-item">
              <img className={category===artist.name?"active":""} src={artist.image} alt=''/>
              <p>{artist.name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreAlbum