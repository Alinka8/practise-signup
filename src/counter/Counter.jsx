import React, { useState } from "react";
import "./counter.style.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementNumber = () => {
    if (counter < 100) {
      return setCounter(counter + 10);
    }
  };

  const decrementNumber = () => {
    setCounter(counter - 10);
  };

  return (
    <>
      <h1>Counter game</h1>
      <div className="counter-box">
        <button onClick={incrementNumber}>+10</button>
        <h1> {counter} </h1>
        <button onClick={decrementNumber}>-10</button>
        {counter === 100 && <h2>You reach max number!</h2>}
      </div>
    </>
  );
};

export default Counter;
