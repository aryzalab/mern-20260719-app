import { useEffect, useState } from "react";
import useCounterStore from "./stores/counterStore";

function Tasks() {
  const count = useCounterStore((state) => state.count);

  const [result, setResult] = useState({
    loading: false,
    data: [],
  });

  useEffect(() => {
    setResult({
      loading: true,
      data: [],
    });

    // api data fetching
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) =>
        setResult({
          //   loading: true,
          data: data,
        }),
      );
  }, []);

  if (result.loading) return <h1>Loading...</h1>;

  return (
    <ol>
      <h1>Tasks component</h1>
      <h2>count:{count}</h2>
      {result.data.map((item) => (
        <li key={item.title}>{item.title}</li>
      ))}
    </ol>
  );
}

export default Tasks;
