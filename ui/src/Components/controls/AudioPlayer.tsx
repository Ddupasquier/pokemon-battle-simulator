import React, { useState, useEffect, useMemo } from 'react';
import battleMusic from './assets/battle-music.mp3';
import * as BsIcon from 'react-icons/bs';

const AudioPlayer = () => {
  // const battleRendered = document.querySelector('.battle');
  // console.log(battleRendered === undefined);

  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(battleMusic));

  // useMemo(() => {
  //   if (isPlaying) {
  //     audio.play();
  //   }
  // }, [audio, isPlaying]);

  // useEffect(() => {
  //   if (battleRendered !== undefined) {
  //     audio.play();
  //     setIsPlaying(true);
  //   } else {
  //     audio.pause();
  //     setIsPlaying(false);
  //   }
  // }, [battleRendered]);

  // useeffect to autoplay audio
  // useEffect(() => {
  //   audio.play();
  //   setIsPlaying(true);
  // }
  // , [audio]);

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
