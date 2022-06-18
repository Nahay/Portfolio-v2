import React from 'react';

import Tilt from 'react-parallax-tilt';

import { PlanetOne, PlanetTwo } from '../../assets/Portfolio/indexEtc';
import { GitHub } from '../../assets/Portfolio/socialIndex';
import { Git } from '../../assets/Portfolio/skillsIndex';


const SIOVeille = () => {

    return ( 
        <div className="about" id="veille">
            <div className="title__container">
                <h2 className='bg-title'>VEILLE</h2>
                <img src={PlanetOne} className='about__img' alt="PlanetOne" />
                <img src={PlanetTwo} className='about__img' alt="PlanetTwo" />
            </div>
            <Tilt
                tiltEnable={false}
                glareEnable={true}
                glareMaxOpacity={0.05}
                glarePosition={'all'}
                glareBorderRadius={'60px'}
                className='about__box blur box__veille'
            >
                <h2 className='box__title'><span className='underline'>Ma veille t</span>echnologique</h2>

                <p>
                    La <b>veille technologique</b> consiste à surveiller les évolutions techniques et les innovations dans un secteur d'activité donné. Cela comprend notamment la surveillance, la collecte, le partage et la diffusion d'information permettant d'anticiper ou de s'informer sur des changements en matière de recherche, développement, processus...
                </p>
                    <br/>
                <p>
                    Pour réaliser ma veille technologique, j'utilise <b>Feedly</b>, un agrégateur de flux RSS, mais aussi <b>Google Actualités</b> qui me recommande beaucoup d'articles dans le thème de l'informatique ou des techonologies ; notamment des articles des sites dev.to, CSS-Tricks, freeCodeCamp ou encore Frandroid.
                </p>
                    <br/>
                <p>Ma veille porte sur <b>GitHub</b>, un service web d’hébergement pour le développement de logiciels gérés par le logiciel de versioning Git.</p>
                
                <div className="box__btn">
                    <a
                        className="btn"
                        href='https://drive.google.com/file/d/1Mlwk8qEsg15qar_064hH2zyL5qKlqrgA/view?usp=sharing'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        PDF de la veille ici
                    </a>
                </div>
            </Tilt>
            <img src={Git} className='about__img img__git' alt="Rocket" />
            <img src={GitHub} className='about__img img__github' alt="Laptop" />
        </div>
    );
}

export default SIOVeille;