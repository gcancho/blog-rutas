import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import AcercaDe from "./componentes/AcerdaDe";
import Blog from "./componentes/Blog";
import Header from "./componentes/Header";

function App() {
  return (
    // BrowserRouter debe contener adentro a toda la aplicacion para que pueda funcionar
    <BrowserRouter>
      <div>
        <Header />
        <main>
          {/* Dentro de 'routes' deben ir los 'route' sino no funciona */}
          <Routes>
            {/* Cada route es una ruta, con 'path' le indicamos el nombre de la ruta  */}
            <Route path="/" element={<Inicio />} />
            {/* Esta ruta se va a mostrar cuando tenga en su url '/blog' ya que asi esta definido en el path */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
