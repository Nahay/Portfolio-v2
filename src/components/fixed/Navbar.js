import React from 'react';
import { HashLink } from 'react-router-hash-link';

import Mail from '../generics/vectors/Mail';
import Logo from '../Logo';


const Navbar = () => {

    return ( 
        <div className="navbar">
            <div className="navbar__left">
                <Logo/>
            </div>
            <div className="navbar__center">
                <nav>
                    <HashLink smooth to="/#home">
                        Home
                    </HashLink>
                    <HashLink smooth to={'/#about'}>
                        About
                    </HashLink>
                    <HashLink smooth to="/#works">
                        Works
                    </HashLink>
                </nav>
            </div>
            <div className="navbar__right">
                <a className="navbar__right__icon"  href="mailto:lily.barberou@gmail.com">
                    <Mail/>
                </a>
            </div>
        </div>
    );
}

export default Navbar;