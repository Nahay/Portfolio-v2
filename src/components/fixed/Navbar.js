import React from 'react';


const Navbar = ({api}) => {

    return ( 
        <div className="navbar">
            <div className="navbar__left">
            </div>
            <div className="navbar__right">
                <nav>
                    <button className='nav__btn' onClick={() => api.moveTo(2, 0)}>
                        About
                    </button>
                    <button className='nav__btn' onClick={() => api.moveTo(4, 0)}>
                        Services
                    </button>
                    <button className='nav__btn' onClick={() => api.moveTo(5, 0)}>
                        Works
                    </button>
                    <button onClick={() => api.moveTo(6, 0)} className='btn'>
                        Contact
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;