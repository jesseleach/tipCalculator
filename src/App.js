import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("")
  const [tip, setTip] = useState();

  const handleInputChange = (evt) => {
    const newValue = evt.target.value;
    setInput(newValue);
  };

  const getTipClickHandler = (percentage) => () => {
    setTip(input * percentage);
  }
    const handleClickReset = () => {
    setTip(null);
    setInput("");

  };

  return (
    <div>
      <h1>Tip Calculator</h1>
      <p>The tip is {tip}</p>
      <input value={input} onChange={handleInputChange} />
      <button disabled={!input} onClick={getTipClickHandler(0.25)}>25%</button>
      <button disabled={!input} onClick={getTipClickHandler(0.20)}>20%</button>
      <button disabled={!input} onClick={getTipClickHandler(0.15)}>15%</button>
      <button disabled={!input} onClick={getTipClickHandler(0.10)}>10%</button>
      <button disabled={!input} onClick={handleClickReset}>Reset</button>
    </div>
  );
}

export default App;
