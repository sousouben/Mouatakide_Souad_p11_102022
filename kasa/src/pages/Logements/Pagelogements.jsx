import React from "react";
import "./Pagelogements.css";
import { getId } from "../../data/services";
import { Navigate, useParams } from "react-router-dom";
import Carroussel from "../../Components/Carroussel/Carroussel";
import Dropdown from "../../Components/Dropdown/Dropdown";
import Tag from "../../Components/Tags/Tags";

import StarRating from "../../Components/StarRating/StarRating";

function Pagelogements() {
  const { logementId } = useParams();
  const ficheLogement = getId(logementId);

  if (ficheLogement === undefined || ficheLogement === null) {
    return <Navigate to="/page404"></Navigate>;
  }

  return (
    <div className="ficheLogement">
      <div className="navig">
        <Carroussel pictures={ficheLogement.pictures} />
      </div>
      <div className="titreLogement">
        <div className="titre-nom">
          <h2>{ficheLogement.title}</h2>
          <p>{ficheLogement.location}</p>
          <div className="tag-evaluation">
            <div className="tags">
              {ficheLogement.tags.map((tag) => (
                <Tag tagsNom={tag} key={tag} />
              ))}
            </div>
          </div>
        </div>
        <div className="nomLogement">
          <div className="heberger">
            <h3>{ficheLogement.host.name}</h3>
            <img
              src={ficheLogement.host.picture}
              alt={ficheLogement.host.picture}
            />
          </div>
          <div className="nameRating">
            <StarRating rating={ficheLogement.rating} />
          </div>
        </div>
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
