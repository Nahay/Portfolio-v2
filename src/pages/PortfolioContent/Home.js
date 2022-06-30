import { FlyingAstro } from '../../assets/Portfolio/indexEtc';
import Pdf from '../../assets/CV.pdf';

import Navbar from '../../components/fixed/Navbar';

const Home = () => {
    return (
        <div className="home" id="home">
            <img src={FlyingAstro} className="home__flying-astro" alt="Flying Astronaut" />
            <Navbar />
            <div className="home__titles">
                <h1 className="titles__hi">
                    Hi! I'm <span>Lily</span>.
                </h1>
                <div className="wrapper">
                    <div className="static-txt">I'm a</div>
                    <ul className="dynamic-txts">
                        <li>
                            <h2>Developer</h2>
                        </li>
                        <li>
                            <h2>Designer</h2>
                        </li>
                        <li>
                            <h2>Freelancer</h2>
                        </li>
                        <li>
                            <h2>Geek</h2>
                        </li>
                    </ul>
                </div>
                <a className="btn" href={Pdf} target="_blank" rel="noopener noreferrer">
                    Download CV
                </a>
            </div>
        </div>
    );
};

export default Home;
