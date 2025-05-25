import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 data-testid="count">{count}</h1>
      <button onClick={() => setCount(count + 1)} data-testid="increase">Increase</button>
      <button onClick={() => setCount(count - 1)} data-testid="decrease">Decrease</button>
    </div>
  );
}

export default Counter;
