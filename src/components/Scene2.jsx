import { React } from "react";
import Numpad from "./scene2-components/Numpad";

function Scene2() {
  return (
    <div
      className="
        self-center flex flex-col justify-center items-center
      "
    >
      <h1
        className="
          text-center
          text-3xl
          mb-4
        "
      >
        What's the code?
      </h1>
      <Numpad />
      <p
      >Click on the numbers to see if they are present in the code.</p>
    </div>
  )
}

export default Scene2;
