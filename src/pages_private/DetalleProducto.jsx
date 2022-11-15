import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comentarios from "../components_privates/Comentarios";
import DetalleCards from "../components_privates/DetalleCards";
import TodoComentarios from "../components_privates/TodoComentarios";
import MiContext from "../Context/Micontext";

const DetalleProducto = () => {
  const { publicacion, productos } = useContext(MiContext);
  const { id } = useParams();
  const { user } = useAuth0();
  //hook para los comentarios
  const [comentario, setComentario] = useState("");
  //hook para enlistar los comentarios []
  const [list, setList] = useState([]);


  useEffect(() => {
    const obtenerDataLocal = () => {
      const listaLS =
        JSON.parse(localStorage.getItem("list")) ?? [];
      setList(listaLS);
    };
    obtenerDataLocal();
  }, []);

  //guardo los estados en localStorage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);


  const handleCommitChange = (e) => {
    setComentario(e.target.value);
    console.log(e.target.value);
  };

  const handleCommitSubmit = (e) => {
    e.preventDefault();

    const commits = {
      id: Date.now(),
      commit: comentario,
    };
    const temp = [...list, commits];
    setList(temp);
    setComentario("");
    console.log(comentario);
  };
//funcion para borrar un comentario 
  const deleteComment=(id)=>{
    const deleteElement=list.filter((item)=>item.id !==id)
    setList(deleteElement)
  }

  const editComment=(id)=>{
    const temp=[...list];
    const elemento=temp.find((ele)=>ele.id === id);
    console.log(elemento)
    setComentario(elemento.commit)
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-2 p-5">Detalle del Producto</h1>
        <div className="row">
          <div className="col-10 col-md-6 col-sm-10 card  d-flex align-items-center mt-5 shadow bg-white rounded-5">
            {productos
              .filter((item) => item.id === Number(id))

              .map((item) => (
                <DetalleCards item={item} user={user} />
              ))}
            {publicacion
              .filter((item) => item.id === id)

              .map((item) => (
                <DetalleCards key={item.id} item={item} user={user} />
              ))}
          </div>
        </div>
        <Comentarios
          handleCommitSubmit={handleCommitSubmit}
          comentario={comentario}
          setComentario={setComentario}
          handleCommitChange={handleCommitChange}
        />
        <p>Ultimos comentarios de usuarios:</p>
        <hr />

        <div className="row">
          <div className="col col-sm-6 col-md-6">
            {list.map((item) => (
              <TodoComentarios
                list={list}
                key={item.id}
                item={item}
                user={user}
                deleteComment={deleteComment}
                editComment={editComment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleProducto;
