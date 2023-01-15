import "./Control.css";

export const Control = ({ displayText }) => {

  console.log(displayText);
  return (
    <div id="control-container">
      <p id="display">{displayText}</p>
    </div>
  );
};
