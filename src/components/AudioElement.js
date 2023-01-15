export const AudioElement = ({ audio }) => {
  const audioEl = new Audio(audio.source);

  const handlePlaySound = () => {
    audioEl.play();
  };

  return (
    <div className="drum-pad" id={audio.id} onClick={handlePlaySound}>
      <audio className="clip" id={audio.key} src={audio.source}></audio>
      {audio.key}
    </div>
  );
};
