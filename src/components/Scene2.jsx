import { React } from "react";
import Numpad from "./scene2-components/Numpad";

function Scene2() {
  return (
    <div
      className="
        self-center
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
    </div>
  )
}

export default Scene2;
