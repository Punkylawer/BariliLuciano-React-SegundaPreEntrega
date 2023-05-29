import React from 'react';
import './Footer.css'
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    
<footer className="footer">
        <div className="container">
            <div className="row">
            <div className="col-lg-4 col-md-6 div-marca">
            <Link to='/'>
                <a className="navbar-brand" href="#">
                <img src="/src/assets/logo1.webp" alt="Favicon" className="favicon" />    
                    BOA SURFBOARDS</a>
                </Link>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="contact">
                <div className="contact-item">
                <FontAwesomeIcon icon="map-marker" />
                    <span>Storni 5859, Mar del Plata, Argentina</span>
                </div>
                <div className="contact-item">
                <FontAwesomeIcon icon="whatsapp" />
                    <span>+ 58 9 2234576890</span>
                </div>
                <div className="contact-item">
                    <i className="fa fa-envelope"></i>
                    <span>info@boasurfboards.com</span>
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12">
                <div className="social-media">
                <span>Síguenos en nuestras redes sociales:</span>
                <div className="social-links">
                    <a href="https://www.instagram.com/boasurfboards" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/boasurfboards" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.twitter.com/boasurfboards" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter"></i>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </footer>

    );
};

export default Footer;
