import "./Carroussel.css";
import droite from "../../assets/icones/droite.png";
import gauche from "../../assets/icones/gauche.png";
import { useState } from "react";

let index = 0;

function Carroussel({ pictures }) {
  const [, setNewImg] = useState(0);
  //setNewImg, est la fonction que l'on appelle et qui modifie cette valeur
  //useState, représente la valeur de base, 0

  function btnsuivant() {
    index++;
    if (index >= pictures.length) index = 0;
    setNewImg(index);
  }
  function btnprecedent() {
    index--;
    if (index < 0) index = pictures.length - 1;
    setNewImg(index);
  }

  function navigation() {
    return (
      <div className="navigation">
        <img src={gauche} className="precedent" onClick={btnprecedent} alt="" />

        <img src={droite} className="suivant" onClick={btnsuivant} alt="" />
        <p>
          {index + 1}/{pictures.length}
        </p>
      </div>
    );
  }
  return (
    <div
      className="photo"
      style={{ backgroundImage: `url("${pictures[index]}")` }}
    >
      {pictures.length > 1 ? navigation() : ""}
    </div>
  );
}

export default Carroussel;
