import { useState } from "react"

export type Props = {
    solution: string | null
}

export function useWordle({solution} : Props) {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)

    function formatGuess(){

    }

    function addNewGuess(){
    }

    function handleKeyup({key}){
        if(key === 'Backspace'){
        setCurrentGuess(guess => guess.slice(0, -1))
        return
        }
        if(currentGuess.length < 5){
            setCurrentGuess(guess => guess + key)
        }
    }
    

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}