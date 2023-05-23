import React from "react";
import './navbar.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";


export default function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/'>
                <a className="navbar-brand" href="#">
                <img src="/src/assets/logo1.webp" alt="Favicon" className="favicon" />    
                    BOA SURFBOARDS</a>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse border border-dark div-nav" id="navbarNav">  
                <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="surfboardsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SURFBOARDS
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="surfboardsDropdown">
                    <li className="dropdown-item">
                    <NavLink to={`/categoria/Shortboard`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Shortboards</NavLink>
                    </li>
                    <li className="dropdown-item">
                    <NavLink to={`/categoria/Longboard`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Longboards</NavLink>
                    </li>
                    <li className="dropdown-item">
                    <NavLink to={`/categoria/Fishboard`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Fishboard</NavLink>
                    </li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="shopDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SHOP
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                    <li><a className="dropdown-item" href="#">Boardbags</a></li>
                    <li><a className="dropdown-item" href="#">Leashes</a></li>
                    <li><a className="dropdown-item" href="#">Wetsuits</a></li>
                    <li><a className="dropdown-item" href="#">Fins</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">BLOG</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">NOSOTROS</a>
                </li>
                </ul>
                <CartWidget />
            </div>
            </div>
        </nav>
    ) 
}