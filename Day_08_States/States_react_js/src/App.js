import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const tracable = useState(0);
  const counter = tracable[0];
  const update = tracable[1];
  const fn = () => {
    update((current_val) => {
      const new_val = current_val + 1;
      return new_val;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fn}>Click me</button>
        <p>clicked: {counter} times</p>
      </header>
    </div>
  );
}

export default App;
