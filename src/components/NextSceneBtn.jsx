import React from 'react'

const Button = props => {
  // const { nextScene, text } = props;
  return (
    <button
      className='
      border-solid
      border-2
      border-green-500
      rounded-lg
      mx-auto
      p-4
      text-6xl
      '
      onClick={props.nextScene}
    >
      {props.text}
    </button>
  )
}

export default Button;
