import React, {useState} from 'react';
import Charlemagne from '../../components/SIO/Projects/Charlemagne';

import ImageZoom from '../../components/SIO/ImageZoom';


const SIOProjects = () => {

    const [project, setProject] = useState("");
    const container = document.getElementById("imgDiv");

    const onClick = () => {
        if (container.style.display === "flex") container.style.display = "none";
        else container.style.display = "flex";
    }

    return ( 
        <div className="sio-projects">

            <ImageZoom onClick={onClick}/>
            
           <div className="sio-projects__container">
            </div> 
            <div className="container__project" id="project">
                   {project === "charlemagne" && <Charlemagne/>}
            </div>
        </div>
    );
}

export default SIOProjects;