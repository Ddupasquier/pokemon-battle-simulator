import React from 'react';
import BattleMenu from '../Battle/BattleMenu';
import BattleText from '../Battle/BattleText';
import EnemyHealth from '../Battle/EnemyHealth';
import PlayerHealth from '../Battle/PlayerHealth';

function Battle() {
  return (
    <div className="battle">
      <div className="game-board">
        <div className="enemy-health">
          <EnemyHealth />
        </div>
        <div className="enemy-sprite">enemy sprite</div>
        <div className="player-sprite">player sprite</div>
        <div className="player-health">
          <PlayerHealth />
        </div>
        <div className="bottom-bar">
          <BattleText />
          <BattleMenu />
        </div>
      </div>
    </div>
  );
}

export default Battle;
