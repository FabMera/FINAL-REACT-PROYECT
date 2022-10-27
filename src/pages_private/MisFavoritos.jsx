import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import MiContext from "../Context/Micontext";

const MisFavoritos = () => {
  const { publicacion, setPublicacion } = useContext(MiContext);
  const { user } = useAuth0();

  const clickDelete =(ele)=>{
    const favoritas = [...publicacion];
    const index = favoritas.findIndex((item) => item.id === ele.id);
    favoritas[index].favorito = !favoritas[index].favorito;
    setPublicacion(favoritas);
  }

  return (
    <>
      <div className="container bg-light">
        <h1 className="text-center mt-4">Mis Favoritos</h1>
        <div className="row">
          {publicacion
            .filter((ele) => ele.favorito)
            .map((ele) => (
              <div key={ele.id} className="col-12 col-md-4 ">
                <div
                  className="card mb-3 shadow-lg p-3 bg-body rounded"
                  style={{ width: "100%" }}
                >
                  <img src={ele.imagen} className="card-img-top" alt="foto" />
                  <div className="card-body">
                    <h5 className="card-title">{ele.tipo}</h5>
                    <p className="card-text">
                      <b>Estado del Producto: </b>
                      {ele.estado}
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: $ {ele.precio}</li>
                    <li className="list-group-item">
                      Categoria : {ele.categoria}
                    </li>
                    <li className="list-group-item">
                      Favorito :
                      <svg
                        width="40px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill={ele.favorito ? "red" : "#fe9393"}
                          d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <div className="card-body d-flex justify-content-between">
                    <button onClick={()=>clickDelete(ele)} className="btn btn-warning">Sacar de Favoritos</button>
                    <button className="btn btn-info">Comprar</button>
                  </div>
                  <div className="card-footer mt-2 ">
                    <small className="text-muted">
                      Publicado por :{user.name}..
                    </small>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MisFavoritos;