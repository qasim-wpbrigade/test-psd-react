/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import TextHero from "../components/heroSection/textHero";
import ContactForm from '../components/header/contactForm';
import { Link } from "react-router-dom";

const Contact = () => {
    const [success, setsuccess] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setsuccess(true);
    };
    return (
        <>
            <TextHero name="contact us" />
            <div className="contact-wrapper">
                <div className="container">
                    <div className="form-wrapper"><ContactForm success={success} handleSubmit={handleSubmit} /></div>
                    <div className="brand-info">
                        <h6>SKT College of Education</h6>
                        <p className="address">dolor purus non enim praesent elementum facilisis. </p>
                        <p className="number"><a href="tel:14372907307">1-437-290-7307</a></p>
                        <p className="contact"><Link to="/contact">contact us</Link></p>
                        <ul className="social-links">
                            <li><a href="/" className='facebook' tooltip="facebook"></a></li>
                            <li><a href="/" className='twitter' tooltip="twitter"></a></li>
                            <li><a href="/" className='linkedin' tooltip="linkedin"></a></li>
                            <li><a href="/" className='instagram' tooltip="instagram"></a></li>
                            <li><a href="/" className='youtube' tooltip="youtube"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d215149.37920738937!2d74.4536215526359!3d32.587282611473874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1646638653571!5m2!1sen!2s" width="100%" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
        </>
    );
};

export default Contact;
