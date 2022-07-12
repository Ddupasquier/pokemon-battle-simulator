import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Landing from './Landing';
import TeamBuilder from './TeamBuilder';
import Battle from './Battle/Battle';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Landing />} />
        <Route path="/team-builder" element={<TeamBuilder />} />
        <Route path="/battle" element={<Battle />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
