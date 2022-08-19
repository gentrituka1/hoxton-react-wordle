import { useEffect } from 'react'
import { useWordle } from '../hooks/useWordle'

export default function Wordle({solution}: any) {
    const {currentGuess, handleKeyup, guesses, turn, isCorrect} = useWordle({solution})

    useEffect(() => {
        document.addEventListener('keyup', handleKeyup)
        return () => {
           document.removeEventListener('keyup', handleKeyup)
        }
    }, [handleKeyup])

  return (
    <>
        <div>
            <div>Solution: {solution}</div>
            <div>Current Guess: {currentGuess}</div>
        </div>
    </>
  )
}
