import React, { useState } from "react";
import close from "../../assets/icones/fermer.png";
import open from "../../assets/icones/ouvert.png";
import "./Dropdown.css";

function Dropdown({ title, text, extraClass }) {
  const [dropdownStart, setDropdown] = useState(false);

  return dropdownStart ? (
    <div className={extraClass ? "dropdown " + extraClass : "dropdown"}>
      <div className="titre-dropdown">
        <h3>{title}</h3>
        <img
          src={open}
          alt="ouverture collapse"
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
          src={close}
          alt="fermeture collapse"
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
        <li key={equipment}>{equipment}</li>
      ))}
    </ul>
  );
}

export default Dropdown;
