import React, {useState} from 'react';

import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import ReactFullpage from '@fullpage/react-fullpage';

import Home from './Portfolio/Home';
import About from './Portfolio/About';
import Contact from './Portfolio/Contact';


const Portfolio = () => {

    const [api, setApi] = useState("");
    const [on, setOn] = useState(false);
    
    const customInit = (Main) => {
        loadStarsPreset(Main);
    }

    const onLeave = (origin, destination) => {
        if (origin.index === 0) setOn(true);
        if (destination.index === 0) setOn(false);
    }

    const onUpClick = () => {
        api.moveTo(1,0);
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

            {on ? 
                <button className="up up---on" onClick={onUpClick}>
                    <span className="up--left"></span>
                    <span className="up--right"></span>
                </button>
            
                :

                <a className="up" onClick={onUpClick}>
                    <span className="up--left"></span>
                    <span className="up--right"></span>
                </a>
                
            }      

            <ReactFullpage
                licenceKey="null"
                scrollingSpeed = {1000}
                onLeave={onLeave}
                render={({ fullpageApi }) => {

                    setApi(fullpageApi);

                    return (

                        <>                        

                            <ReactFullpage.Wrapper>

                                <section className="section home">
                                    <Home fullpageApi = {fullpageApi}/>     
                                </section>

                                <section className="section">
                                    <About/>
                                </section>

                                <section className="section skills" onClick={() => console.log(fullpageApi)}>
                                    
                                </section>

                                <section className="section services">
                                </section>

                                <section className="section works">
                                </section>

                                <section className="section contact">
                                    <Contact/>
                                </section>
                            </ReactFullpage.Wrapper>

                        </>
                    );
                }}
            />
        </>        
    );
}

export default Portfolio;