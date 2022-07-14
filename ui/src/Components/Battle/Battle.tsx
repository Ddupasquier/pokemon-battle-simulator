import React, { useState } from 'react';
import BattleMenu from './BattleMenu';
import BattleText from './BattleText';
import EnemyHealth from './EnemyHealth';
import PlayerHealth from './PlayerHealth';
import ControlContainer from '../controls/ControlContainer';

function Battle() {
  // const [battleMenuShow, setBattleMenuShow] = useState(false);
  // const [healthShown, setHealthShown] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const fullScreen: React.CSSProperties = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '10',
    border: 'none',
  };

  // const handleBattleMenuShow = () => {
  //   setTimeout(() => {
  //     setBattleMenuShow(true);
  //     // setHealthShown(true);
  //   }, 1000);
  // };

  return (
    <div className="battle">
      <>
      <ControlContainer setFull={setIsFullScreen} isFull={isFullScreen} />
      <div className="game-board" style={isFullScreen ? fullScreen : undefined}>
        <div className="enemy-health">
          <EnemyHealth />
        </div>
        <div className="enemy-sprite">
          <img alt="enemysprite" />
        </div>
        <div className="player-sprite">
          <img alt="playersprite" />
        </div>
        <div className="player-health">
          <PlayerHealth />
        </div>
        <div className="bottom-bar">
          <>
            <BattleText />
            {/* {battleMenuShow ? <BattleMenu /> : null} */}
            <BattleMenu />
          </>
        </div>
      </div>
      {/* {handleBattleMenuShow()} */}
      </>
    </div>
  );
}

export default Battle;
