import React from 'react';

import Planet from '../../assets/Portfolio/planet1.png';
import Fishing from '../../assets/Portfolio/fishing.png';
import * as w from '../../assets/Portfolio/worksIndex';


const Works = () => {

    return (
        
        <div className='works'>
            
            <h1 className='bg-title'>
                WORKS
                <img src={Planet} className='works__planet' alt="Planet" />
            </h1>

            <div className="works__boxes">
                <div className='fishing-container'>
                    <a
                        href='https://github.com/Nahay/Mando'
                        target="_blank"
                        rel="noopener noreferrer"
                        className='works__box blur'
                    >
                        <h2 className='box__title'><span className='underline'>Man</span>do</h2>
                        <img src={w.Mando} className='box__img' alt="Mando" />
                    </a>
                    <img src={Fishing} className='fishing__img' alt="Astro fishing" />
                </div>
                <a
                    href='https://github.com/Nahay/Charlemagne'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='works__box blur'
                >
                    <h2 className='box__title'><span className='underline'>Charle</span>magne</h2>
                    <img src={w.Charlemagne} className='box__img' alt="Charlemagne" />
                </a>
                <a
                    href='https://github.com/Nahay/WeebLampe'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='works__box blur'
                >
                    <h2 className='box__title'><span className='underline'>Weeb</span> Lampe</h2>
                    <img src={w.WeebLampe} className='box__img' alt="Weeb Lampe" />
                </a>
            </div>
            

        </div>
    );
}

export default Works;