import React from "react";
import "./Banniere.css";

function Banniere({ image }) {
  return (
    <div className="banniere">
      <img src={image} alt="" className="bannerImg" />
      <h1>Chez vous, partout et ailleurs</h1>
      <div className="filtre"></div>
    </div>
  );
}

export default Banniere;
