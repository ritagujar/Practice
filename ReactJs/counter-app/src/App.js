import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increseCounter = () => {
    setCounter((counter) => counter + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };
  const decreaseCounter = () => {
    setCounter((counter) => counter - 1);
  };

  const counterColor = counter < 0 ? "red" : counter > 0 ? "green" : "black";

  return (
    <div className="app">
      <h2 className="app-heading">Counter App</h2>
      <span className="app-counter" style={{ color: counterColor }}>
        {counter}
      </span>
      <div className="app-btn">
        <button className="btn increase" onClick={increseCounter}>
          Increase
        </button>
        <button className="btn reset" onClick={resetCounter}>
          Reset
        </button>
        <button className="btn descrese" onClick={decreaseCounter}>
          Decrese
        </button>
      </div>
    </div>
  );
};

export default App;
