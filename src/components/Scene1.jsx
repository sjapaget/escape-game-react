import React from 'react';
import Button from './Button'

const Scene1 = () => {
  return (
   <div>
     <p>
      Welcome to Art Escape!
    </p>
    <hr />
    <p>
      An escape game where you will have 15 minutes to solve a series of puzzles. Each of the puzzles will give you a clue to the identity of the world's most wanted art thief.
    </p>
    <hr />
    <p>
      If you solve the enigmas and identify the thief - you win! However, if you fail the world's finest cultural artefcts will forever be at risk.
    </p>
    <hr />
    <h3>
      The Rules
    </h3>
    <ul>
      <li>Please don't use the internet to help you</li>
      <li>No looking in the source code while you're playing</li>
      <li>etc.</li>
    </ul>
    <Button text="Start the game" />
   </div>
  )
}

export default Scene1
