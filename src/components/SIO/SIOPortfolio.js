import React, {useState, useRef} from 'react';
import { HashLink } from 'react-router-hash-link';

import Charlemagne from '../../assets/Projects/Charlemagne/charlemagne.png';


const SIOPortfolio = ({setProject}) => {

    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState("");
    const [scrollLeft, setScrollLeft] = useState("");

    const slider = useRef(null);

    const handleMouseDown = ({ pageX }) => {
        setIsDown(true);
        setStartX(pageX - slider.current.offsetLeft);
        setScrollLeft(slider.current.scrollLeft);
    }

    const handleMouseMove = (e) => {
        if(!isDown) return;
        e.preventDefault();

        const x = e.pageX - slider.current.offsetLeft;
        const walk = (x - startX) * 1.3;
        slider.current.scrollLeft = scrollLeft - walk;
    }


    return (
        <div className="drag">
            <div
                className={`drag-container ${isDown && "is-dragging"}`}
                onMouseDown={(e) => handleMouseDown(e)}
                onMouseLeave={() => setIsDown(false)}
                onMouseUp={() => setIsDown(false)}
                onMouseMove={(e) => handleMouseMove(e)}
                ref={slider}
            >
                <HashLink
                    className="box"
                    smooth to="#project"
                    onClick={() => setProject("charlemagne")}
                >
                    <img
                        src={Charlemagne}
                        alt="Le Charlemagne"
                    />
                    <p>Le Charlemagne</p>
                </HashLink>
                <HashLink className="box" smooth to="#project">
                    <img
                        src={Charlemagne}
                        alt="Le Charlemagne"
                    />
                    <p>Le Charlemagne</p>
                </HashLink>
                <HashLink className="box" smooth to="#project">
                    <img
                        src={Charlemagne}
                        alt="Le Charlemagne"
                    />
                    <p>Le Charlemagne</p>
                </HashLink>
                <HashLink className="box" smooth to="#project">
                    <img
                        src={Charlemagne}
                        alt="Le Charlemagne"
                    />
                    <p>Le Charlemagne</p>
                </HashLink>
            </div>
        </div>        
    );
}

export default SIOPortfolio;