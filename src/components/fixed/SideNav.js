import React, {useEffect, useState} from 'react';


const SideNav = ({ anchorList }) => {

    const [anchorPosition, setAnchorPosition] = useState([]);

    const btnList = document.getElementsByClassName('side-nav__btn');


    useEffect(() => {
        const getTop = (elem) => {
            const {top : elemTop} = document.getElementById(elem).getBoundingClientRect();
            return elemTop-bodyTop;
        }
        
        const {top: bodyTop} = document.body.getBoundingClientRect();

        const positions = [];
        anchorList.forEach((a) => {
            positions.push(getTop(a) - 100);
        })

        setAnchorPosition(positions);

    }, [anchorList]);


    window.addEventListener('scroll', () => handleScroll());

    const addActive = (i) => btnList[i].classList.add('active');

    const handleScroll = () => {
        const top = document.documentElement.scrollTop;

        document.querySelectorAll('.side-nav__btn').forEach(btn => {
            btn.classList.remove('active');
        });


        for (let i = 0; i <= anchorPosition.length; i++) {
            if (i == 0 && top < anchorPosition[i+1]) {
                addActive(i);
                break;
            }
            else if (i == anchorPosition.length-1) addActive(i);
            else {
                if (top >= anchorPosition[i] && top < anchorPosition[i+1]) {
                    addActive(i);
                    break;
                }
            }
        }
    }

    const moveTo = (link) => {
        document.getElementById(link).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    }

    const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);


    return (
        <nav className="side-nav">
            <ul>
                {
                    anchorList.map((a) => {
                        return (
                            <li key={a} >
                                <button aria-label={a} className='side-nav__btn' onClick={() => moveTo(a)}>
                                <span>{capitalizeFirstLetter(a)}</span>
                                </button>
                            </li>
                        );
                    })
                }
                
            </ul>
        </nav>
    );
}

export default SideNav;