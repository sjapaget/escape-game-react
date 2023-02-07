import { React } from 'react';
import NextSceneBtn from '../NextSceneBtn';

function Info() {

  return (
    <aside
          className="col-span-5 p-2"
        >
          {/* Info window here */}
          <h2>The rules</h2>
          <ul>
            <li>Click a card to reveal it</li>
            <li>Click on a second card to reveal it</li>
            <li>If they match, the cards will remain revealed</li>
            <li>If they don't match they will both turn back over</li>
            <li>Keep playing until all the cards are revealed</li>
          </ul>
        </aside>
  )
}

export default Info;
