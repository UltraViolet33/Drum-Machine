import "./DrumPad.css";
import sound from "../assets/Heater-1.mp3";
import { GlobalAudio } from "../assets/GlobalAudio";
import { AudioElement } from "./AudioElement";
import { useEffect } from "react";

export const DrumPad = () => {
  const audioElement = new Audio(sound);

  const playSound = () => {
    audioElement.play();
  };

  const playSoundFromKeyboard = key => {
    console.log(key);
    GlobalAudio.forEach(audio => {
      if (audio.key === key.toUpperCase()) {
        const audioElement = new Audio(audio.source);
        audioElement.play();
      }
    });
  };

  useEffect(() => {
    const keyDownHandler = event => {
      document.addEventListener("keydown", keyDownHandler);
      playSoundFromKeyboard(event.key);
    };
    document.addEventListener("keydown", keyDownHandler);
  });

  return (
    <div id="drum-pad-container">
      {GlobalAudio.map(audio => (
        <AudioElement audio={audio} />
      ))}
    </div>
  );
};
