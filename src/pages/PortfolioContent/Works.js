import React from 'react';

import Planet from '../../assets/Portfolio/planet1.png';
import * as w from '../../assets/Portfolio/worksIndex';


const Works = () => {

    return (
        
        <div className='works'>
            
            <h1 className='bg-title'>
                WORKS
                <img src={Planet} className='works__planet' alt="Planet" />
            </h1>

            <div className='services__box blur'>
                <img src={w.Charlemagne} className='box__img' alt="Lightning" />
                <div className="box__text">
                    <h2 className='box__title'>Fast</h2>
                    <p>Optimized & lag free code</p>
                </div>
            </div>

        </div>
    );
}

export default Works;