import React from 'react';
import TopBar from './topBar';
import HeaderBottom from './mainNav';
import PopupForm from './popupForm';

const Header = () => {
  return (
    <header className='header'>
      <TopBar />
      <HeaderBottom />
      <PopupForm />
    </header>
  )
}

export default Header