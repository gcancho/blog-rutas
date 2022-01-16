import React from "react";
import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    // BrowserRouter debe contener adentro a toda la aplicacion para que pueda funcionar
    <BrowserRouter>
      <div>
        <header>
          <h1>Mi blog</h1>
          {/* En vez de usar 'a' usamos NavLink para que no se recargue la pagina, y el 'href' lo remplazamos por 'to' */}
          <nav>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/acerca-de">Acerca de</NavLink>
          </nav>
        </header>
        <main>
          {/* Dentro de 'routes' deben ir los 'route' sino no funciona */}
          <Routes>
            {/* Cada route es una ruta, con 'path' le indicamos el nombre de la ruta  */}
            <Route
              path="/"
              element={
                <div>
                  <h2>Pagina de Inicio</h2>
                  <p>Esta en la pagina principal de nuestro sitio</p>
                </div>
              }
            />
            {/* Esta ruta se va a mostrar cuando tenga en su url '/blog' ya que asi esta definido en el path */}
            <Route
              path="/blog"
              element={
                <div>
                  <h2>Blog</h2>
                  <ul>
                    <li>Articulo #1</li>
                    <li>Articulo #2</li>
                    <li>Articulo #3</li>
                  </ul>
                </div>
              }
            />
            <Route
              path="/acerca-de"
              element={
                <div>
                  <h2>Acerca de</h2>
                  <p>Hola me llamo Giovanni</p>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
