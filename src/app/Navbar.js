import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import 'react-bootstrap'

import { Login } from '../features/auth/Login'
export const Navbar = () => {
  return (

    <div className='navbar border-bottom border-dark p-3 fs-4'>
      <Link to='/'>Pastebin</Link>
      <Login />
    </div>

  )
}
