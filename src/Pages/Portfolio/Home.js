import React from 'react';

import Navbar from '../../components/fixed/Navbar';

import Astro from '../../assets/Portfolio/flyingAstro.png';
import Pdf from '../../assets/CV.pdf';


const Home = ({api}) => {

    return (
        <>
            <img src = {Astro} className='home__flying-astro' alt="Flying Astronaut"/>
            <Navbar api = {api}/>
            <div className="home__titles">
                <h1>Hi! I'm <span className='title-lily'>Lily</span>.</h1>
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