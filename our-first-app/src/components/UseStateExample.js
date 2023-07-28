// ! Introduction to State
import React, { useState } from "react";
// useState is a hook that allows us to access the state of the component

function UseStateExample() {
  // useState returns an array with exactly two values: initialState and setState
  // initialState (count) is the initial state of the component
  // setState (setCount) is a function that allows us to update the state of the component
  // useState(0) will be the first initial state of the component
  // state is not persistent meaning if the whole page is refreshed, the state will go back to the initial state
  const [count, setCount] = useState(0);

  // setCount in these functions will update the state of the component
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Welcome to my counter app</h1>
      <p>The count is: {count}</p>
      {/* onClick is mousehandler function that is triggered by mouse clicks */}
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default UseStateExample;

