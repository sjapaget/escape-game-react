import React from 'react';
import NextSceneBtn from "./NextSceneBtn"

const Start = props => {
  return (
    <div className='flex flex-col justify-between p-12 bg-slate-100 rounded-lg'>

      <h1 className='text-8xl my-4'>Art Escape</h1>

      <NextSceneBtn
        text={"Start"}
        nextScene={props.sceneChange}
       />
    </div>
  )
}

export default Start
