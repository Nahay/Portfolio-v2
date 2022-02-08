import React from 'react';

import Planet from '../../assets/Portfolio/planet1.png';
import * as s from  '../../assets/Portfolio/skillsIndex';


const Skills = () => {

    return (
        
        <div className='skills'>
            
            <h1 className='bg-title'>
                SKILLS
                <img src={Planet} className='skills__planet' alt="Planet" />
            </h1>

            <div className='skill-box blur'>
                <img src={s.Angular} className='skill-box__img' alt="Angular" />
            </div>
            <div className='skill-box blur'>
                <img src={s.CSS} className='skill-box__img' alt="CSS" />
            </div>
            <div className='skill-box blur'>
                <img src={s.Git} className='skill-box__img' alt="Git" />
            </div>
            <div className='skill-box blur'>
                <img src={s.HTML} className='skill-box__img' alt="HTML" />
            </div>
            <div className='skill-box blur'>
                <img src={s.JS} className='skill-box__img' alt="JS" />
            </div>
            <div className='skill-box blur'>
                <img src={s.MongoDB} className='skill-box__img' alt="MongoDB" />
            </div>
            <div className='skill-box blur'>
                <img src={s.NodeJS} className='skill-box__img' alt="NodeJS" />
            </div>
            <div className='skill-box blur'>
                <img src={s.PHP} className='skill-box__img' alt="PHP" />
            </div>
            <div className='skill-box blur'>
                <img src={s.React} className='skill-box__img' alt="React" />
            </div>
            <div className='skill-box blur'>
                <img src={s.Sass} className='skill-box__img' alt="Sass" />
            </div>
            <div className='skill-box blur'>
                <img src={s.SQL} className='skill-box__img' alt="SQL" />
            </div>
        </div>
    );
}

export default Skills;