import React, { useContext } from 'react'
import './SongDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import SongItem from '../SongItem/SongItem'

const SongDisplay = ({category}) => {

  const {songs_list} = useContext(StoreContext)

  return (
    <div className='song-display' id='son-display' >
      <h2>Top and Popular Songs</h2>
      <div className="song-display-list">
        {songs_list.map((song, index) => {

          if (category === "All" || category === song.aname){
            return <SongItem key={index} id={song._id} audio_name={song.audio_name} sname={song.sname} aname={song.aname} picon={song.play} ricon={song.resume} />
          }
        })}
      </div>
    </div>
  )
}

export default SongDisplay