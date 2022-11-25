import React from "react";
import "./Home.css";
import Banniere from "../../Components/Banniere/Banniere";
import Image from "../../assets/images/banniereAccueil.png";
import Gallery from "../../Components/Gallery/Gallery";
import { Link } from "react-router-dom";
import { getLogements } from "../../data/services";

function Home() {
  return (
    <div className="main">
      <Banniere image={Image} />
      <div className="GalleryLogements">
        {getLogements().map((logement) => (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <Gallery
              cover={logement.cover}
              title={logement.title}
              id={logement.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
// Récupération de la gallery par la fonction getLogements() en utilisant les mots clés de la data

export default Home;
