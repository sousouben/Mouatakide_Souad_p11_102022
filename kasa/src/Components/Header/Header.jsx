import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logoHeader.png";

function Header() {
  let activeClassName = "underline";
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo kasa" />
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink
              to="home"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="apropos"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              À Propos
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
