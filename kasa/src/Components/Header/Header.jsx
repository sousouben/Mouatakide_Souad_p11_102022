import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logoHeader.png";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo kasa" />
      </div>
      <div className="navigation">
        <ul>
          <NavLink to="/" className={(Home) => (Home.isActive ? "active" : "")}>
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/Apropos"
            className={(Apropos) => (Apropos.isActive ? "active" : "")}
          >
            <li>À Propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
