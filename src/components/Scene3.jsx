import { React, useState } from "react";
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

  // Returns an array of 16 Card objects in a random order, each image in the imgSources array must be used twice,
  const generateCardObjects = () => {
    const imgSources = [img1, img2, img3, img4, img5, img6, img7, img8];
    // iterate over imgSources and generate 2 Card elements for each img
    const cards = imgSources.flatMap((img, index) => {
      // Store these 2 card elements in an array
      return [
        {
          cardId: index + "a",
          hiddenSrc: hiddenImg,
          revealedSrc: img,
          cardRevealed: false
        },
        {
          cardId: index + "b",
          hiddenSrc: hiddenImg,
          revealedSrc: img,
          cardRevealed: false
        }
      ];
    });
    // Randomise the order of the array using a fisher-yates shuffle
    return cards
  };

  // Takes an array of card objects as an argument and returns an array of Card components
  const generateCardComponents = (objArray) => {
    return objArray.map(obj => {
      return (
        <Card
          key={obj.cardId}
          cardId={obj.cardId}
          hiddenSrc={obj.hiddenSrc}
          revealedSrc={obj.revealedSrc}
          cardRevealed={obj.cardRevealed}
          handleClick={(e) => handleCardClick(e)}
        />
      );
    });
  };

  // State for each individual card
  const [cardsArray, setCardsArray] = useState(generateCardObjects);
  // State to track if we are in a first or second click scenario on each click event
  const [secondClick, setSecondClick] = useState(false);
  // State to track the previously clicked card and be able to revert it to hidden if it doesn't match the card clicked next
  const [prevClickedCardIndex, setPrevClickedCardIndex] = useState(-1);

  const findPairCardId = (cardId) => {
    // Determine the matching card's cardId value
    const cardIdArr = cardId.split("");
    const pairCardLetter = cardIdArr[1] === "a" ? "b" : "a";
    return cardIdArr[0] + pairCardLetter;
  }

  const toggleCardRevealed = (cardIndex) => {
    setCardsArray(prevArray => prevArray.map((card, index) => {
      if (index === cardIndex) {
        return {
          ...card,
          cardRevealed: !card.cardRevealed
        };
      } else {
        return card;
      }
    }));
  }

  const handleCardClick = (event) => {
    // Update secondClick State
    setSecondClick(prev => !prev);

    //  Get the clicked card, its matching card, and their indexes
    const clickedCardId = event.target.attributes.cardid.value;
    const clickedCard = cardsArray.find(card => card.cardId === clickedCardId);
    const clickedCardIndex = cardsArray.indexOf(clickedCard);
    // Update the cardsArray state to reveal the image of the clicked card
    toggleCardRevealed(clickedCardIndex);

    if (secondClick) {
      // check if the matching card is also revealed
      const pairCardId = findPairCardId(clickedCardId);
      const pairCard = cardsArray.find(card => card.cardId === pairCardId);
      const pairCardIndex = cardsArray.indexOf(pairCard);

      if (pairCard.cardRevealed) {
        //Stay revealed && check if all cards are revealed
          // if all cards revealed trigger win
      } else {
        // wait 1 sec & revert both revealed cards to hidden,
        setTimeout(() => {
          toggleCardRevealed(clickedCardIndex);
          toggleCardRevealed(prevClickedCardIndex);
        }, 1000);
      }
    } else {
      // Store the clicked card so we can revert it back later if needed
      setPrevClickedCardIndex(clickedCardIndex);
    }
  };

  return (
    <main
        className="h-full overflow-hidden grid grid-cols-12 gap-4"
      >
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
          {sceneCompleted && <NextSceneBtn nextScene={sceneChange} text="Continue" />}
        </aside>

        <div
          className="h-4/6 col-span-7 grid grid-cols-4 gap-4 place-items-center"
        >
          {generateCardComponents(cardsArray)}
        </div>
      </main>
  )
}

export default Scene3;
