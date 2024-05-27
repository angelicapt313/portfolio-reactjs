import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

export const Navbar = () => {
    return (
        <nav>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>

    )
}