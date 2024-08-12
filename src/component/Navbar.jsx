import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to='/' className="link"> <div className="link-box">Home</div> </Link>
            <Link to='/about' className="link"> <div className="link-box">About</div> </Link>
            <Link to='/contact' className="link"> <div className="link-box">Contact Us</div> </Link>
        </div>
    )
}

export default Navbar
