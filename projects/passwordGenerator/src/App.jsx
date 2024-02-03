import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook: to get a reference

  const passwordRef = useRef(null)

  /**
   * useCallback():
   * 
   *  useCallback is used for memoization of a function. Memoization of a function 
   *  is done when a function is getting called many times. This optimizes the app 
   *  and the function is cached. useCallback() also takes in a dependency array that 
   *  has element which upon changing will call this function again!
  */

 
  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*_-+=[]{}~`()"

    for(let i = 1; i <= length; i++){
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])
  // setPassword is passed for optimizing useCallback(). It is not necessary to pass.
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3) // to select a range
    window.navigator.clipboard.writeText(password)
  }, [password])

  // passwordGenerator() // react limits the number of re-renders to prevent infinite loops

  useEffect( () => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-700'>
          <h1 className='text-white text-center m-1'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            type="text" 
            value={password}
            className='outline-none w-full py-1 px-3'
            name="" 
            placeholder='password'
            readOnly
            ref={passwordRef}
            />
            <button 
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 hover:bg-blue-500 text-white px-3 py-0.5 shrink-0'
            >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
              type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input 
              type="checkbox" 
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input 
              type="checkbox" 
              defaultChecked={characterAllowed}
              id='charInput'
              onChange={() => {
                setCharacterAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
