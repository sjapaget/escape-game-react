import { React } from "react";

function Card(props) {
  const {cardRevealed, revealedSrc, hiddenSrc} = props

  return (
      <img
        className='w-40'
        src={cardRevealed ? revealedSrc : hiddenSrc } />
  )
}

export default Card;
