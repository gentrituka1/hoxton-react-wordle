import { useState } from "react"

type Props = {
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

    function handleKeyup(event){
        
    }
}