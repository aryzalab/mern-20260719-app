import React from "react";

function ButtonComponent() {
  // let count = 0;

  const [count, setCount] = React.useState(0);

  function onButtonClick() {
    // count++;
    setCount(count + 1);

    console.log({ count });
  }

  return (
    <>
      <h1>count: {count}</h1>

      <button
        style={{ margin: "2rem", padding: "2rem" }}
        onClick={onButtonClick}
      >
        Click me
      </button>
    </>
  );
}

export default ButtonComponent;
