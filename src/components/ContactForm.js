import React, {useState, useRef, useEffect} from 'react';

import Tilt from 'react-parallax-tilt';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com';


const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [captcha, setCaptcha] = useState([]);
    const [answer, setAnswer] = useState('');

    const form = useRef();

    useEffect(() => {
        for (let i = 0; i<2; i++)
            setCaptcha(captcha => [...captcha, Math.floor(Math.random() * 10) + 1])
    }, []);

    const handleNameChange = (e) => setName(e.target.value)
    
    const handleEmailChange = (e) => setEmail(e.target.value)

    const handleMessageChange = (e) => setMessage(e.target.value)

    const handleAnswerChange = (e) => {
        const val = e.target.value;
        if (Number(val) || val === "") setAnswer(val)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // & val
        if (name !== "" && email !== "" && message !== "") {
            if (email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
                if (Number(answer) === captcha[0]+captcha[1]) {

                    emailjs.sendForm("service_cxoxesr", "TEMP", form.current, "user_YiCuJS7dEJZjxxcrfEK5I")
                    .then((res) => {
                        toast.success("Mail sent!");
                        setName('');
                        setEmail('');
                        setMessage('');
                        setAnswer('');
                    }, (err) => {
                        toast.error("Mail could not be sent.");
                    });
                }
                else toast.error("Wrong calculation...");
            }
            else toast.error("Please input a valid email.");
        }
        else toast.error("Please complete every fields.");
    }

    return ( 
        <form className='form__container' onSubmit={handleSubmit} ref={form}>
            <Tilt
                tiltEnable={false}
                glareEnable={true}
                glareMaxOpacity={0.05}
                glarePosition={'all'}
                glareBorderRadius={'60px'}
                className="contact-form blur"
            >
                <h1 className='form__title'><span className='underline'>Conta</span>ct Me</h1>

                <div className="form__middle">
                    <input
                        type="text"
                        value={name}
                        name="name"
                        placeholder='Name'
                        onChange={handleNameChange}
                    />
                    <input
                        type="text"
                        value={email}
                        name="email"
                        placeholder='Email'
                        onChange={handleEmailChange}
                    />
                    <textarea
                        value={message}
                        name="message"
                        placeholder='Message'
                        id='inputMessage'
                        onChange={handleMessageChange}
                    />
                </div>
                
                <div className="form__bottom">
                    <input
                        type="number"
                        value={answer}
                        name="captcha"
                        id="captcha"
                        placeholder={`${captcha[0]} + ${captcha[1]}`}
                        onChange={handleAnswerChange}
                    />
                    <input type="submit" value="Send" className='btn'/>
                </div>
            </Tilt>
        </form>
    );
}

export default ContactForm;