import { useEffect, useRef, useState } from "react";
import useCounterStore from "./stores/counterStore";

function ButtonComponent() {
  // const [count, setCount] = useState(10); // state = [stateVariable, function]

  const count = useCounterStore((state) => state.count);
  const increaseCount = useCounterStore((state) => state.increaseCount);
  const decreaseCount = useCounterStore((state) => state.decreaseCount);
  const resetCount = useCounterStore((state) => state.resetCount);

  const buttonRef = useRef();

  function onButtonClick() {
    increaseCount();
  }

  useEffect(
    () => {
      console.log("hello");
      console.log(buttonRef);

      // api fetch
    },
    // dependency array
    [count],
  );

  return (
    <>
      <h1>count: {count}</h1>

      <button
        ref={buttonRef}
        style={{ margin: "2rem", padding: "2rem" }}
        onClick={onButtonClick}
      >
        Increase +
      </button>

       <button
        ref={buttonRef}
        style={{ margin: "2rem", padding: "2rem" }}
        onClick={decreaseCount}
      >
        Decrease -
      </button>

       <button
        ref={buttonRef}
        style={{ margin: "2rem", padding: "2rem" }}
        onClick={resetCount}
      >
        Reset
      </button>
    </>
  );
}

export default ButtonComponent;
