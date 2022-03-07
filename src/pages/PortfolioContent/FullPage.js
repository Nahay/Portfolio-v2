import React, {useState} from 'react';

import ReactFullpage from '@fullpage/react-fullpage';

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

    const onLeave = (origin, destination) => {
        if (origin.index === 0) setOn(true);
        if (destination.index === 0) setOn(false);
    }

    const onUpClick = () => {
        window.fullpage_api.moveTo(1,0);
        setOn(false);
    }


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

            <ReactFullpage
                licenseKey={""}
                scrollingSpeed = {1000}
                navigation
                navigationTooltips={mainApp ? ["Home", "About", "Skills", "Services", "Works", "Contact"]: ["Index", "Works", "Veille"]}
                onLeave={onLeave}
                normalScrollElements='#inputMessage'
                render={() => {

                    if(mainApp) {
                        return (

                            <ReactFullpage.Wrapper>
    
                                <section className="section home">
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
    
                            </ReactFullpage.Wrapper>
    
                        );
                    }
                    else {
                        return (

                            <ReactFullpage.Wrapper>
    
                                <section className="section">
                                    <SIOAbout/>
                                </section>
    
                                <section className="section">
                                    <Works/>
                                </section>
    
                                <section className="section">
                                    <SIOVeille/>
                                </section>

                            </ReactFullpage.Wrapper>
    
                        );
                    }
                }}
            />
        </>        
    );
}

export default FullPage;