import React from 'react';

import { FlyingAstro } from '../../assets/Portfolio/indexEtc';
import Pdf from '../../assets/CV.pdf';

import Navbar from '../../components/fixed/Navbar';


const Home = ({api}) => {

    return (
        <>
            <img src = {FlyingAstro} className='home__flying-astro' alt="Flying Astronaut"/>
            <Navbar api = {api}/>
            <div className="home__titles">
                <h1 className='titles__hi'>Hi! I'm <span>Lily</span>.</h1>
                <div className="wrapper">
                    <div className="static-txt">I'm a</div>
                    <ul className="dynamic-txts">
                        <li><h1>Developer</h1></li>
                        <li><h1>Designer</h1></li>
                        <li><h1>Freelancer</h1></li>
                        <li><h1>Geek</h1></li>
                    </ul>
                </div>
                <a
                    className='btn'
                    href={Pdf}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                        Download CV
                </a>
            </div>
        </>
    );
}

export default Home;