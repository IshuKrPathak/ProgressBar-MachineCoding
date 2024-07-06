import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show ? <ProgressBar /> : ""}
      <button onClick={() => setShow(!show)}> Toggle</button>
    </>
  );
}
