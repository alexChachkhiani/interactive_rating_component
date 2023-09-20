import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Rate from "./Components/Rate/Rate.jsx";
import Result from "./Components/Result/Result";

function App() {
  const [number, setNumber] = useState();
  const [submit, setSubmit] = useState(false);
  console.log(submit);
  return (
    <div>
      {submit ? (
        <Result number={number} />
      ) : (
        <Rate number={number} setNumber={setNumber} setSubmit={setSubmit} />
      )}
    </div>
  );
}

export default App;
