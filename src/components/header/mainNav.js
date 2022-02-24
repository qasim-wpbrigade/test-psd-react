import React,{useRef} from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/skt-logo.svg";
import { mainNavData } from "./mainNavData";
import {slideToggle} from '../slideToggle';

const HeaderBottom = ({setShowPopup}) => {
  const mobileMenu = useRef(null);
  const toggleSubMenu = (e) => {
    const subMenu = e.currentTarget.nextSibling;
        if(subMenu) {
          if(e.currentTarget.classList.contains('active')) {
            e.currentTarget.classList.remove('active');
          } else {
            e.currentTarget.classList.add('active');
          }
            slideToggle(subMenu);
        }
  }
  return (
    <div className="headerBottom">
      <div className="container">
        <button className="MenuToggleBtn" onClick={() => slideToggle(mobileMenu.current)}></button>
        <Link to="/" className="brand-logo">
          <img src={Logo} alt="skt colleges" />
        </Link>
        <div className="mainMenuWrapper" ref={mobileMenu}>
          <ul className="mainNav">
            {mainNavData.map((item, index) => {
              return (
                <li key={index} className={item.subMenu && "hasSubmenu"}>
                  <Link to={item.link}>{item.name}</Link>
                  {item.subMenu && <button className="arrow" onClick={toggleSubMenu}></button>}
                  {item.subMenu && (
                    <ul className="subMenu">
                      {item.subMenu.map((subItem, subIndex) => {
                        return (
                          <li key={subIndex} className={subItem.subMenu && "hasSubmenu"}>
                            <Link to={subItem.link}>{subItem.name}</Link>
                            {subItem.subMenu && <button className="arrow" onClick={toggleSubMenu}></button>}
                            {subItem.subMenu && (
                              <ul className="subMenu">
                                {subItem.subMenu.map((subItem, subIndex) => {
                                  return (
                                    <li key={subIndex}>
                                      <Link to={subItem.link}>
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <button className="btn" onClick={() => setShowPopup(true)}>
            Kagt maska.
          </button>
        </div>
        <button className="search-btn"></button>
      </div>
    </div>
  );
};

export default HeaderBottom;
