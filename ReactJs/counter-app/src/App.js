import "./App.css";

function App() {
  return (
    <div className="app">
      <h2 className="app-heading">Counter App</h2>
      <span className="app-counter">0</span>
      <div className="app-btn">
        <button className="btn increase">Increase</button>
        <button className="btn reset">Reset</button>
        <button className="btn descrese">Decrese</button>
      </div>
    </div>
  );
}

export default App;
