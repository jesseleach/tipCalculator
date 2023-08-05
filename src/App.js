import "./App.css";
import { useState } from "react";

function App() {
  const [tip, setTip] = useState('');
  const [updated, setUpdated] = useState(tip);

  const handleNameChange = (evt) => {
    const newValue = evt.target.value;
    setTip(newValue * .20);
  }

  const handleClick = () => {
setUpdated(tip);
  };

  return (
    <div>
      <h1>Tip Calculator</h1>
      <p>The tip is {updated}</p>
      <input onChange={handleNameChange}/>
      <button onClick={handleClick}>update</button>
    </div>
  );
}

export default App;
