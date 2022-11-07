import { React } from "react";
import NumpadButton from "./NumpadButton";

function Numpad() {

  function generateButtons(numOfBtns) {
    const digits = [];
    for (let i = 0; i < numOfBtns; i++) {
      digits.push(i + 1)
    }

    return digits.map(num => <NumpadButton digit={num} />)
  }
  const buttons = generateButtons(9)

  return (
    <div className="grid grid-cols-3 gap-4 w-96">
      {buttons}
      <div
        className="
          col-span-full
          rounded-full
          text-center
          bg-black
          text-green-400">
        <p>
          ****
        </p>
      </div>
    </div>
  )
}

export default Numpad
