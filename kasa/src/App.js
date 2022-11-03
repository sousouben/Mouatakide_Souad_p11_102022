import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
//import Carrouselle from "./Components/Carroussel/Carroussel";
//import Dropdown from "./Components/Dropdown/Dropdown";
//import Gallery from "./Components/Gallery/Gallery";
//import Tags from "./Components/Tags/Tags";

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
          <Route path="/" element={<Home />} />
          <Route path="/Logement/:logementId" element={<Pagelogements />} />
          <Route path="/Apropos" element={<Apropos />} />
          {/* si ne correspond à aucun chemin (path)*/}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.StrictMode>
  );
};

export default App;
