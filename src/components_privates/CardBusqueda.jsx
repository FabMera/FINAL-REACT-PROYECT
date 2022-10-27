import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const CardBusqueda = ({ busqueda }) => {
  const { user } = useAuth0();
  return (
    <>
      {busqueda.map((item) => (
        <div className="col-12 col-md-4 ">
          <div key={item.id} className="card mb-3" style={{ width: "100%" }}>
            <img src={item.imagen} className="card-img-top" alt="foto" />
            <div className="card-body">
              <h5 className="card-title">{item.tipo}</h5>
              <p className="card-text">
                <b>Estado del Producto: </b>
                {item.estado}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Precio: $ {item.precio}</li>
              <li className="list-group-item">Categoria : {item.categoria}</li>
            </ul>
            <div className="card-body d-flex justify-content-between">
              <button className="btn btn-warning">Ver Detalle</button>
              <button className="btn btn-info">Comprar</button>
            </div>
            <div className="card-footer ">
              <small className="text-muted">Publicado por :{user.name}..</small>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardBusqueda;
