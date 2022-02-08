import React from 'react';

import Burger from '../../assets/Portfolio/burger.png';
import Laptop from '../../assets/Portfolio/orangePc.png';
import PlanetOne from '../../assets/Portfolio/planet1.png';
import PlanetTwo from '../../assets/Portfolio/planet2.png';

const About = () => {

    return ( 
        <div className='about'>
            <h1 className='bg-title'>
                ABOUT
                <img src={PlanetOne} className='about__img' alt="PlanetOne" />
                <img src={PlanetTwo} className='about__img' alt="PlanetTwo" />
            </h1>
            <div className='about__box blur'>
                <h2 className='box__title'><span className='underline'>Me, My</span>self & I</h2>
                <p>
                    I'm a Front-End Developer located in France, specializing in building (and occasionally designing)
                    exceptional digital experiences.
                    <br/> <br/>
                    I love to code things from scratch, and enjoy bringing ideas to life in the browser.
                    <br/> <br/>
                    Here are the technologies I've been working with recently ⬇
                </p>
            </div>
            <img src={Burger} className='about__img img__burger' alt="Burger" />
            <img src={Laptop} className='about__img img__laptop' alt="Laptop" />
        </div>
    );
}

export default About;