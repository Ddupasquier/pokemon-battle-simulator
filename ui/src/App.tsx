import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import battleMusic from './Components/controls/assets/battle-music.mp3';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import './scss/app-styles.css';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(battleMusic));

  return (
      <div className="App">
        <Nav />
        <Outlet context={[audio, isPlaying, setIsPlaying]} />
        <Footer />
      </div>
  );
};

export default App;