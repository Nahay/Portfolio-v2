import React from 'react';
import { HashLink } from 'react-router-hash-link';


const Logo = () => {

    return ( 
        <div className="logo__content">
            <HashLink smooth to="/#top">lily b</HashLink>
        </div>
    );
}

export default Logo;