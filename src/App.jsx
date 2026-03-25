import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from "./store/authSlice"
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components';  // clean & simple


function App() {
  const [loading, setLoading] = useState(true) // this will be true until we fetch the user data from the server, after fetching the user data we will set it to false.
  const dispatch = useDispatch()

  // it checks the user login status when the app start if the user is logged in then it will set the user data in the redux store(login) and if the user is not logged in then it will set the user data to null in the redux store(logout).
  // basically it reserves the state of the user login status if user was previously logged in then it will keep the user logged in and if user was previously logged out then it will keep the user logged out when the app refreshes.
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) 
      {
        dispatch(login(userData))
      } 
      else 
      {
        dispatch(logout())
      }
    })
    .catch((error) => {
      console.error("Error fetching user:", error)
      dispatch(logout())  // optional: ensure clean state
    })
    .finally(() => { // this will run after the promise is resolved or rejected(it always runs).
                     // as loading was true before fetching the user data, now we will set it to false after fetching the user data whether it is successful or not.
      setLoading(false)  
    })

}, [])

  return !loading ? (
  <div className="bg-gray-500 min-h-screen flex flex-wrap content-between">
    <div className="w-full block">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
    </div>
  </div>) : (null)
}

export default App
