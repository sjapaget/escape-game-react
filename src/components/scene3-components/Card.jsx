import { React } from "react";

function Card(props) {
  const {cardRevealed, revealedSrc, hiddenSrc, handleClick, cardId} = props

  return (
      <img
        cardid={cardId}
        checked={cardRevealed}
        className='w-40'
        src={cardRevealed ? revealedSrc : hiddenSrc }
        onClick={handleClick}
        />
  )
}

export default Card;
