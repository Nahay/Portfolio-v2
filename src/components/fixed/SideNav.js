import React, {useEffect, useState} from 'react';


const SideNav = () => {

    const [about, setAbout] = useState("");
    const [skills, setSkills] = useState("");
    const [services, setServices] = useState("");
    const [works, setWorks] = useState("");
    const [contact, setContact] = useState("");

    useEffect(() => {
        const getTop = (elem) => {
            const {top : elemTop} = document.getElementById(elem).getBoundingClientRect();
            return elemTop-bodyTop;
        }
        
        const {top: bodyTop} = document.body.getBoundingClientRect();
        
        setAbout(getTop('about') - 100);
        setSkills(getTop('skills') - 100);
        setServices(getTop('services') - 100);
        setWorks(getTop('works') - 100);
        setContact(getTop('contact') - 100);

    }, []);


    window.onscroll = () => handleScroll();

    const btnList = document.getElementsByClassName('side-nav__btn');

    const addActive = (i) => btnList[i].classList.add('active');

    const handleScroll = () => {
        const top = document.documentElement.scrollTop;

        document.querySelectorAll('.side-nav__btn').forEach(btn => {
            btn.classList.remove('active');
        });

        switch(true) {
            case top < about:
                addActive(0);
                break;
            case top >= about && top < skills:
                addActive(1);
                break;
            case top >= skills && top < services:
                addActive(2);
                break;
            case top >= services && top < works:
                addActive(3);
                break;
            case top >= works && top < contact:
                addActive(4);
                break;
            case top >= contact:
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


    return (
        <nav className="side-nav">
            <ul>
                <li>
                    <button aria-label='home' className='side-nav__btn' onClick={() => document.documentElement.scrollTop = 0}>
                        <span>Home</span>
                    </button>
                </li>
                <li>
                    <button aria-label='about' className='side-nav__btn' onClick={() => moveTo('about')}>
                        <span>About</span>
                    </button>
                </li>
                <li>
                    <button aria-label='skills' className='side-nav__btn' onClick={() => moveTo('skills')}>
                        <span>Skills</span>
                    </button>
                </li>
                <li>
                    <button aria-label='services' className='side-nav__btn' onClick={() => moveTo('services')}>
                        <span>Services</span>
                    </button>
                </li>
                <li>
                    <button aria-label='works' className='side-nav__btn' onClick={() => moveTo('works')}>
                        <span>Works</span>
                    </button>
                </li>
                <li>
                    <button aria-label='contact' className='side-nav__btn' onClick={() => moveTo('contact')}>
                        <span>Contact</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default SideNav;