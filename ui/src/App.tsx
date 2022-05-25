import React from 'react';
import { Outlet } from 'react-router-dom';
// import Container from './Components/Container';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import './scss/app-styles.css';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
