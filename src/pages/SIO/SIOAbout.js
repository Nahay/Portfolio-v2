import Tilt from 'react-parallax-tilt';

import { PlanetOne, PlanetTwo, OrangeRocket, Laptop } from '../../assets/Portfolio/indexEtc';

const SIOAbout = () => {
    return (
        <div className="about" id="accueil">
            <div className="title__container">
                <h2 className="bg-title">ABOUT</h2>
                <img src={PlanetOne} className="about__img" alt="PlanetOne" />
                <img src={PlanetTwo} className="about__img" alt="PlanetTwo" />
            </div>
            <Tilt
                tiltEnable={false}
                glareEnable={true}
                glareMaxOpacity={0.05}
                glarePosition={'all'}
                glareBorderRadius={'60px'}
                className="about__box blur"
            >
                <h2 className="box__title">
                    <span className="underline">Bienvenue su</span>r mon portfolio
                </h2>

                <p>
                    Je me présente : je m'appelle <b>Lily Barberou</b>.
                </p>
                <br />
                <p>
                    Je suis actuellement étudiante en <b>BTS SIO</b> Services Informatiques aux Organisations à Colmar
                    en deuxième année.
                </p>
                <br />
                <p>
                    J'ai choisi l'option <b>SLAM</b> Solutions Logicielles et Applications Métiers qui est proposée dans
                    ce BTS, car j'ai l'ambition de devenir <b>Développeuse Web</b>.
                </p>

                <div className="box__btn">
                    <a className="btn" href="/" target="_blank" rel="noopener noreferrer">
                        En savoir plus
                    </a>
                </div>
            </Tilt>
            <img src={OrangeRocket} className="about__img img__rocket" alt="Rocket" />
            <img src={Laptop} className="about__img img__laptop" alt="Laptop" />
        </div>
    );
};

export default SIOAbout;
