import React, { useState, useRef, useEffect } from 'react';

import Tilt from 'react-parallax-tilt';

import Modal from '../../components/generics/Modal';
import { PlanetOne } from '../../assets/Portfolio/indexEtc';


const WorksSlider = ({ worksList }) => {

    const container = useRef(null);
    const filters = useRef(null);
    const arrowLeft = useRef(null);
    const arrowRight = useRef(null);

    const [childrens, setChildrens] = useState([]);
    const [active, setActive] = useState(0);
    const [modal, setModal] = useState(false);
    const [currentMod, setCurrentMod] = useState({});

    const [currentList, setCurrentList] = useState(Object.values(worksList[0])[0]);

    const resetClass = (element) => {
        element.classList.remove("hidden-left");
        element.classList.remove("hidden-right");
        element.classList.remove("left-active");
        element.classList.remove("mid-active");
        element.classList.remove("right-active");
    }

    useEffect(() => filters.current.children[0].classList.add('clicked'), [])

    useEffect(() => {
        
        setChildrens(container.current.children);

        container.current.children.item(0).classList.remove("hidden");
        resetClass(container.current.children.item(0));
        container.current.children.item(0).classList.add("left-active");
        container.current.children.item(0).classList.add("left-active");

        if (currentList.length > 1) {
            container.current.children.item(1).classList.remove("hidden");
            resetClass(container.current.children.item(1));
            container.current.children.item(1).classList.add("mid-active");
            container.current.children.item(1).classList.add("mid-active");

            if (currentList.length > 2) {
                container.current.children.item(2).classList.remove("hidden");
                resetClass(container.current.children.item(2));
                container.current.children.item(2).classList.add("right-active");
                container.current.children.item(2).classList.add("right-active");
            }
        }

        for (let i = 0; i < container.current.children.length; i++) { 
            if (i > 2) {
                resetClass(container.current.children.item(i));
                container.current.children.item(i).classList.add('hidden');
                container.current.children.item(i).classList.add("right-active");
                container.current.children.item(i).classList.add("hidden-right");
            } 
        }

        currentList.length > 3 ? showArrow('right', true) : showArrow('right', false);

    }, [currentList]);


    const showArrow = (a, show) => {
        if (a === 'left') {
            if (show) arrowLeft.current.classList.add('visible');
            else arrowLeft.current.classList.remove('visible');
            return
        }
        show ? arrowRight.current.classList.add('visible') : arrowRight.current.classList.remove('visible');
    }

    const moveLeftWork = (i, a, b, c, d) => {
        if (a) {
            // fait disparaitre la box la plus à droite
            childrens.item(i+3).classList.toggle("hidden");
            childrens.item(i+3).classList.toggle("hidden-right");
        }

        if (b) {
            // fait aller à droite la box qui était au milieu
            childrens.item(i+2).classList.add("right-active");
            childrens.item(i+2).classList.remove("mid-active");
        }

        if (c) {
            // fait aller au milieu la box qui était à gauche            
            childrens.item(i+1).classList.add("mid-active");
            childrens.item(i+1).classList.remove("left-active");
        }

        if (d) {
            // fait apparaître la box qui était cachée pour la mettre à gauche
            childrens.item(i).classList.toggle("hidden");
            // permet d'avoir l'élement qui vient d'en haut à gauche et qui n'apparaît d'un seul coup 
            childrens.item(i).classList.toggle("hidden-left");
            childrens.item(i).classList.add("left-active");
        }
    }

    const moveRightWork = (i, a, b, c, d) => {
        if (a) {
           // fait aller à gauche la box qui était au milieu
           childrens.item(i).classList.add("left-active");
           childrens.item(i).classList.remove("mid-active");
        }

        if (b) {
            // fait aller au milieu la box qui était à droite
            childrens.item(i+1).classList.add("mid-active");
            childrens.item(i+1).classList.remove("right-active");
        }

        if (c) {
            // fait disparaitre la box plus à gauche
            childrens.item(i-1).classList.toggle("hidden");
            childrens.item(i-1).classList.toggle("hidden-left");
        }

        if (d) {
            // fait apparaître la box qui était cachée pour la mettre à droite
            childrens.item(i+2).classList.toggle("hidden");
            // permet d'avoir l'élement qui vient d'en haut à droite et qui n'apparaît d'un seul coup 
            childrens.item(i+2).classList.toggle("hidden-right");
            childrens.item(i+2).classList.add("right-active");
        }
    }
    

    const moveLeft = () => {

        const limit = currentList.length - 2;

        let activeBox = active-1;
        
        active > 0 && setActive(active-1);

        if (activeBox >= 0 && activeBox < limit-1) {
            moveLeftWork(activeBox, true, true, true, true);

            if (activeBox === 0) showArrow('left', false)
        }
        
        else if (activeBox === limit-1) {
            
            showArrow('right', true);
            moveLeftWork(activeBox, false, true, true, true);
        }
    }

    const moveRight = () => {

        const limit = currentList.length - 2;

        let activeBox = active+1;
        active < limit && setActive(active+1);

        showArrow('left', true);
        activeBox === limit && showArrow('right', false);

        if (activeBox < 1) moveRightWork(activeBox, true, true, false, true)
        else if (activeBox >= 1 && activeBox < limit) moveRightWork(activeBox, true, true, true, true)
        else if (activeBox === limit) moveRightWork(activeBox, true, true, true, false)
    }

    const onFilterClick = (i) => {
        setCurrentList(Object.values(worksList[i])[0]);

        setActive(0);
        for (let i = 0; i < filters.current.children.length; i++) {
            filters.current.children[i].classList.remove('clicked');
        }

        filters.current.children[i].classList.add('clicked');

        showArrow('left', false);
    }


    return (
        
        <div className='works' id='works'>

            <Modal
                show={modal}
                setModal={setModal}
                info={currentMod}
            />
            
            <div className="title__container">
                <h1 className='bg-title'>WORKS</h1>
                <img src={PlanetOne} className='works__planet' alt="Planet" />
            </div>

            <div className="filter__container" ref={filters}>
                {
                    worksList.map((f, i) => {
                        return (
                            <button
                                onClick={() => onFilterClick(i)}
                                className='blur'
                                key={Object.keys(f)}
                            >
                                {Object.keys(f)}
                            </button>
                        )
                    })
                }
            </div>

            
            <div className="works__container">

                <div className="arrow arrow-left" onClick={moveLeft} ref={arrowLeft}>
                    <span className="arrow--left"></span>
                    <span className="arrow--right"></span>
                </div>

                <div className="works__content" ref={container}>
                        {
                            currentList.map((c, i) => {
                                return(
                                    <div
                                        className='box__2 hidden'
                                        key={i}
                                        onClick={() => {
                                            setModal(true);
                                            setCurrentMod(c);
                                        }}
                                    >
                                        <Tilt
                                            glareEnable={true}
                                            glareMaxOpacity={0.05}
                                            glarePosition={'all'}
                                            glareBorderRadius={'30px'}
                                            className='works__box blur'
                                        >
                                            <h2 className='box__title'>{c.title}</h2>
                                            <img src={c.img} className='box__img' alt={c.title} />
                                        </Tilt>
                                    </div>
                                );
                            })
                        }
                </div>

                <div className="arrow" onClick={moveRight} ref={arrowRight}>
                    <span className="arrow--left"></span>
                    <span className="arrow--right"></span>
                </div>
            </div>
            

            
        </div>
    );
}

export default WorksSlider; 