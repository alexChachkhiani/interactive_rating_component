import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Rate from "./Components/Rate/Rate.jsx";
import Result from "./Components/Result/Result";

function App() {
  const [submit, setSubmit] = useState(false);
  console.log(submit);
  return (
    <div>
      <Rate setSubmit={setSubmit} />
      <Result />
    </div>
  );
}

export default App;
