import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from '../assets/logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/"> <img  src={logo} /> </Link>
                
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;