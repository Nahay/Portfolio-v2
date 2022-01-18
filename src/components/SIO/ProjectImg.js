import React from 'react';


const ProjectImg = ({img, title}) => {
    
    const imgDiv = document.getElementById('imgDiv');
    const imgZoom = document.getElementById('imgZoom');

    const onClick = () => {
        if (imgDiv.style.display === "flex") imgDiv.style.display = "none";
        // on  a appuyé sur une image
        else {
            imgDiv.style.display = "flex";
            imgZoom.src = img;
        } 
    }

    return (
            <div className="project-img" onClick={onClick}>
                <img src={img} alt={title}/>
            </div>              
    );
}

export default ProjectImg;