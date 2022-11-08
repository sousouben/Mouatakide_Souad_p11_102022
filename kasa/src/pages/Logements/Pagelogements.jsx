import React from "react";
import "./Pagelogements.css";
import { getId } from "../../data/services";
import { useParams } from "react-router-dom";
import Carroussel from "../../Components/Carroussel/Carroussel";
import Page404 from "../Erreur/Page404";
import Dropdown from "../../Components/Dropdown/Dropdown";

function Pagelogements() {
  const { logementId } = useParams();
  const ficheLogement = getId(logementId);

  return Pagelogements === undefined ? (
    <Page404 />
  ) : (
    <div className="ficheLogement">
      <div className="navig">
        <Carroussel pictures={ficheLogement.pictures} />
      </div>
      <div className="titreLogement">
        <div className="titre-nom">
          <h2>{ficheLogement.title}</h2>
          <p>{ficheLogement.location}</p>
        </div>
        <div className="nomLogement">
          <h3>{ficheLogement.host.name}</h3>
          <img src={ficheLogement.host.picture} alt="" />
        </div>
      </div>

      <div className="tag-evaluation">
        <div className="tags">{ficheLogement.tags}</div>
        <div className="start"></div>
      </div>
      <div className="descript-epuip">
        <div className="description">
          <Dropdown title="Descrition" text={ficheLogement.description} />
        </div>
        <div className="equipements">
          <Dropdown title="Equipements" text={ficheLogement.equipments} />
        </div>
      </div>
    </div>
  );
}

export default Pagelogements;
