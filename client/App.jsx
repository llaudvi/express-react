import React, { useState } from 'react';
import { H1, Button, P } from '@manulife/mux';

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <H1>{counter}</H1>
      <P>{counter}</P>
      <Button
        name="inc"
        type="button"
        onClick={() => setCounter(prevState => prevState + 1)}
      >
        Increment +
      </Button>
      <Button
        name="dec"
        type="button"
        onClick={() => setCounter(prevState => prevState - 1)}
      >
        Decrement -
      </Button>
    </div>
  );
}
