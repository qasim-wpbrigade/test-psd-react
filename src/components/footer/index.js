/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Logo from '../../assets/images/skt-logo.svg';
import brandLogo1 from '../../assets/images/footer-logo1.webp';
import brandLogo2 from '../../assets/images/footer-logo2.webp';
import brandLogo3 from '../../assets/images/footer-logo3.webp';
import brandLogo4 from '../../assets/images/footer-logo4.webp';
import brandLogo5 from '../../assets/images/footer-logo5.webp';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-top">
        <div className="container">
          <div className="brand-info">
            <a href="/" className="brand-logo"><img src={Logo} alt="logo" /></a>
            <h6>SKT College of Education</h6>
            <p className="address">dolor purus non enim praesent elementum facilisis. </p>
            <p className="number"><a href="tel:14372907307">1-437-290-7307</a></p>
            <p className="contact"><Link to="/contact">contact us</Link></p>
          </div>
          <div className="footer-navs">
            <p>gravida neque convallis a cras semper. Duis tristique sollicitudin nibh sit amet. Vestibul</p>
            <ul className="partners">
              <li><a href="/"><img src={brandLogo1} alt="logo" /></a></li>
              <li><a href="/"><img src={brandLogo2} alt="logo" /></a></li>
              <li><a href="/"><img src={brandLogo3} alt="logo" /></a></li>
              <li><a href="/"><img src={brandLogo4} alt="logo" /></a></li>
              <li><a href="/"><img src={brandLogo5} alt="logo" /></a></li>
            </ul>
            <ul className="footer-nav">
              <li><a href="/">Storado</a></li>
              <li><a href="/">Bloog</a></li>
              <li><a href="/">Est sit amet facilisis magna etiam</a></li>
              <li><a href="/">FAQ’s</a></li>
              <li><a href="/">Neque</a></li>
              <li><a href="/">Neque convallis a cras semper</a></li>
              <li><a href="/">Carir</a></li>
              <li><a href="/">gravida neque</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="about">
            <p>© 2021 SKT College of Education. All right reserved.</p>
            <ul>
              <li> <a href="/">Privacy Policy</a></li>
              <li> <a href="/">Accessibility</a></li>
              <li> <a href="/">Disclaimers</a></li>
            </ul>
          </div>
          <ul className="social-links">
            <li><a href="/" className='facebook' tooltip="facebook"></a></li>
            <li><a href="/" className='twitter' tooltip="twitter"></a></li>
            <li><a href="/" className='linkedin' tooltip="linkedin"></a></li>
            <li><a href="/" className='instagram' tooltip="instagram"></a></li>
            <li><a href="/" className='youtube' tooltip="youtube"></a></li>
          </ul>
        </div>  
      </div>
    </footer>
  )
}

export default Footer