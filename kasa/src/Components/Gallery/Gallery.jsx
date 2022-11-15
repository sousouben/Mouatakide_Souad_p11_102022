import React from "react";
import "./Gallery.css";

//utilisation de props signifie « propriétés » et utilisation des mots clés de la data pour pouvoir récupérer la data consernée.
function Gallery(props) {
  return (
    <div className="gallery">
      <img src={props.cover} alt={props.title} />
      <div className="filtreGallery"></div>
      <h2>{props.title}</h2>
    </div>
  );
}

export default Gallery;
