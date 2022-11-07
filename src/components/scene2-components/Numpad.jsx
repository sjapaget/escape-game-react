import { React, useState, useEffect } from "react";
import NumpadButton from "./NumpadButton";

function Numpad(props) {
  const { revealButton } = props;
  const [answerCode, setAnswerCode] = useState(generateAnswerCode())
  const [inputCode, setInputCode] = useState(["*", "*", "*", "*"])

  useEffect(() => {
    if (answerCode.join("") === inputCode.join("")) {
      console.log("win")
      revealButton()
    }
  }, [inputCode])


  function updateInputCode(inputDigit) {
    setInputCode(prevInputCode => answerCode.map((ansNum, index) => {
      if (prevInputCode[index] === '*') {
        if (ansNum === inputDigit) {
          return inputDigit.toString();
        } else {
          return "*"
        }
      } else {
        return prevInputCode[index]
      }
    }))
  }

  function generateButtons(numOfBtns) {
    const digits = [];
    for (let i = 0; i < numOfBtns; i++) {
      digits.push(i + 1)
    }

    return digits.map(num => <NumpadButton key={num} digit={num} handleClick={() => updateInputCode(num)}/>)
  }

  function generateAnswerCode() {
    const codeArr = Array(4).fill()
                            .map(() => Math.ceil(Math.random() * 9))
    return codeArr;
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
          {inputCode}
        </p>
      </div>
      <p
        className="text-orange-50"
      >
        {answerCode}
      </p>
    </div>
  )
}

export default Numpad
