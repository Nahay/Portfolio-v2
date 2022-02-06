import React from 'react';


const Logo = ({fullpageApi}) => {

    return ( 
        <div className="logo__content">
            <a onClick={() => fullpageApi.moveTo(1, 0)}>lilyb</a>
        </div>
    );
}

export default Logo;