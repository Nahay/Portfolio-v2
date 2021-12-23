import React, {useState, useRef, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faEnvelope, faPaperPlane, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';


const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [captcha, setCaptcha] = useState([]);
    const [answer, setAnswer] = useState("");

    const form = useRef();

    useEffect(() => {
        for (let i = 0; i<2; i++)
            setCaptcha(captcha => [...captcha, Math.floor(Math.random() * 10) + 1]);
    }, []);

    const handleNameChange = (e) => setName(e.target.value);
    
    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleSubjectChange = (e) => setSubject(e.target.value);

    const handleMessageChange = (e) => setMessage(e.target.value);

    const handleAnswerChange = (e) => {
        const val = e.target.value;
        if (Number(val) || val === "") setAnswer(val);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name !== "" && email !== "" && subject !== "" && message !== "") {
            if (email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
                if (Number(answer) === captcha[0]+captcha[1]) {

                    emailjs.sendForm("service_cxoxesr", "TEMP", form.current, "user_YiCuJS7dEJZjxxcrfEK5I")
                    .then((res) => {
                        toast.success("Mail sent!")
                    }, (err) => {
                        toast.error("Mail could not be sent.")
                    });
                }
                else toast.error("Wrong calculation...")
            }
            else toast.error("Please input a valid email.")
        }
        else toast.error("Please complete every fields.")
    }

    return ( 
        <form className="contact-form" onSubmit={handleSubmit} ref={form}>
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
                    name="name"
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
                    type="text"
                    value={email}
                    name="email"
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
                    name="subject"
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
                    name="message"
                    placeholder='Your Message...'
                    onChange={handleMessageChange}
                />
            </div>
            <div className="form__bottom">
                <div className="bottom_captcha">
                    <label htmlFor="captcha">{`${captcha[0]} + ${captcha[1]}`}</label>
                    <input
                        type="number"
                        value={answer}
                        name="captcha"
                        id="captcha"
                        onChange={handleAnswerChange}
                    />
                </div>
                <input type="submit" value="Send"/>
            </div>
        </form>
    );
}

export default ContactForm;