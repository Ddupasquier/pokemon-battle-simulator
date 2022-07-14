import * as React from 'react';
import AudioPlayer from './AudioPlayer';
import FullScreenButton from './FullScreenButton';

type fullScreenProps = {
  setFull: React.Dispatch<React.SetStateAction<boolean>>;
  isFull: boolean;
};

function ControlContainer({ setFull, isFull }: fullScreenProps) {
  return (
    <div className="control-container">
      <AudioPlayer />
      <FullScreenButton setFull={setFull} isFull={isFull} />
    </div>
  );
}

export default ControlContainer;
