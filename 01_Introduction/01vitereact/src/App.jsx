import Chai from './chai'

function App() {
  const username = "chai aur code"
  return (
    <>
     <h1>Chai aur react with vite {username}</h1> {/*{username} this is evaluated expression */}
     <Chai /> 
    </>
  )
}

export default App
