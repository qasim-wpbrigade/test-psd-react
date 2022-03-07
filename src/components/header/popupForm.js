import React, { useState } from "react";
import ContactForm from "./contactForm";

const PopupForm = ({ showPopup, setShowPopup }) => {
    const [success, setsuccess] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setsuccess(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setsuccess(false);
    };
    return (
        <div className={`headerFormPopup ${showPopup && "active"}`}>
            <button className="close-btn" onClick={closePopup}>
                close
            </button>
            <div onClick={closePopup} className="overlay"></div>
            <div className="requestInformationPopup">
                <ContactForm success={success} handleSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default PopupForm;
