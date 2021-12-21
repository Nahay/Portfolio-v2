import React from 'react';

import Navbar from '../components/fixed/Navbar';
import SocialMedia from '../components/fixed/SocialMedia';
import Cup from '../components/generics/vectors/Cup';
import Headphones from '../components/generics/vectors/Headphones';
import Phone from '../components/generics/vectors/Phone';
import Portfolio from '../components/generics/Portfolio';


const Home = () => {

    return ( 
        <div className="home">
            <Navbar/>
            <SocialMedia/>
            <section className="home__section home__1" id="home">
                <div className="section__content">
                    <div className="home__1__titles">
                        <h1>Hi! I'm Lily.</h1>
                        <div className="wrapper">
                            <div className="static-txt">I'm a</div>
                            <ul className="dynamic-txts">
                                <li><h1>Developer</h1></li>
                                <li><h1>Designer</h1></li>
                                <li><h1>Freelancer</h1></li>
                                <li><h1>Geek</h1></li>
                            </ul>
                        </div>
                    </div>                    
                    <Cup/>
                    <Headphones/>
                    <Phone/>
                </div>                
            </section>
            <section className="home__section home__2" id="about">
                <div className="section__content">
                </div>     
            </section>
            <section className="home__section home__3" id="works">
                <div className="section__content">
                    <Portfolio/>
                </div>     
            </section>
            <section className="home__section home__4" id="contact">
                <div className="section__content">
                </div>     
            </section>
        </div>
    );
}

export default Home;