import React from "react";
import { useState } from "react";
import { headerNav } from "../constants/index";

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <header id="header" role="banner">
      <div className="header_inner">
        <div className="header__logo">
          <a href="/">
            portfolio <em>developer</em>
          </a>
        </div>
        <nav
          className={`header__nav ${show ? "show" : ""}`}
          role="navigation"
          aria-label="메인 메뉴"
        >
          <ul>
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          id="headerToggle"
          className="header__nav__mobile"
          aria-controls="primary-menu"
          aria-expanded={`${show ? "true" : "false"}`}
          role="button"
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
