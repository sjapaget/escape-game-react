import React from 'react';

import Button from "./Button"

const Start = props => {
  return (
    <div className='flex flex-col justify-between p-12 bg-slate-100 rounded-lg'>

      <h1 className='text-8xl my-4'>Citizen Saviour</h1>

      <Button
        text={"Start"}
        nextScene={props.sceneChange}
       />
    </div>
  )
}

export default Start
