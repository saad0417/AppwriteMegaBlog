import React from 'react'
import {Container, Logo, LogoutButton} from "../index"
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'

function Header() {
  // weather user is login or not.
  const authStatus = useSelector((state) => state.auth?.status)
  const navigate = useNavigate()

  // Here we are using the authStatus to conditionally render the navigation items. If the user is authenticated, they will see "All Posts" and "Add Post". If not, they will see "Login" and "Signup". The "Home" link is always visible.
  const navItems = [
    { name: 'Home', slug: "/", active: true }, 
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        {/* This is the navigation bar. It contains the logo and the navigation items. */}
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='130px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}  // This will navigate to the path specified in the navItems array when the button is clicked.
                className='inline-bock px-6 py-2 duration-250 hover:bg-blue-200 rounded-full cursor-pointer'
                >{item.name}</button>
              </li>
            ) : null
          )}

          {/* The statement inside the () will only run if the 'authStatus' is true. */}
            {authStatus && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header