import { useEffect, useState } from "react";
import {
  INTERVAL_INCREMENT,
  interval_spped,
  MAX_VAL,
  MIN_VAL,
} from "./constant";

export default function ProgressBar() {
  const [bar, setBar] = useState(MIN_VAL);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("setInterval running ");
      setBar((prevBarvalue) => {
        if (prevBarvalue >= MAX_VAL) {
          clearInterval(interval);
        }
        return Math.min(prevBarvalue + INTERVAL_INCREMENT, MAX_VAL);
      });
    }, interval_spped);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="container">
      <div
        style={{ transform: `translateX(${bar - MAX_VAL}%)` }}
        className=" progress"
      ></div>
    </div>
  );
}
