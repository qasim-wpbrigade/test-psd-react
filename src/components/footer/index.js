import React from 'react';
import Logo from '../../assets/images/skt-logo.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-top">
        <div className="container">
          <div className="bramd-info">
            <a href="/" className="brand-logo"><img src={Logo} alt="logo" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer