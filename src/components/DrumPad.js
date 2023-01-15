import "./DrumPad.css";
import sound from "../assets/Heater-1.mp3";
import { GlobalAudio } from "../assets/GlobalAudio";
import { AudioElement } from "./AudioElement";

export const DrumPad = () => {
  const audioElement = new Audio(sound);

  const playSound = () => {
    audioElement.play();
  };

  return (
    <div id="drum-pad-container">
      {GlobalAudio.map(audio => (
        <AudioElement audio={audio} />
      ))}
    </div>
  );
};
