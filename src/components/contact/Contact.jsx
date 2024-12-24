import React, { useRef, useState } from 'react';
import "./contact.css";
import { HiOutlineMail, HiOutlineArrowSmRight } from "react-icons/hi";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(null); // For storing the message (error or success)
    const [isSending, setIsSending] = useState(false); // For managing the send button state

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true); // Disable the button when sending

        // Log form data for debugging
        console.log("Sending email with data: ", {
            name: form.current.name.value,
            email: form.current.email.value,
            project: form.current.project.value,
        });

        emailjs.sendForm('service_kr2j9hc', 'template_5pjicsn', form.current, 'pldY91gfQoGiBsdWm')
            .then((result) => {
                console.log(result); // Log success response
                setIsSending(false);
                setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
                e.target.reset(); // Reset the form

                setTimeout(() => {
                    setStatus(null); // Clear the status message after 4 seconds
                }, 4000);
            })
            .catch((error) => {
                console.error(error); // Log error response
                setIsSending(false);
                setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again later.' });

                setTimeout(() => {
                    setStatus(null); // Clear the status message after 4 seconds
                }, 4000);
            });
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title fs-1">Let's Connect</h2>
            <span className="section__subtitle text-md">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title fs-5">Talk to me</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <HiOutlineMail className="contact__card-icon" />
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data fs-6">sanjayravikomathi@gmail.com</span>
                            <a href="#contact" className="contact__button">
                                Write Me{" "}
                                <HiOutlineArrowSmRight className="contact__button-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title fs-5">Tell me, How can I help you?</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Type your name" required />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Type your email" required />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Description</label>
                            <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Provide some details..." required></textarea>
                        </div>

                        <button type="submit" className="button button--flex" disabled={isSending}>
                            {isSending ? 'Sending...' : 'Send Message'}
                            <svg
                                className="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                    fill="var(--container-color)"
                                ></path>
                                <path
                                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                    fill="var(--container-color)"
                                ></path>
                            </svg>
                        </button>
                    </form>

                    {/* Display success or error message */}
                    {status && (
                        <div className={`status-message ${status.type}`}>
                            {status.message}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
