import { useState } from "react"
import Button from "./components/Button"


function App() {
  const [color, setColor] = useState("olive")

  return (
    
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
          <Button btnText="Red" color="red" setColor={setColor}/>
          <Button btnText="Green" color="green" setColor={setColor} />
          <Button btnText="Blue" color="blue" setColor={setColor} />
          <Button btnText="Yellow" color="yellow" setColor={setColor} textColor="black"/>
          <Button btnText="Black" color="black" setColor={setColor}/>
          <Button btnText="Teal" color="teal" setColor={setColor}/>
        </div>
      </div>
    </div>
    
  )
}

export default App
