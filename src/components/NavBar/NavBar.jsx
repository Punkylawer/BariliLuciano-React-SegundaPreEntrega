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
                <li><Link className="nav-link" to={'/nosotros'}>NOSOTROS</Link></li>
                <li><Link className="nav-link" to={'/contacto'}>CONTACTO</Link></li>
                </ul>
                <CartWidget />
            </div>
            </div>
        </nav>
    ) 
}