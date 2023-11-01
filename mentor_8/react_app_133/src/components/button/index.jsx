import { useEffect, useState } from "react";
import Count from "../count";

const Button = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log("component rendering");
  }, []);
  return (
    <>
      <button onClick={() => setShow((show) => !show)}>
        {!show ? "open" : "close"}
      </button>
      {show && <Count />}
    </>
  );
};

export default Button;
