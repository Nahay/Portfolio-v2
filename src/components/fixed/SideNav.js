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

    }, []);


    window.addEventListener('scroll', () => handleScroll());

    const addActive = (i) => btnList[i].classList.add('active');

    const handleScroll = () => {
        const top = document.documentElement.scrollTop;

        document.querySelectorAll('.side-nav__btn').forEach(btn => {
            btn.classList.remove('active');
        });

        switch(true) {
            case top < anchorPosition[1]:
                addActive(0);
                break;
            case top >= anchorPosition[1] && top < anchorPosition[2]:
                addActive(1);
                break;
            case top >= anchorPosition[2] && top < anchorPosition[3]:
                addActive(2);
                break;
            case top >= anchorPosition[3] && top < anchorPosition[4]:
                addActive(3);
                break;
            case top >= anchorPosition[4] && top < anchorPosition[5]:
                addActive(4);
                break;
            case top >= anchorPosition[5]:
                addActive(5);
                break;
            default:
                break;
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