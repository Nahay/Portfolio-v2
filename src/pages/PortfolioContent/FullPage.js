import React, {useState} from 'react';

import Home from './Home';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Works from './Works';
import Contact from './Contact';

import SIOAbout from '../SIO/SIOAbout';
import SIOVeille from '../SIO/SIOVeille';


const FullPage = ({ mainApp }) => {

    const [on, setOn] = useState(false);


    window.addEventListener('scroll', () => handleScroll());

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 300) setOn(true);
        else setOn(false);
    }

    const onUpClick = () => {
        document.documentElement.scrollTop = 0;
        setOn(false);
    }

    /* {mainApp ? ["Home", "About", "Skills", "Services", "Works", "Contact"]: ["Index", "Works", "Veille"]} */

    return (

        <>
            {on ? 
                <button className="up up---on" onClick={onUpClick} aria-label="Goes Up">
                    <span className="up--left"></span>
                    <span className="up--right"></span>
                </button>
            
                :

                <button className="up" aria-label="Goes Up">
                    <span className="up--left"></span>
                    <span className="up--right"></span>
                </button>   
            }

            { mainApp ?

                <>

                    <section className="section home" id='home'>
                        <Home/>
                    </section>

                    <section className="section">
                        <About/>
                    </section>

                    <section className="section">
                        <Skills/>
                    </section>

                    <section className="section">
                        <Services/>
                    </section>

                    <section className="section">
                        <Works/>
                    </section>

                    <section className="section">
                        <Contact/>
                    </section>

                </>
                
            :

                <>

                    <section className="section">
                        <SIOAbout/>
                    </section>

                    <section className="section">
                        <Works/>
                    </section>

                    <section className="section">
                        <SIOVeille/>
                    </section>

                </>
            
            }
        </>        
    );
}

export default FullPage;