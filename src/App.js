import { useState } from "react";
import "./App.css";
import ColorDisplay from "./colorDisplay.js";

function App() {
  const [text, setText] = useState("Empty Value");
  const [textColor, setTextColor] = useState("black");
  const [hexValue, setHexValue] = useState("");
  const [bgColor, setBgColor] = useState("white");
  return (
    <div className="App">
      <ColorDisplay
        text={text}
        setText={setText}
        textColor={textColor}
        setTextColor={setTextColor}
        hexValue={hexValue}
        setHexValue={setHexValue}
        bgColor={bgColor}
        setBgColor={setBgColor}
      />
    </div>
  );
}

export default App;
