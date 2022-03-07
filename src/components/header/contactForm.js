import React from "react";

const ContactForm = ({success, handleSubmit}) => {
    return (
        <form className="requestInformationForm" onSubmit={handleSubmit}>
            <div className="form-inner">
                <div className="form-text">
                    <h5>Request Information Form</h5>
                    {!success && (
                        <>
                            <h4>Lörem ipsum folig innan</h4>
                            <p>
                                Vaktig treskade rer till e-demokrati euroganar i
                                böbel år. Faktig denera inte revis
                            </p>
                        </>
                    )}
                </div>
                {!success && (
                    <div className="form-fields">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="campus">campus</label>
                                <select name="campus" id="campus" required>
                                    <option value="">select campus</option>
                                    <option value="bsc">Bsc</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">date</label>
                                <input
                                    type="date"
                                    name="date"
                                    placeholder="DD/MM/YY"
                                    required
                                    id="date"
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="fname">first name</label>
                                <input
                                    type="fname"
                                    name="fname"
                                    placeholder="First name"
                                    required
                                    id="fname"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lname">lirst name</label>
                                <input
                                    type="lname"
                                    name="lname"
                                    placeholder="last name"
                                    id="lname"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row-full">
                            <div className="form-group">
                                <label htmlFor="email">email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email@example.com"
                                    id="email"
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn">
                            Kagt maska
                        </button>
                    </div>
                )}
                {success && (
                    <div className="success-box">
                        <div className="success-icon"></div>
                        <h4>Thank you!</h4>
                        <p>
                            Thank you for your interest in Pima Medical
                            Institute. A member of our team will be in contact
                            with you very soon. We look forward to speaking with
                            you.
                        </p>
                    </div>
                )}
            </div>
        </form>
    );
};

export default ContactForm;
