import { useState } from "react";

export type Props = {
  solution: string | null;
};

export function useWordle({ solution }: Props) {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState(["hello", "ninja"]);
  const [isCorrect, setIsCorrect] = useState(false);

  function formatGuess() {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((l) => {
        return {key: l, color: 'grey'}
    })

    formattedGuess.forEach((l, i) => {
        if(solutionArray[i] === l.key) {
            formattedGuess[i].color = 'green'
        }
    })
  }

  function addNewGuess() {

  }

  function handleKeyup({ key }) {
    if (key === "Enter") {
      if (turn > 5) {
        console.log("you used all your guesses!");
        return;
      }
      if (history.includes(currentGuess)) {
        console.log("you already tried that word.");
        return;
      }
      if (currentGuess.length !== 5) {
        console.log("word must be 5 characters.");
        return;
      }

      formatGuess();
    }
    if (key === "Backspace") {
      setCurrentGuess((prevGuess) => prevGuess.slice(0, -1));
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prevGuess) => prevGuess + key);
      }
    }
  }

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
}
