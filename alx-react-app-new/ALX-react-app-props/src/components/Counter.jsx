import React, { useState } from 'react';

const Counter = () => {
  // Initialize state
  const [count, setCount] = useState(0);

  // Handlers for counter actions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Counter</h1>
      {/* Display current count */}
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>
      {/* Buttons for actions */}
      <button onClick={increment} style={{ margin: '5px', padding: '10px 20px' }}>
        Increment
      </button>
      <button onClick={decrement} style={{ margin: '5px', padding: '10px 20px' }}>
        Decrement
      </button>
      <button onClick={reset} style={{ margin: '5px', padding: '10px 20px' }}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
