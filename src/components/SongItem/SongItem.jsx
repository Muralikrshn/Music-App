import React, { useState, useRef, useEffect } from 'react';
import './SongItem.css';

const SongItem = ({ id, audio_name, sname, aname, picon, ricon }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio(audio_name)); // useRef to hold the audio instance

  useEffect(() => {
    // Cleanup function to stop and reset audio when component unmounts
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    const handleLoadedData = () => {
      setDuration(audioRef.current.duration);
    };
    audioRef.current.addEventListener('loadeddata', handleLoadedData);

    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

    const handleEnded = () => {
      setIsPlaying(false); // Reset isPlaying state to false after song ends
      setCurrentTime(0);
      audioRef.current.currentTime = 0;
      // Optionally, play next song automatically
      // playNextSong();
    };
    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      audioRef.current.removeEventListener('loadeddata', handleLoadedData);
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.removeEventListener('ended', handleEnded);
    };
  }, []);

  const playPauseToggle = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedSeconds = `${seconds < 10 ? '0' : ''}${seconds}`;
    return `${minutes}:${formattedSeconds}`;
  };

  return (
    <div className='song-item' data-song-id={id} data-audio-name={audio_name}>
      <div className="song-item-text">
        <h3>{sname}</h3>
        <p>{aname}</p>
      </div>
      <div className="song-item-controls">
        <div className="song-duration">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            step="0.1"
          />
          <span>{formatTime(duration)}</span>
        </div>
        <div className="song-item-icon">
          <img onClick={playPauseToggle} src={isPlaying ? ricon : picon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SongItem;
