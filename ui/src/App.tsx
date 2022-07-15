import React, { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import battleMusic from './Components/controls/assets/battle-music.mp3';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import './scss/app-styles.css';

type AudioPlayerContext = {
  audio: HTMLAudioElement
  isPlaying: boolean
  playAudio: () => void
  pauseAudio: () => void
  toggleAudio: () => void
}

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(battleMusic));

  const playAudio = () => {
    audio.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audio.pause();
    setIsPlaying(false);
  };

  const toggleAudio = isPlaying ? pauseAudio : playAudio;

  return (
    <div className="App">
      <Nav />
      <Outlet context={{toggleAudio}} />
      <Footer />
    </div>
  );
};

export default App;
export function useAudioPlayer() {
  return useOutletContext<AudioPlayerContext>();
}