import { useState } from "react";

const ClickCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Click counter</h1>
      <p>Clicked {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  );
};

export default ClickCounter;
