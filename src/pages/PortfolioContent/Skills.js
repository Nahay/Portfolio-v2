import React from 'react';

import { PlanetOne, PlanetThree } from '../../assets/Portfolio/indexEtc';
import * as s from  '../../assets/Portfolio/skillsIndex';

const Skills = () => {

    return (
        
        <div className='skills' id='skills'>
            
            <div className="title__container">
                <h2 className='bg-title'>SKILLS</h2>
                <img src={PlanetOne} className='skills__planet' alt="Planet One" />
                <img src={PlanetThree} className='skills__planet' alt="Planet Three" />
            </div>

            {
                Object.keys(s).map((key, i) => {
                    return (
                        <div className='skill-box blur' key={key}>
                            <img src={Object.values(s)[i]} className='skill-box__img' alt={key} />
                        </div>
                    )
                })
            }
            
        </div>
    );
}

export default Skills;