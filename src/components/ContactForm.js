import React, {useState} from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faEnvelope, faPaperPlane, faUserTie } from '@fortawesome/free-solid-svg-icons';


const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    const handleNameChange = (e) => setName(e.target.value);
    
    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleSubjectChange = (e) => setSubject(e.target.value);

    const handleMessageChange = (e) => setMessage(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();


    }

    return ( 
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form__box">
                <div className="box__icon">
                    <FontAwesomeIcon
                        icon={faUserTie}
                        color="#E95151"
                        size="2x"
                    />
                </div>
                <input
                    type="text"
                    value={name}
                    placeholder='Name'
                    onChange={handleNameChange}
                />
            </div>
            <div className="form__box">
                <div className="box__icon">
                    <FontAwesomeIcon
                        icon={faAt}
                        color="#E95151"
                        size="2x"
                    />
                </div>
                <input
                    type="email"
                    value={email}
                    placeholder='Email'
                    onChange={handleEmailChange}
                />
            </div>
            <div className="form__box">
                <div className="box__icon">
                    <FontAwesomeIcon
                        icon={faPaperPlane}
                        color="#E95151"
                        size="2x"
                    />
                </div>
                <input
                    type="text"
                    value={subject}
                    placeholder='Subject'
                    onChange={handleSubjectChange}
                />
            </div>
            <div className="form__box">
                <div className="box__icon">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        color="#E95151"
                        size="2x"
                    />
                </div>
                <textarea
                    value={message}
                    placeholder='Your Message...'
                    onChange={handleMessageChange}
                />
            </div>
            <input type="submit" value="Send"/>
        </form>
    );
}

export default ContactForm;