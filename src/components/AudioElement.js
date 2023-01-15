export const AudioElement = ({ audio }) => {
  const audioEl = new Audio(audio.source);

  const handlePlaySound = () => {
    audioEl.play();
  };

  return (
    <div className="drum-pad" onClick={handlePlaySound}>
      <audio src={audio.source}></audio>
      {audio.key}
    </div>
  );
};
