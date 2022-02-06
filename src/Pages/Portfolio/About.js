import React from 'react';


const About = () => {

    return ( 
        <div className='about'>
            <h1 className='bg-title'>ABOUT</h1>
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
        </div>
    );
}

export default About;