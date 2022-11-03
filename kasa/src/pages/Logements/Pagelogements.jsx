import React from "react";
import "./Pagelogements.css";
import { getId } from "../../data/services";
import { useParams } from "react-router-dom";
import Carroussel from "../../Components/Carroussel/Carroussel";

function Pagelogements() {
  const { logementId } = useParams();
  const ficheLogement = getId(logementId);

  return (
    <div className="ficheLogement">
      <div className="navig">
        <Carroussel pictures={ficheLogement.pictures} />
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
