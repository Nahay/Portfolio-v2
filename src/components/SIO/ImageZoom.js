import React from "react";

const ImageZoom = ({onClick}) => {

  return (
    <div className="confirmation__container" id="imgDiv" onClick={onClick}>      
        <div className="confirmation__content">
            <div className="content__img">
                <img src="" alt="Zoom" id="imgZoom"/>
            </div>                
        </div>
        <div className="container__background">
        </div>
    </div>
  );
}

export default ImageZoom;