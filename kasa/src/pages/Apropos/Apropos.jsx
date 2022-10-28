import React from "react";
import "./Apropos.css";
import apropos from "../../assets/images/banniereApropos.png";

const Apropos = () => {
  return (
    <div className="apropos">
      <div className="banniere">
        <img src={apropos} alt="bannière à propos" />
        <div className="filtre"></div>
      </div>
    </div>
  );
};

export default Apropos;
