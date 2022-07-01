import Particles from 'react-tsparticles';
import { loadStarsPreset } from 'tsparticles-preset-stars';
import SideNav from '../components/fixed/SideNav';

import Logo from '../components/Logo';
import Content from './PortfolioContent/Content';

const Portfolio = () => {
    const customInit = (Main) => loadStarsPreset(Main);

    return (
        <>
            <Particles
                options={{
                    particles: {
                        size: {
                            value: 4,
                        },
                        move: {
                            speed: 0.2,
                        },
                    },
                    preset: 'stars',
                }}
                init={customInit}
            />

            <Logo />

            <SideNav anchorList={['home', 'about', 'skills', 'services', 'works', 'contact']} />

            <Content />
        </>
    );
};

export default Portfolio;
