import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <h5>BoaSurfboards</h5>
                <p>Florisbelo Acosta 4245, Mar del Plata</p>
                <p>Contacto: foasurfboards@gmail.com</p>
            </div>
            <div className="col-md-6">
                <h5>Síguenos en redes sociales</h5>
                <ul className="list-inline social-icons">
                <li className="list-inline-item">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter"></i>
                    </a>
                </li>
                </ul>
            </div>
            </div>
            <div className="row">
            <div className="col">
                <p className="text-center">© {new Date().getFullYear()} BoaSurfboards. Todos los derechos reservados.</p>
            </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
