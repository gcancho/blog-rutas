import React from "react";
import posts from "../data/posts";
// Hook 'useParams' para obtener los parametros de la barra de direcciones
// Con Navigate podemos redireccionar paginas
import { useParams, Navigate } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  // Se pone el -1 porque posts es un arreglo que empieza en la posicion cero
  return (
    <>
      {posts[id - 1] ? (
        <div>
          <h1>{posts[id - 1].titulo}</h1>
          <p>{posts[id - 1].texto}</p>
        </div>
      ) : (
        //Con replace y to nos redirige a la pagina que pongamos dentro del to
        <Navigate replace to="/" />
      )}
    </>
  );
};

export default Post;
