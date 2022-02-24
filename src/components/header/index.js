import React,{useState} from 'react';
import TopBar from './topBar';
import HeaderBottom from './mainNav';
import PopupForm from './popupForm';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <header className='header'>
      <TopBar />
      <HeaderBottom setShowPopup={setShowPopup} />
      <PopupForm showPopup={showPopup} setShowPopup={setShowPopup} />
    </header>
  )
}

export default Header