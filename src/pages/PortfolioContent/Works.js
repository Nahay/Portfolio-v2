import React from 'react';

import Tilt from 'react-parallax-tilt';

import { PlanetOne, Fishing } from '../../assets/Portfolio/indexEtc';
import * as w from '../../assets/Portfolio/worksIndex';


const Works = () => {

    return (
        
        <div className='works' id='works'>
            
            <div className="title__container">
                <h2 className='bg-title'>WORKS</h2>
                <img src={PlanetOne} className='works__planet' alt="Planet" />
            </div>

            <div className="works__boxes">
                
                <div className='fishing-container'>
                    <a
                        href='https://github.com/Nahay/Mando'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.05}
                            glarePosition={'all'}
                            glareBorderRadius={'30px'}
                            className='works__box blur'
                        >
                            <h2 className='box__title'><span className='underline'>Man</span>do</h2>
                            <img src={w.Mando} className='box__img' alt="Mando" />
                        </Tilt>
                    </a>
                    <img src={Fishing} className='fishing__img' alt="Astro fishing" />
                </div>
                <a
                    href='https://github.com/Nahay/Charlemagne'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='box__2'
                >
                    <Tilt
                            glareEnable={true}
                            glareMaxOpacity={0.05}
                            glarePosition={'all'}
                            glareBorderRadius={'30px'}
                            className='works__box box__2__container blur'
                    >
                        <h2 className='box__title'><span className='underline'>Charle</span>magne</h2>
                        <img src={w.Charlemagne} className='box__img' alt="Charlemagne" />
                    </Tilt>
                </a>
                <a
                    href='https://github.com/Nahay/WeebLampe'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='box__3'
                >
                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.05}
                        glarePosition={'all'}
                        glareBorderRadius={'30px'}
                        className='works__box blur'
                    >
                        <h2 className='box__title'><span className='underline'>Weeb</span> Lampe</h2>
                        <img src={w.WeebLampe} className='box__img' alt="Weeb Lampe" />
                    </Tilt>
                </a>
            </div>
            

        </div>
    );
}

export default Works;