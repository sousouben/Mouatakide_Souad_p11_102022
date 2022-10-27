import React from "react";
import "../Apropos/Apropos.css";
import apropos from "../../assets/images/banniereApropos.png";

const Apropos = () => {
  return (
    <div className="apropos">
      <img src={apropos} alt="bannière à propos" />
      <h1>A propos</h1>
    </div>
  );
};

export default Apropos;
