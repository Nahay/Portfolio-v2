import React from 'react';

import Tilt from 'react-parallax-tilt';

import { PlanetThree, PlanetTwo } from '../../assets/Portfolio/indexEtc';
import * as s from '../../assets/Portfolio/servicesIndex';


const Services = () => {

    return ( 
        <div className='services' id='services'>

            <div className="title__container">
                <h2 className='bg-title'>SERVICES</h2>
                <img src={PlanetThree} className='services__img' alt="PlanetThree" />
                <img src={PlanetTwo} className='services__img' alt="PlanetTwo" />
            </div>

            <div className="services__twin-box">
                <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.05}
                    glarePosition={'all'}
                    glareBorderRadius={'40px'}
                    className='services__box blur'
                >
                    <img src={s.Lightning} className='box__img' alt="Lightning" />
                    <div className="box__text">
                        <h2 className='box__title'>Fast</h2>
                        <p>Optimized & lag free code</p>
                    </div>
                </Tilt>
                <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.05}
                    glarePosition={'all'}
                    glareBorderRadius={'40px'}
                    className='services__box blur'
                >
                    <img src={s.Light} className='box__img' alt="Light" />
                    <div className="box__text">
                        <h2 className='box__title'>Intuitive</h2>
                        <p>Easy-to-use UX/UI</p>
                    </div>
                </Tilt>
            </div>
            <div className="services__twin-box">
                <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.05}
                    glarePosition={'all'}
                    glareBorderRadius={'40px'}
                    className='services__box blur'
                >
                    <img src={s.Responsive} className='box__img' alt="Responsive" />
                    <div className="box__text">
                        <h2 className='box__title'>Responsive</h2>
                        <p>Adaptative layout for all devices</p>
                    </div>
                </Tilt>
                <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.05}
                    glarePosition={'all'}
                    glareBorderRadius={'40px'}
                    className='services__box blur'
                >
                    <img src={s.Rocket} className='box__img' alt="Rocket" />
                    <div className="box__text">
                        <h2 className='box__title'>Dynamic</h2>
                        <p>Better with user interaction</p>
                    </div>
                </Tilt>
            </div>
            
        </div>
    );
}

export default Services;