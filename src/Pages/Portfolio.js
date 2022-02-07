import React, {useState} from 'react';

import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import ReactFullpage from '@fullpage/react-fullpage';

import Logo from '../components/Logo';
import Home from './PortfolioContent/Home';
import About from './PortfolioContent/About';
import Skills from './PortfolioContent/Skills';
import Contact from './PortfolioContent/Contact';


const Portfolio = () => {

    const [on, setOn] = useState(false);
    
    const customInit = (Main) => { loadStarsPreset(Main) }

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

            <Particles
                options={{
                    particles: {
                        size: {
                            value: 4,
                        },
                        move: {
                            speed:0.2,
                        },
                    },
                    preset: "stars"}}
                init={customInit}
            />

            <Logo/>

            {on ? 
                <button className="up up---on" onClick={onUpClick}>
                    <span className="up--left"></span>
                    <span className="up--right"></span>
                </button>
            
                :

                <button className="up" >
                    <span className="up--left"></span>
                    <span className="up--right"></span>
                </button>   
            }    

            <ReactFullpage
                licenseKey="null"
                scrollingSpeed = {1000}
                navigation
                navigationTooltips={["Home", "About", "Skills", "Services", "Works", "Contact"]}
                onLeave={onLeave}
                render={({ fullpageApi }) => {

                    return (

                        <ReactFullpage.Wrapper>

                            <section className="section home">
                                <Home api = {fullpageApi}/>     
                            </section>

                            <section className="section">
                                <About/>
                            </section>

                            <section className="section">
                                <Skills/>
                            </section>

                            <section className="section services">
                            </section>

                            <section className="section works">
                            </section>

                            <section className="section contact">
                                <Contact/>
                            </section>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </>        
    );
}

export default Portfolio;