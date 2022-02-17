import React from 'react';

import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

import Logo from '../../components/Logo';
import FullPage from '../PortfolioContent/FullPage';


const SIOPresent = () => {

    const customInit = (Main) => loadStarsPreset(Main);

    return (

        <>

            <Particles
                options={{
                    particles: {
                        size: {
                            value: 6,
                        },
                        move: {
                            speed:0.2,
                        },
                    },
                    preset: "stars"}}
                init={customInit}
            />

            <Logo/>

            <FullPage mainApp={false}/>
        </>
    );
}

export default SIOPresent;