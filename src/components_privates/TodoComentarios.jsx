import React from "react";
const TodoComentarios = ({ item, user, deleteComment, editComment,setComentario }) => {
  return (
    <div className="caja-commit">
      <div className="comentario-p rounded shadow ">
        <div className="picture-profile m-1 ">
          <img
            style={{ width: "55px"}}
            className="rounded-circle"
            src={user.picture}
            alt="picture..profile"
          />
        </div>
        <p className="mt-1 p-1">
          Escrito por : <span style={{ color: "blue" }}> {user.name}</span>{" "}
          <hr/>
        </p>
        <p className="p-1">{setComentario}{item.commit}</p>
        <div className=" d-flex justify-content-end ">
          <i
            onClick={()=>editComment(item.id)}
            className="iconos-commit fa-regular fa-pen-to-square m-2"
          ></i>
          <i
            onClick={()=>deleteComment(item.id)}
            className="iconos-commit fa-regular fa-trash-can m-2"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default TodoComentarios;
