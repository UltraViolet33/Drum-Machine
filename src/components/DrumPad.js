import "./DrumPad.css";
import sound from "../assets/Heater-1.mp3";

export const DrumPad = () => {
  const audioElement = new Audio(sound);

  const playSound = () => {
    audioElement.play();
  };

  return (
    <div id="drum-pad-container">
      <div className="drum-pad" onClick={playSound}>
        <audio src={sound}></audio>Q
      </div>
      <div className="drum-pad">Q</div>
      <div className="drum-pad">Q</div>
      <div className="drum-pad">Q</div>
      <div className="drum-pad">Q</div>
      <div className="drum-pad">Q</div>
      <div className="drum-pad">Q</div>
      <div className="drum-pad">Q</div>
      <div className="drum-pad">Q</div>
    </div>
  );
};
