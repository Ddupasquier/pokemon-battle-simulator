import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Landing from './Landing';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Landing />} />
        <Route path="test" element={<h1>testing</h1>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
