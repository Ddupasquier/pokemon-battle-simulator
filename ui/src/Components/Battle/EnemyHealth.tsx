import * as React from 'react';
function EnemyHealth() {
  const max = 100,
    name = 'Pokemon Name';
  let current = 50;

  return (
    <div className="health-container">
      <div className="pokemon-name">{name}</div>
      <div className="health-bar">
        <div className="health-bar-fill" style={{ width: `${current}%` }}></div>
      </div>
      <div className="health-count">
        {current}/{max}
      </div>
    </div>
  );
}

export default EnemyHealth;
