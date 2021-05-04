import { useState } from "react";
import "./styles.css";
export default function App() {
  const [data, setData] = useState(1);
  return (
    <div className="App">
      <div>{data}</div>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        increment
      </button>
      <button
        disabled={data === 0}
        onClick={() => {
          setData(data - 1);
        }}
      >
        decrement
      </button>
    </div>
  );
}
