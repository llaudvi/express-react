import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <button
        name="inc"
        type="button"
        onClick={() => setCounter(prevState => prevState + 1)}
      >
        Increment +
      </button>
      <button
        name="dec"
        type="button"
        onClick={() => setCounter(prevState => prevState - 1)}
      >
        Decrement -
      </button>
    </div>
  );
}

ReactDOM.render(<App />, root);
