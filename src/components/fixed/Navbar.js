import React from 'react';

import Logo from '../Logo';


const Navbar = ({fullpageApi}) => {

    return ( 
        <div className="navbar">
            <div className="navbar__left">
                <Logo fullpageApi = {fullpageApi}/>
            </div>
            <div className="navbar__right">
                <nav>
                    <a onClick={() => fullpageApi.moveTo(2, 0)}>
                        About
                    </a>
                    <a onClick={() => fullpageApi.moveTo(4, 0)}>
                        Services
                    </a>
                    <a onClick={() => fullpageApi.moveTo(5, 0)}>
                        Works
                    </a>
                    <a onClick={() => fullpageApi.moveTo(6, 0)} className='btn'>
                        Contact
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;