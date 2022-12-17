import { React } from "react";

function Card(props) {
  const {cardRevealed, revealedSrc, hiddenSrc} = props

  return (
    <img
      src={cardRevealed ? revealedSrc : hiddenSrc }
      className=''
    />
  )
}

export default Card;
