import React from 'react';

import Tilt from 'react-parallax-tilt';

import { PlanetOne, PlanetTwo, Burger, Laptop } from '../../assets/Portfolio/indexEtc';


const About = () => {

    return ( 
        <div className='about'>
            <div className="title__container">
                <h1 className='bg-title'>ABOUT</h1>
                <img src={PlanetOne} className='about__img' alt="PlanetOne" />
                <img src={PlanetTwo} className='about__img' alt="PlanetTwo" />
            </div>
            <Tilt
                tiltEnable={false}
                glareEnable={true}
                glareMaxOpacity={0.05}
                glarePosition={'all'}
                glareBorderRadius={'60px'}
                className='about__box blur'
            >
                <h2 className='box__title'><span className='underline'>Me, My</span>self & I</h2>
                <p>
                    I'm a Front-End Developer located in France, specializing in building (and occasionally designing)
                    exceptional digital experiences.
                    <br/> <br/>
                    I love to code things from scratch, and enjoy bringing ideas to life in the browser.
                    <br/> <br/>
                    Here are the technologies I've been working with recently ⬇
                </p>
            </Tilt>
            <img src={Burger} className='about__img img__burger' alt="Burger" />
            <img src={Laptop} className='about__img img__laptop' alt="Laptop" />
        </div>
    );
}

export default About;