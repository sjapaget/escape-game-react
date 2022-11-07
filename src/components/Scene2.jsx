import { React, useState } from "react";
import Numpad from "./scene2-components/Numpad";
import NextSceneBtn from './NextSceneBtn';

function Scene2(props) {
  const {sceneChange} = props
  const [sceneCompleted, setSceneCompleted] = useState(false)

  function completeScene() {
    setSceneCompleted(prev => !prev)
  }
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
        {sceneCompleted ? "You Cracked it!" : "What's the code?"}
      </h1>
      <Numpad revealButton={completeScene}/>
      <p
      >
      {sceneCompleted ? "That one was easy... the next one won't be!" : "Click on the numbers to see if they are present in the code."}
      </p>
      {sceneCompleted && <NextSceneBtn nextScene={sceneChange} text="Continue" />}
    </div>
  )
}

export default Scene2;
