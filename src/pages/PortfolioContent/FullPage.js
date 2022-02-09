import React, {useState} from 'react';

import ReactFullpage from '@fullpage/react-fullpage';

import Home from './Home';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Works from './Works';
import Contact from './Contact';


const FullPage = () => {

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
                licenseKey={""}
                scrollingSpeed = {1000}
                navigation
                navigationTooltips={["Home", "About", "Skills", "Services", "Works", "Contact"]}
                onLeave={onLeave}
                normalScrollElements='#inputMessage'
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
                }}
            />
        </>        
    );
}

export default FullPage;