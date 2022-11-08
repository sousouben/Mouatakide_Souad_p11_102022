import React, { useState } from "react";
import close from "../../assets/icones/fermer.png";
import open from "../../assets/icones/ouvert.png";
import "./Dropdown.css";

function Dropdown({ title, text, extraClass }) {
  const [dropdownOpen, setDropdown] = useState(false);

  return dropdownOpen ? (
    <div className={extraClass ? "dropdown " + extraClass : "dropdown"}>
      <div className="titre-dropdown">
        <h3>{title}</h3>
        <img
          src={close}
          alt="Contenu invisible"
          onClick={() => setDropdown(false)}
        />
      </div>
      {typeof text === "object" ? tabEquipement(text) : <p>{text}</p>}
    </div>
  ) : (
    <div className="dropdown">
      <div className="titre-dropdown">
        <h3>{title}</h3>
        <img
          src={open}
          alt="Contenu visible"
          onClick={() => setDropdown(true)}
        />
      </div>
    </div>
  );
}

function tabEquipement(tab) {
  return (
    <ul>
      {tab.map((equipment) => (
        <li>{equipment}</li>
      ))}
    </ul>
  );
}

export default Dropdown;
