import React from 'react';

const FourOhFour = () => {

    const infinite = () => {
        let tab = [];
        for (let i=0; i<1100; i++)
            tab.push(<p>LOST</p>)
        return tab
    }


    return ( 
        <div className='four-oh-four'>
            {infinite().map(w => {return w})}
        </div>
     );
}

export default FourOhFour;