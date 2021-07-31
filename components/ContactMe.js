import { useState } from "react";
import emailjs from 'emailjs-com';


const ContactMe = () => {

    const templateId = process.env.TEMPLATE_ID;
    const userId = process.env.USER_ID;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false,
        error: '',
    })

    const [isSending, setIsSending] = useState(false);

    const validateSend = () => {

        let nameVal = false;
        let emailVal = false;
        let messageVal = false;

        if (name === '') {

            nameVal = true;
        }
        if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))) {

            emailVal = true;
        }
        if (message === '') {

            messageVal = true;
        }

        setErrors({
            name: nameVal,
            email: emailVal,
            message: messageVal,
        });

        return (!nameVal && !emailVal && !messageVal);

    }

    const handleSend = (e) => {

        e.preventDefault();

        const isValid = validateSend();

        if (!isValid) return;

        setIsSending(true);

        const templateParams = {
            message_html: message,
            from_name: name,
            reply_to: email
        }


        emailjs.send('gmail', templateId, templateParams, userId)
            .then((response) => {
                // console.log('SUCCESS!', response.status, response.text);
                setIsSending(false);
                setName('');
                setEmail('');
                setMessage('');
            }, (err) => {
                // console.log('FAILED...', err);
                setIsSending(false);
                setName('');
                setEmail('');
                setMessage('');
            });

    }


    return (
        <section className="contact">

            <div className="whyMe">

                <div className="titleContainer">

                    <div className="line">

                    </div>
                    <p>Contact Me</p>

                </div>

                <div className="whyHire">
                    <h3>Send a personal message.</h3>

                    <p>You can reach out to me and I&apos;ll replay as soon as possible.</p>
                </div>

            </div>

            <div className="formContainer">

                <form onSubmit={handleSend}>
                    <div className="formDiv">
                        <label>Your Name</label>
                        <input type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                        {errors.name && <p>This field is required</p>}
                    </div>

                    <div className="formDiv">
                        <label>Your Email</label>
                        <input type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        {errors.email && <p>This field is required</p>}
                    </div>

                    <div className="formDiv">
                        <label>Your Message</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        {errors.message && <p>This field is required</p>}
                    </div>

                    <input type="submit"
                        value={isSending ? "Sending" : "Send"}
                        className={isSending ? "sendingMessage" : ''}
                        disabled={isSending}
                    ></input>

                </form>

            </div>
        </section>
    );
}

export default ContactMe;