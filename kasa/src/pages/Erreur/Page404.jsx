import React from "react";
import "./Page404.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="erreurPage">
      <h1>404</h1>
      <span>Oups! La page que vous demandez n'existe pas.</span>
      <br />
      <Link to="/" className="retour">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Page404;
