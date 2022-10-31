import React from "react";
import "./Carroussel.css";
import droite from "../../assets/icones/droite.png";
import gauche from "../../assets/icones/gauche.png";

function Carroussel() {
  return (
    <div className="carroussel">
      <div className="navigation">
        <img className="precedent" src={gauche} alt="" />
        <img className="suivant" src={droite} alt="" />
      </div>
    </div>
  );
}

export default Carroussel;
