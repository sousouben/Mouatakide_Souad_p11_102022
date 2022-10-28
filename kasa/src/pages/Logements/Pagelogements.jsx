import React from "react";
import "./Pagelogements.css";
import interLogement from "../../assets/images/interieur.png";

function Pagelogements() {
  return (
    <div className="logementSelectionner">
      <div className="banniere">
        <img src={interLogement} alt="logement séléctionné" />
      </div>
      <div className="titreLogement">
        <h2>titre</h2>
        <p>sous-titre</p>
      </div>
      <div className="nomLogement">
        <h3>Nom</h3>
        <div className="avatar"></div>
      </div>
    </div>
  );
}

export default Pagelogements;
