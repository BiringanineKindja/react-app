import React from 'react'
import logo from '../assets/blog2.webp';
import './navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <img src={logo} alt="" />
        <div className='navlinks'>
            <a href="/">home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/account">Account</a>
        </div>
    </nav>
  )
}
