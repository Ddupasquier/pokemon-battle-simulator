import React, { useEffect } from 'react';
import * as BsIcon from 'react-icons/bs';
import { useOutletContext } from 'react-router-dom';

const AudioPlayer = () => {
  const [audio, isPlaying, setIsPlaying] = useOutletContext();

  useEffect(() => {
    audio.play();
    setIsPlaying(true);
  }, [audio, setIsPlaying]);

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
    <button className="audio-player" onClick={handlePlay}>
      {isPlaying ? <BsIcon.BsPauseFill /> : <BsIcon.BsFillPlayFill />}
    </button>
  );
};

export default AudioPlayer;
