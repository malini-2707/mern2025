import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <nav className='navbar'>
        <Link to='/' className='Link'>Home</Link>
        <Link to='/skills' className='Link'>Skills</Link>
        <Link to='/about' className='Link'>About</Link>
        <Link to='/contact' className='Link'>Contact</Link>
        <Link to='/counter' className='Link'>Counter</Link>
        <Link to='/hook' className='Link'>Hook</Link>
        <Link to='/login' className='Link'>Login</Link>
        <Link to='/todo' className='Link'>ToDo</Link>
    </nav>
    </div>
  )
}

export default Navbar