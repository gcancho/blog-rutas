import React from "react";

// Creamos un contexto = estado global
const ContextoTema = React.createContext();

// Creamos un componente que va a ser el proveedor de nuestro estado global
// Le tenemos que pasar la palabra reservada "children", el cual es el hijo de ProveedorTema en 'index.js' que en este caso es App
const ProveedorTema = ({ children }) => {
  return (
    // Accedemos a 'ContextoTema' ya que con ese nombre lo creamos arriba,  y acceder a Provider
    // Con 'value' le podemos dar una propiedad
    <ContextoTema.Provider value={{ nombre: "Carlos" }}>
      {children}
    </ContextoTema.Provider>
  );
};

// Exportamos dos cosas
export { ContextoTema, ProveedorTema };
