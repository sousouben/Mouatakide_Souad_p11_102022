import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Header = () => {
  return (
    <div className="header">
      <header>
        <img src={logo} alt="logo site kasa" />
        <nav>
          <NavLink to="/" className={(Home) => (Home.isActive ? "active" : "")}>
            Accueil
          </NavLink>
          <NavLink
            to="/apropos"
            className={(Apropos) => (Apropos.isActive ? "active" : "")}
          >
            À Propos
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
