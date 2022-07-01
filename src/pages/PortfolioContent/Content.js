import { useState } from 'react';

import Home from './Home';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Contact from './Contact';
import WorksSlider from './WorksSlider';

import { worksListEn } from '../../assets/Portfolio/works/worksListEn';

const Content = () => {
    const [on, setOn] = useState(false);

    window.addEventListener('scroll', () => handleScroll());

    const handleScroll = () => {
        document.documentElement.scrollTop > 300 ? setOn(true) : setOn(false);
    };

    const onUpClick = () => {
        document.documentElement.scrollTop = 0;
        setOn(false);
    };

    return (
        <>
            {on ? (
                <button className="up up---on" onClick={onUpClick} aria-label="Goes Up">
                    <span className="up--left"></span>
                    <span className="up--right"></span>
                </button>
            ) : (
                <button className="up" aria-label="Goes Up">
                    <span className="up--left"></span>
                    <span className="up--right"></span>
                </button>
            )}

            <>
                <section className="section">
                    <Home />
                </section>

                <section className="section">
                    <About />
                </section>

                <section className="section">
                    <Skills />
                </section>

                <section className="section">
                    <Services />
                </section>

                <section className="section">
                    <WorksSlider worksList={worksListEn} />
                </section>

                <section className="section">
                    <Contact />
                </section>
            </>
        </>
    );
};

export default Content;
