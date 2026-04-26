import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = "Count: " + count;
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Hooks Demo</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Hello {name}</h3>
    </div>
  );
}

export default App;