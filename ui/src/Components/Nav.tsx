import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/" className="n">
        <div className="nav-item">Home</div>
      </Link>
      <Link to="/team-builder" className="n">
        <div className="nav-item">Team Builder</div>
      </Link>
    </div>
  );
};

export default Nav;
