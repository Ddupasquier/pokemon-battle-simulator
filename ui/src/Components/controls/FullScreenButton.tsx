import * as React from 'react';
import * as BsIcon from 'react-icons/bs';

type fullScreenProps = {
  setFull: React.Dispatch<React.SetStateAction<boolean>>;
  isFull: boolean;
};

function FullScreenButton({ setFull, isFull }: fullScreenProps) {
  const handleFullScreen = () => {
    setFull(!isFull);
  };

  return (
    <button className="full-screen-button" onClick={handleFullScreen}>
      <BsIcon.BsFullscreen />
    </button>
  );
}

export default FullScreenButton;
