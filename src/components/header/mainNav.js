import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/skt-logo.svg";
import { mainNavData } from "./mainNavData";

const HeaderBottom = () => {
  return (
    <div className="headerBottom">
      <div className="container">
        <Link to="/" className="brand-logo">
          <img src={Logo} alt="skt colleges" />
        </Link>
        <ul className="mainNav">
          {mainNavData.map((item, index) => {
            return (
              <li key={index} className={item.subMenu && "hasSubmenu"}>
                <Link to={item.link}>{item.name}</Link>
                {item.subMenu && (
                  <ul className="subMenu">
                    {item.subMenu.map((subItem, subIndex) => {
                      return (
                        <li key={subIndex} className={subItem.subMenu && "hasSubmenu"}>
                          <Link to={subItem.link}>{subItem.name}</Link>
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
        <Link className="btn" to="/">
          Kagt maska.
        </Link>
      </div>
    </div>
  );
};

export default HeaderBottom;
