import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
//import pages
import Home from "./pages/Home/Home";
import Apropos from "./pages/Apropos/Apropos";
import Pagelogements from "./pages/Logements/Pagelogements";
import Page404 from "./pages/Erreur/Page404";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logement/:logementId" element={<Pagelogements />} />
          <Route path="/apropos" element={<Apropos />} />
          {/* si ne correspond à aucun chemin (path)*/}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.StrictMode>
  );
};

export default App;
