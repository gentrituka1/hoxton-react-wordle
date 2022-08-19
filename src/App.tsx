import { useEffect, useState } from 'react'
import './App.css'
import Wordle from './components/Wordle'

function App() {
  const[solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/solutions')
    .then(res => res.json())
    .then(solutionFromServer => setSolution(solutionFromServer))
  },[])

  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App
