import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar () {
  return (
    <div>
        <nav>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/about"> About </NavLink>
            <NavLink to="/contact"> Contact</NavLink>
            <NavLink to="/projects"> Projects </NavLink>
            <NavLink to="/users"> Users </NavLink>
            <NavLink to="/login"> Login </NavLink>
        </nav>
    </div>
  )
}

export default Navbar