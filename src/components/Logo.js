import React from 'react';


const Logo = () => {

    return ( 
        <div className="logo__content">
            <span onClick={() => window.fullpage_api.moveTo(1, 0)}>lilyb</span>
        </div>
    );
}

export default Logo;