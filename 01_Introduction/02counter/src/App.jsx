import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //Why hooks? Don't need to take multiple references in JS to update innerHTMLs at various places.

  let [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = () => {
    setCounter(counter+1)
  }

  const removeValue = () =>{
    if((counter-1) > 0){
      counter = counter - 1
    } else {
      counter = 0
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}
      >Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
