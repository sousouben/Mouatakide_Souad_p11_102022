import React from "react";
import "./Pagelogements.css";
import interLogement from "../../assets/images/interieur.png";
import Carroussel from "../../Components/Carroussel/Carroussel";

function Pagelogements() {
  return (
    <div className="logementSelectionner">
      <div className="banniere-logement">
        <Carroussel />
        <img src={interLogement} alt="logement séléctionné" />
      </div>
      <div className="titreLogement">
        <div className="titre-nom">
          <h2>titre</h2>
          <p>sous-titre</p>
        </div>
      </div>
      <div className="nomLogement">
        <h3>Nom</h3>
        <div className="avatar"></div>
      </div>
      <div className="tag-evaluation">
        <div className="tags"></div>
        <div className="nbre-etoile"></div>
      </div>
      <div className="descrpt-epuip">
        <div className="descrption"></div>
        <div className="equipements"></div>
      </div>
    </div>
  );
}

export default Pagelogements;
