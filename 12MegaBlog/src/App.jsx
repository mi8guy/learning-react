import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import './App.css'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true) 
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    } )
    .finally( () => setLoading(false))
  }, [])

  //console.log(process.env.REACT_APP_APPWRITE_URL)// Doesn't work; process is undefined; REACT_APP_ is necessary for env variables in Create React App. In vite it is different. VITE_
  // process.env is not in vite.
  // import.meta.env should be done in vite.
  // console.log(import.meta.env.VITE_APPWRITE_URL)

  //conditional rendering
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400 '>
      <div className="w-full block">
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
