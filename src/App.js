import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import AcercaDe from "./componentes/AcerdaDe";
import Blog from "./componentes/Blog";
import Header from "./componentes/Header";
import styled from "styled-components";
import Post from "./componentes/Post";
import Error404 from "./componentes/Error404";

function App() {
  return (
    // BrowserRouter debe contener adentro a toda la aplicacion para que pueda funcionar
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main>
          {/* Dentro de 'routes' deben ir los 'route' sino no funciona */}
          <Routes>
            {/* Carga el componente 'Error404' para todas las rutas */}
            <Route path="*" element={<Error404 />} />
            {/* Cada route es una ruta, con 'path' le indicamos el nombre de la ruta  */}
            <Route path="/" element={<Inicio />} />
            {/* Esta ruta se va a mostrar cuando tenga en su url '/blog' ya que asi esta definido en el path */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
            {/* Al poner dos puntos le estamos diciendo que el id sera un parametro */}
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
}

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;

const Main = styled.main`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(129, 129, 129, 0.1);
`;

export default App;
