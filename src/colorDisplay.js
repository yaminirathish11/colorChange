import "./colorDisplay.css";
import colorNames from "colornames";

const ColorDisplay = ({
  text,
  setText,
  textColor,
  setTextColor,
  hexValue,
  setHexValue,
  bgColor,
  setBgColor,
}) => {

    
  const handleTextChange = (e) => {
    const change = e.target.value;
    setText(change === "" ? "Empty Value" : change);
    setHexValue(colorNames(change));
    setBgColor(change === "" ? "white" : change);
  };

  const handleTextColorChange = () => {
    setTextColor((prevColor) => (prevColor === "black" ? "white" : "black"));
  };

  return (
    <div className="main">
      <div className="display" style={{ backgroundColor: bgColor }}>
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
