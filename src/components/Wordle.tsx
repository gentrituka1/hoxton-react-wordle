import { useEffect } from 'react'
import { Props, useWordle } from '../hooks/useWordle'

export default function Wordle({solution}: Props) {
    const {currentGuess, handleKeyup} = useWordle({solution})

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)
        return () => {
           window.removeEventListener('keyup', handleKeyup)
        }
    }, [handleKeyup])

  return (
    <div>Wordle</div>
  )
}
