import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { NavSideElement } from './navsideElement'

const NavSide = () => {
    return (
        <NavSideElement>
            <div>
                Cilsy
                <FaTimes/>
            </div>
            <Link to='/'>Home</Link>
            <Link to='/dashboard'>Dashboard</Link>
        </NavSideElement>
    )
}

export default NavSide
