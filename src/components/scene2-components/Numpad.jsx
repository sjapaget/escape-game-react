import { React, useState } from "react";
import NumpadButton from "./NumpadButton";

function Numpad() {

  const [answerCode, setAnswerCode] = useState(generateAnswerCode())

  function generateButtons(numOfBtns) {
    const digits = [];
    for (let i = 0; i < numOfBtns; i++) {
      digits.push(i + 1)
    }

    return digits.map(num => <NumpadButton key={num} digit={num} />)
  }

  function generateAnswerCode() {
    const codeArr = Array(4).fill()
                            .map(() => Math.ceil(Math.random() * 9))
    return codeArr.join("");
  }

  return (
    <div className="grid grid-cols-3 gap-4 w-96">
      {generateButtons(9)}
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
      <p
        className="text-orange-50"
      >{answerCode}</p>
    </div>
  )
}


export default Numpad
