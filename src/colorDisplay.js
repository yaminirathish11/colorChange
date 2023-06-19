import { useState } from "react";
import "./colorDisplay.css";
import colorNames from 'colornames'

const ColorDisplay = () => {
  const [text, setText] = useState("Empty Value");
  const [textColor, setTextColor] = useState("black");
  const [hexValue, setHexValue] = useState("");

  const handleTextChange = (e) => {
    const change = e.target.value;
    setText(change === "" ? "Empty Value" : change);
    setHexValue(colorNames(change));
  };

  const handleTextColorChange = () => {
    setTextColor((prevColor) => (prevColor === "black" ? "white" : "black"));
  };


  return (
    <div className="main">
      <div className="display" style={{ backgroundColor: text}}>
        <p className="innertext" style={{ color: textColor }}>
          {text} <br></br>
          {hexValue}
        </p>
      </div>
      <input
        className="textbox"
        id="text1"
        type="text"
        placeholder="Add Color Name"
        onChange={handleTextChange}
        
      />
      <button className="button" onClick={handleTextColorChange}>
        Toggle Text Color
      </button>
    </div>
  );
};

export default ColorDisplay;
