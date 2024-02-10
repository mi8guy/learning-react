
import './App.css'

function App() {

  //console.log(process.env.REACT_APP_APPWRITE_URL)// Doesn't work; process is undefined; REACT_APP_ is necessary for env variables in Create React App. In vite it is different. VITE_
  // process.env is not in vite.
  // import.meta.env should be done in vite.
  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <>
      <h1>A blog with Appwrite</h1>
    </>
  )
}

export default App
