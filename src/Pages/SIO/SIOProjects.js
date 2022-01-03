import React, {useState} from 'react';
import Charlemagne from '../../components/SIO/Projects/Charlemagne';

import SIOPortfolio from '../../components/SIO/SIOPortfolio';


const SIOProjects = () => {

    const [project, setProject] = useState("");


    return ( 
        <div className="sio-projects">
           <div className="sio-projects__container">
               <div className="container__portfolio">
                   <SIOPortfolio setProject={setProject}/>
               </div>
            </div> 
            <div className="container__project" id="project">
                   {project === "charlemagne" && <Charlemagne/>}
            </div>
        </div>
    );
}

export default SIOProjects;