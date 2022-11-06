import React from 'react';

const EndScene = props => {
  const { start, end, endGame } = props;
  endGame();
  const gameDuration = ((end - start) / 1000) / 60;

  const durationInMins = (duration) => {
    const hrs = (duration / 60);
    const roundedHrs = Math.floor(hrs);
    const mins = (hrs - roundedHrs) * 60;
    const roundedMins = Math.round(mins);
    const secs = (mins - roundedMins)  *60;
    const roundedSecs = Math.round(secs)
    return `You finished in ${roundedHrs}:${roundedMins}:${roundedSecs}`
  }

  return (
    <div>
      <h1>You win!</h1>
      <p>Well done, you managed to solve all the puzzles and save the painting.</p>
      <p>You finished in:</p>
      <h3>{durationInMins(gameDuration)}</h3>
    </div>
  )
}

export default EndScene
