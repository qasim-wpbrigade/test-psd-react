import React from "react";

const PopupForm = ({showPopup, setShowPopup}) => {
  return (
    <div className={`headerFormPopup ${showPopup && 'active'}`}>
      <button className="close-btn" onClick={() => setShowPopup(false)}>close</button>
      <div onClick={() => setShowPopup(false)} className="overlay"></div>
      <form className="requestInformationForm">
        <div className="form-inner">
          <div className="form-text">
            <h5>Request Information Form</h5>
            <h4>Lörem ipsum folig innan</h4>
            <p>
              Vaktig treskade rer till e-demokrati euroganar i böbel år. Faktig
              denera inte revis
            </p>
          </div>
          <div className="form-fields">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="campus">campus</label>
                <select name="campus" id="campus">
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
                />
              </div>
            </div>
            <button type="submit" className="btn">
              Kagt maska
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PopupForm;
