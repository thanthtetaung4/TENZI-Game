import { useState, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Game from "./Game";
import About from "./About";

export default function App() {
  const [dice, setDice] = useState(allNewDice());
  const [win, setWin] = useState(false);
  const [showInstruction, setShowInstruction] = useState(true);
  useEffect(() => {
    let trueCount = 0;
    let value = dice[0].value;
    dice.forEach((die) => {
      if (die.value - value === 0 && die.isHeld === true) {
        trueCount++;
      }
    });
    trueCount === 10 && setWin(true);
  }, [dice]);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function rollDice() {
    const newDice = dice.map((die) => {
      if (die.isHeld === false) {
        return { ...die, value: Math.ceil(Math.random() * 6) };
      }
      return die;
    });

    setDice(newDice);
  }

  function toggleHold(dieID) {
    if (win) {
      return;
    }
    const newDice = dice.map((die) => {
      if (die.id === dieID) {
        return { ...die, isHeld: !die.isHeld };
      }
      return die;
    });

    setDice(newDice);
  }

  function restart() {
    setDice(allNewDice());
    setWin(false);
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} die={die} toggleHold={toggleHold} />
  ));

  return (
    <>
      {showInstruction ? (
        <About hideInstruction={setShowInstruction} />
      ) : (
        <Game
          win={win}
          rollDice={rollDice}
          diceElements={diceElements}
          restart={restart}
        />
      )}
    </>
  );
}
