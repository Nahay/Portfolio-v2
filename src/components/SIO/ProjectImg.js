import React, {useState } from 'react';

const ProjectImg = ({img, title}) => {

    const [isZoom, setIsZoom] = useState(false);

    const onClick = () => {
        if (isZoom) setIsZoom(false)
        else setIsZoom(true)
    }

    return (
        <div className={isZoom ? "project-img img-zoom" : "project-img"} onClick={onClick}>
            <img src={img} alt={title}/>
        </div>        
    );
}

export default ProjectImg;