import { useState } from 'react';

const Counter = ({ descriptor, initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count} {descriptor}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
