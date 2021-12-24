import React, {useState, useRef} from 'react';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';



const FullScreenNavbar = () => {

    const [clicked, setClicked] = useState(false);

    const firstlink = useRef(null);
    const secondlink = useRef(null);
    const thirdlink = useRef(null);
    const fourthlink = useRef(null);

    const setOpacity = (ref, t) => {
        setTimeout(() => {
            ref.current.style.opacity = clicked ? "0" :"1";
        }, 200*t);
    }

    const onIconClick = () => {
        if (clicked) {
            setClicked(false);

            setOpacity(fourthlink, 1);
            setOpacity(thirdlink, 2);
            setOpacity(secondlink, 3);
            setOpacity(firstlink, 4);
        }
        else {
            setClicked(true);

            setOpacity(firstlink, 1);
            setOpacity(secondlink, 2);
            setOpacity(thirdlink, 3);
            setOpacity(fourthlink, 4);
        }
    }

    return ( 
        <div className='full-screen-navbar'>
            <div className='full-screen-navbar__icon' onClick={onIconClick}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <div className='full-screen-navbar__links'>
                <nav>
                    <HashLink smooth to='/#home' ref={firstlink}>
                        Home
                    </HashLink>
                    <HashLink smooth to='/#about' ref={secondlink}>
                        About
                    </HashLink>
                    <HashLink smooth to='/#works' ref={thirdlink}>
                        Works
                    </HashLink>
                    <HashLink smooth to='/#contact' ref={fourthlink}>
                        Contact
                    </HashLink>
                </nav>
            </div>
        </div>
    );
}

export default FullScreenNavbar;