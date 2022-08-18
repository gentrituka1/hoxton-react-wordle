import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/solutions')
    .then(res => res.json())
    .then(solutionFromServer => setSolution(solutionFromServer))
  },[])

  return (
    <div className="App">
      <h1>Wordle (Lingo)</h1>
      {solution && <div>Solution is: {solution}</div>}
    </div>
  )
}

export default App
