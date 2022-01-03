import React from 'react';
import { Link } from 'react-router-dom';


const SIONavbar = () => {

    return ( 
        <div className="navbar">
            <div className="navbar__left">
                <div className="logo__content">
                    <Link to="/" target="_blank" rel="noopener noreferrer">lily b</Link>
                </div>
            </div>
            <div className="navbar__center">
                <nav>
                    <Link to="/sio">
                        Accueil
                    </Link>
                    <Link to="/" target="_blank" rel="noopener noreferrer">
                        Profil
                    </Link>
                    <Link to="/sio/realisations">
                        Réalisations
                    </Link>
                    <Link to="/sio/veille-technologique">
                        Veille technologique
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default SIONavbar;