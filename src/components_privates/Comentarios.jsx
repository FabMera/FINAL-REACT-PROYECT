import React from "react";

const Comentarios = ({ comentario,handleCommitChange,handleCommitSubmit }) => {
  return (
    <div className="row">
      <div className="col-8 col-md-6 mx-auto">
        <form onSubmit={handleCommitSubmit} className="form-floating ">
          <textarea
            value={comentario}
            className="form-control"
            placeholder="Comenta el producto aqui"
            id="floatingTextarea2"
            style={{ height: 100 }}
            defaultValue={""}
            onChange={handleCommitChange}
          />
          <label htmlFor="floatingTextarea2">Comenta aqui..</label>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mb-4 mt-3" type="submit">
              Comentar Articulo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comentarios;
