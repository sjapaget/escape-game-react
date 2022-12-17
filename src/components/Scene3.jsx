import { React } from "react";
import NextSceneBtn from './NextSceneBtn';
import Card from './scene3-components/Card';

// Image imports
import hiddenImg from '../assets/hidden.jpg';
import img1 from '../assets/aRenoir.jpg';
import img2 from '../assets/cMonet.jpg';
import img3 from '../assets/fLeger.jpg';
import img4 from '../assets/hMatisse.jpg';
import img5 from '../assets/jTurner.jpg';
import img6 from '../assets/pCezanne.jpg';
import img7 from '../assets/pGaguin.jpg';
import img8 from '../assets/vGogh.jpg';



function Scene3(props) {
  const {sceneChange, completeScene, sceneCompleted} = props;

  // Returns an array of 16 Card components in a random order, each image in the imgSources array must be used twice,
  const generateCards = () => {
    const imgSources = [img1, img2, img3, img4, img5, img6, img7, img8];
    // iterate over imgSources and generate 2 Card elements for each img
    const cards = imgSources.flatMap(img => {
      // Store these 2 card elements in an array
      return [
        <Card revealedSrc={img} hiddenSrc={hiddenImg} cardRevealed={false} />,
        <Card revealedSrc={img} hiddenSrc={hiddenImg} cardRevealed={false}/>
      ]
    });
    // Randomise the order of the array using a fisher-yates shuffle
    return cards
  }

  return (
    <div
      className="self-center flex flex-col justify-center items-center"
    >
      <h1>How good is your memory?</h1>
      <main
        className="grid grid-cols-2 gap-4"
      >
        <aside>
          {/* Info window here */}
          <h2>The rules</h2>
          <ul>
            <li>Click a card to reveal it</li>
            <li>Click on a second card to reveal it</li>
            <li>If they match, the cards will remain revealed</li>
            <li>If they don't match they will both turn back over</li>
            <li>Keep playing until all the cards are revealed</li>
          </ul>
          {sceneCompleted && <NextSceneBtn nextScene={sceneChange} text="Continue" />}
        </aside>

        <div
          className="grid grid-cols-4 gap-1"
        >
          {generateCards()}
        </div>
      </main>


    </div>
  )
}

export default Scene3;
