import React, { useState } from 'react';
import battleMusic from './assets/battle-music.mp3';
import * as BsIcon from "react-icons/bs";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audio = new Audio(battleMusic);

  const handlePlay = () => {
    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="audio-player">
      <button onClick={handlePlay}>{isPlaying ? <BsIcon.BsPauseFill /> : <BsIcon.BsFillPlayFill />}</button>
    </div>
  );
};

export default AudioPlayer;
