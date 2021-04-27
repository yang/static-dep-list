import React, { useMemo, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [state, setState] = useState([0]);
  // good:
  // const blah = useMemo(() => new Set(state), [JSON.stringify(state)]);
  // bad:
  const blah = useMemo(() => new Set(state), state);
  return (
    <div className="App">
      <button
        onClick={() => {
          setState([...state, state.length]);
        }}
      >
        Grow
      </button>
      {JSON.stringify(Array.from(blah.keys()))}
      {JSON.stringify(state)}
    </div>
  );
}

export default App;
