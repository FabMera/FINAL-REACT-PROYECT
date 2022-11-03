import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MiContext from "../Context/Micontext";

const DetalleProducto = () => {
  const { publicacion, setPublicacion } = useContext(MiContext);
  const { id } = useParams();
  const { user } = useAuth0();

  const onClickHeart = (ele) => {
    const favoritas = [...publicacion];
    const index = favoritas.findIndex((item) => item.id === ele.id);
    favoritas[index].favorito = !favoritas[index].favorito;
    setPublicacion(favoritas);
  };

  return (
    <>
      <h3 className="text-center mt-3">Detalle de tu Producto</h3>
      <div
        className="card mb-3 d-flex align-items-center mt-5 mx-auto shadow bg-white rounded-5 "
        style={{ width: "60%" }}
      >
        {publicacion
          .filter((item) => item.id === id)

          .map((item) => (
            <div key={item.id} className="row g-2 mt-5 p-2">
              <div className="col-md-4">
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
                      <span>Vendido por :{user.name}</span>
                    </li>
                    <li className="list-group-item">
                      Descripcion: {item.descrip}
                    </li>
                    <li className="list-group-item">
                      <span>Cantidades disponibles:{item.cantidad}</span>
                    </li>
                    <li className="list-group-item">
                      Marcar como Favorito:
                      <svg
                        style={{ cursor: "pointer" }}
                        onClick={() => onClickHeart(item)}
                        width="40px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill={item.favorito ? "red" : "#fe9393"}
                          d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <h3 className="m-3">
                    $<span>{item.precio}</span>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <Link to="/galeria">
                      <button className="btn btn-info ">Regresar</button>
                    </Link>
                    <Link to="">
                      <button className="btn btn-danger">Añadir</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default DetalleProducto;
