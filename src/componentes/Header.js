import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Mi blog</h1>
      {/* En vez de usar 'a' usamos NavLink para que no se recargue la pagina, y el 'href' lo remplazamos por 'to' */}
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/acerca-de">Acerca de</NavLink>
      </nav>
    </header>
  );
};

export default Header;
