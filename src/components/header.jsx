import React from 'react'
import '../styles/header.css'
import { NavLink } from 'react-router-dom'
import icone from '../assets/icone.png'

const Header = () => {
  return (
    <>
      <header>
        <div className="nav_bar">
          <ul>
            <li>
              <NavLink>project</NavLink>
            </li>
            <li>
              <NavLink>skills</NavLink>
            </li>
            <li>
              <img className='icon' src={icone} alt="" />
            </li>
            <li>
              <NavLink>about</NavLink>
            </li>
            <li>
              <NavLink>contact</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
