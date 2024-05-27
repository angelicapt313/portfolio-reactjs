import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

export const Navbar = () => {
    return (
        <nav>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>

    )
}