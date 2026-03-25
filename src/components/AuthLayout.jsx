import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AuthLayout({ children, authentication = true }) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // authentication=true  → protected page (All Posts, Add Post)
        // authentication=false → public only (Login, Signup)

        // if (authStatus === true) {
        //     navigate('/')
        // }
        // else if(authStatus === false) {
        //     navigate('/login')
        // }

        if (authentication && authStatus !== authentication) {
            // Guest user protected page pe aya → login bhejo
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            // Logged-in user login/signup pe aya → home bhejo
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}