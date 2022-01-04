import React, {useState, useRef} from 'react';

import Charlemagne from '../../assets/Projects/Charlemagne/Utilisateur/Accueil_Deconnecté.png';


const Portfolio = () => {

    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState("");
    const [scrollLeft, setScrollLeft] = useState("");

    const slider = useRef(null);

    
    // useEffect(() => {
    //     let { clientWidth, scrollWidth } = slider.current;
    //     let end = false;
    //     setInterval(() => {
    //         if (!end) {
    //             slider.current.scrollTo(slider.current.scrollLeft + 1, 0);
    //             if (scrollWidth - slider.current.scrollLeft === clientWidth) end = true;
    //         }
    //         else {
    //             slider.current.scrollTo(slider.current.scrollLeft - 1, 0);
    //             if (slider.current.scrollLeft === 0) end = false;
    //         } 
    //     }, 18);
    // }, []);

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
                <div className='box'>
                    <img
                        src={Charlemagne}
                        alt="Le Charlemagne"
                    />
                    <p>Le Charlemagne</p>
                </div>
                <div className='box'>
                    <img
                        src="https://cdn.discordapp.com/attachments/899001744728682516/922805564629717053/unknown.png"
                        alt="Coming Soon"
                    />
                </div>
                <div className='box'>
                    <img
                        src="https://cdn.discordapp.com/attachments/899001744728682516/922805564629717053/unknown.png"
                        alt="Coming Soon"
                    />
                </div>
                <div className='box'>
                    <img
                        src="https://cdn.discordapp.com/attachments/899001744728682516/922805564629717053/unknown.png"
                        alt="Coming Soon"
                    />
                </div>
            </div>
        </div>        
    );
}

export default Portfolio;