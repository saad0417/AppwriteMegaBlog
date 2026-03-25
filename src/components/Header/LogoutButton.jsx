import React from 'react'
import authService from "../../appwrite/auth"
import {useDispatch} from "react-redux"
import {logout} from "../../store/authSlice"

function LogoutButton() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        }).catch((error) => {
            console.error("Logout failed:", error)
        }) // .catch() handles the case where authService.logout() fails (promise rejects).
    }

  return (
    <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full cursor-pointer'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutButton