import "./App.css";
import { useState } from "react";

function App() {
  const [tip, setTip] = useState();
  const handleNameChange = (evt) => {
    const newValue = evt.target.value;
    setTip(newValue * .20);
  }

  return (
    <div>
      <h1>Tip Calculator</h1>
      <p>The tip is {tip}</p>
      <input onChange={handleNameChange}/>
    </div>
  );
}

export default App;
