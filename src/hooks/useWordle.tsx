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
        console.log(key)
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}