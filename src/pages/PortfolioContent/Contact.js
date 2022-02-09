import React from 'react';
import { toast } from 'react-toastify';

import OrangeRocket from '../../assets/Portfolio/orangeRocket.png';
import * as s from '../../assets/Portfolio/socialIndex';

import ContactForm from '../../components/ContactForm';


const Contact = () => {

    const clickToCopy = () => {
        navigator.clipboard.writeText('Lily.#7476')
        toast.success("You just got my Discord username, add me now!")
    }

    return ( 
        <div className="contact">
            
            <h1 className='bg-title'>
                CONTACT
                <img src={OrangeRocket} className='rocket__img' alt="Orange Rocket" />
            </h1>

            <div className="contact__left">
                <ContactForm/>
            </div>
            <div className="contact__right">
                <div className='social__box blur' onClick={clickToCopy}>
                    <img src={s.Discord} className='social__img' alt="Discord" />
                    <span>Lily.#7476</span>
                </div>
                <a
                    href='https://github.com/Nahay'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='social__box blur'
                >
                    <img src={s.GitHub} className='social__img' alt="GitHub" />
                </a>
                <a
                    href='https://www.linkedin.com/in/lily-barberou-1b2b65221/'
                    target="_blank"
                    rel="noopener noreferrer"
                    className='social__box blur'
                >
                    <img src={s.Linkedin} className='social__img' alt="Linkedin" />
                </a>
            </div>
        </div>
    );
}

export default Contact;