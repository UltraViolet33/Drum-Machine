import "./DrumPad.css";
import { GlobalAudio } from "../assets/GlobalAudio";
import { AudioElement } from "./AudioElement";
import { useEffect } from "react";

export const DrumPad = ({ setDisplayText }) => {
  const playSound = audioToPlay => {
    const audioElement = document.getElementById(audioToPlay.key);
    setDisplayText(audioToPlay.id);
    audioElement.play();
  };

  const playSoundFromKeyboard = event => {
    const audioToPlay = GlobalAudio.find(
      audio => audio.key === event.key.toUpperCase()
    );

    if (audioToPlay) {
      console.log(audioToPlay);
      playSound(audioToPlay);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", playSoundFromKeyboard);
    return () => {
      document.removeEventListener("keydown", playSoundFromKeyboard);
    };
  });

  return (
    <div id="drum-pad-container">
      {GlobalAudio.map((audio, index) => (
        <AudioElement audio={audio} play={playSound} key={index} />
      ))}
    </div>
  );
};
