import React, { useEffect } from 'react';
import * as BsIcon from 'react-icons/bs';
// import { useOutletContext } from 'react-router-dom';
import { useAudioPlayer } from './../../App';

const AudioPlayer = () => {
  const { isPlaying, playAudio, toggleAudio } = useAudioPlayer();

  useEffect(() => {
    playAudio();
  }, [playAudio]);

  return (
    <button className="audio-player" onClick={toggleAudio}>
      {isPlaying ? <BsIcon.BsPauseFill /> : <BsIcon.BsFillPlayFill />}
    </button>
  );
};

export default AudioPlayer;
