import React from "react";
import { Link } from "react-router-dom";

const DetalleCards = ({ item, user }) => {
  return (
    <>
      <div key={item.id} className="row p-2">
        <div className="col-8 col-md-6">
          <img
            src={item.imagen}
            className="img-fluid rounded-start"
            alt="producto"
          />
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title">{item.tipo}</h5>
            <hr />
            <p className="card-text"></p>
            <ul className="list-group list-group-flush">
              <b>Estado del Producto: </b>
              {item.estado}
              <li className="list-group-item">
                Vendido por :<span style={{ color: "blue" }}>{user.name}</span>
              </li>
              <li className="list-group-item">Descripcion: {item.descrip}</li>
              <li className="list-group-item">
                <span>Cantidades disponibles:{item.cantidad}</span>
              </li>
            </ul>
            <h3 className="m-3">
              $<span>{item.precio}</span>
            </h3>
            <div className="d-flex justify-content-between">
              <Link to="/galeria">
                <button className="btn btn-info ">
                  <i class="fa-solid fa-angles-left"></i>Regresar
                </button>
              </Link>
              <Link to="">
                <button className="btn btn-danger ">
                  <i className="m-1 fa-solid fa-cart-shopping"></i>Añadir
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleCards;
