import { toast } from 'react-toastify';

import { OrangeRocket, PlanetTwo } from '../../assets/Portfolio/indexEtc';
import * as s from '../../assets/Portfolio/socialIndex';

import ContactForm from '../../components/ContactForm';

const Contact = () => {
    const clickToCopy = () => {
        navigator.clipboard.writeText('Lily.#7476');
        toast.success('You just got my Discord username, add me now!');
    };

    return (
        <div className="contact" id="contact">
            <div className="title__container">
                <h2 className="bg-title">CONTACT</h2>
                <img src={OrangeRocket} className="contact__img" alt="Orange Rocket" />
                <img src={PlanetTwo} className="contact__img" alt="Planet Two" />
            </div>

            <div className="contact__left">
                <ContactForm />
            </div>
            <div className="contact__right">
                <div className="social__box blur" onClick={clickToCopy}>
                    <img src={s.Discord} className="social__img" alt="Discord" />
                    <span>Lily.#7476</span>
                </div>
                <a
                    href="https://github.com/Nahay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social__box blur"
                >
                    <img src={s.GitHub} className="social__img" alt="GitHub" />
                </a>
                <a
                    href="https://www.linkedin.com/in/lilybarberou/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social__box blur"
                >
                    <img src={s.Linkedin} className="social__img" alt="Linkedin" />
                </a>
            </div>
        </div>
    );
};

export default Contact;
