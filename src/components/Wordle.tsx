import { useEffect } from 'react'
import { Props, useWordle } from '../hooks/useWordle'

export default function Wordle({solution}: Props) {
    const {currentGuess, handleKeyup} = useWordle({solution})

    useEffect(() => {
        document.addEventListener('keyup', handleKeyup)
        return () => {
           document.removeEventListener('keyup', handleKeyup)
        }
    }, [handleKeyup])

  return (
    <div>Wordle</div>
  )
}
