import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className="App"
      style={{
        backgroundColor: count < 5 ? "white" : "black",
        color: count < 5 ? "black" : "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Counter 1: {count}</h2>
      <h2>Counter 2: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment (Button 1)
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increment (Button 2)
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default App;
