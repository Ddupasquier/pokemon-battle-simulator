import React, { useState } from 'react';
import BattleMenu from '../Battle/BattleMenu';
import BattleText from '../Battle/BattleText';
import EnemyHealth from '../Battle/EnemyHealth';
import PlayerHealth from '../Battle/PlayerHealth';
import AudioPlayer from './AudioPlayer.jsx';


function Battle() {
  const [battleMenuShow, setBattleMenuShow] = useState(false);

  const handleBattleMenuShow = () => {
    setTimeout(() => {
      setBattleMenuShow(true);
    }, 1000);
  };

  return (
    <div className="battle">
      <AudioPlayer />
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
          <>
            <BattleText />
            {handleBattleMenuShow()}
            {battleMenuShow ? <BattleMenu /> : null}
          </>
        </div>
      </div>
    </div>
  );
}

export default Battle;
