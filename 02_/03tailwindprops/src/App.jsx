import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObject = {
    username: "hitesh",
    age: 21
  }

  let newArr = [1,2,4]

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-2 mb-4' >Tailwind test</h1>

      {/* How to pass objects and arrays as props */}
      {/* <Card channel="chaiaurcode" someObject = {myObject} someArr={newArr}/>  */}
      <Card username="chaiaurcode" btnText="View Profile" />
      <Card username="Hitesh"  />
    </>
  )
}

export default App
