import "./DrumPad.css";
import { GlobalAudio } from "../assets/GlobalAudio";
import { AudioElement } from "./AudioElement";
import { useEffect } from "react";

export const DrumPad = ({ setDisplayText }) => {

  const playSound = audioToPlay => {
    const audioElement = new Audio(audioToPlay.source);
    setDisplayText(audioToPlay.id);
    audioElement.play();
  };

  const playSoundFromKeyboard = key => {
    const audioToPlay = GlobalAudio.find(
      audio => audio.key === key.toUpperCase()
    );

    if (audioToPlay) {
      playSound(audioToPlay);
    }
  };

  useEffect(() => {
    const keyDownHandler = event => {
      document.addEventListener("keydown", keyDownHandler);
      playSoundFromKeyboard(event.key);
    };
    document.addEventListener("keydown", keyDownHandler);
  }, []);

  return (
    <div id="drum-pad-container">
      {GlobalAudio.map((audio, index) => (
        <AudioElement audio={audio} play={playSound} key={index} />
      ))}
    </div>
  );
};
