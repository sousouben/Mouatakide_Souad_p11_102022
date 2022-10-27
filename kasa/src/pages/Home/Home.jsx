import React from "react";
import "../Home/Home.css";
import home from "../../assets/images/banniereAccueil.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="banniere">
        <img src={home} alt="bannière de la page d'acceuil" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="Galerry"></div>
    </div>
  );
};

export default Home;
