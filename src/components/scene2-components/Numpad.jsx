import { React, useState, useEffect } from "react";
import NumpadButton from "./NumpadButton";

function Numpad(props) {
  const { revealButton } = props;
  const [answerCode, setAnswerCode] = useState(generateAnswerCode())
  const [inputCode, setInputCode] = useState(["*", "*", "*", "*"])
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (answerCode.join("") === inputCode.join("")) {
      revealButton()
    }
  }, [inputCode])

  function addAttempt() {
    if (attempts < 5) {
      setAttempts(prev => prev + 1)
    } else {
      resetCode()
    }
  }

  function resetCode() {
    setAnswerCode(generateAnswerCode())
    setAttempts(0)
    setInputCode(["*", "*", "*", "*"])
  }

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

  function handleInputClick(inputNum) {
    updateInputCode(inputNum)
    addAttempt()
  }

  function generateButtons(numOfBtns) {
    const digits = [];
    for (let i = 0; i < numOfBtns; i++) {
      digits.push(i + 1)
    }

    return digits.map(num => <NumpadButton key={num} digit={num} handleClick={() => handleInputClick(num)}/>)
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
        <p>{attempts} of 5 attempts before reset</p>
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
