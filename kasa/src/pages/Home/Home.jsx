import React from "react";
import "./Home.css";
import home from "../../assets/images/banniereAccueil.png";
import Gallery from "../../Components/Gallery/Gallery";
import { Link } from "react-router-dom";
import { getLogements } from "../../data/services";

const Home = () => {
  return (
    <div className="Home">
      <div className="banniere">
        <img src={home} alt="bannière de la page d'acceuil" />
        <h1>Chez vous, partout et ailleurs</h1>
        <div className="filtre"></div>
      </div>
      <div className="GalerryLogements">
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
};
// Récupération de la gallery par la fonction getLogements() en utilisant les mots clés de la data

export default Home;
