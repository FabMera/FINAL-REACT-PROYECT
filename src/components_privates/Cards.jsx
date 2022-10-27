import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import MiContext from "../Context/Micontext";


const Cards = () => {
  const { publicacion, datos, setDatos, setPublicacion } =
    useContext(MiContext);
  const { user } = useAuth0();
  const navigate = useNavigate()

  const onClickHeart = (ele) => {
    const favoritas = [...publicacion];
    const index = favoritas.findIndex((item) => item.id === ele.id);
    favoritas[index].favorito = !favoritas[index].favorito;
    setPublicacion(favoritas);
    if (favoritas[index].favorito){
        return  Swal.fire({
            title: "!Perfecto!",
            text: "Agregado a Favoritos",
            icon: "success",
          });
    }
   
  };
  //funcion para acceder al parametro por id en la url
  const irAlDetalle=(id)=>{
    navigate(`/producto/${id}`);
}

  return (
    <>
      {/* {JSON.stringify(user)}  */}
      {publicacion.map((ele) => (
        <div className="col-12 col-md-4 col-sm-6 col-lg-4 col-xl-3 ">
          <div
            className="card mb-3 shadow-lg p-3 bg-body rounded"
            
          >
            <img  src={ele.imagen} className="card-img-top" alt="foto" />
            <div className="card-body">
              <h5 className="card-title">{ele.tipo}</h5>
              <p className="card-text">
                <b>Estado del Producto: </b>
                {ele.estado}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Precio: $ {ele.precio}</li>
              <li className="list-group-item">Categoria : {ele.categoria}</li>
              <li className="list-group-item">
                Favorito :
                <svg style={{cursor:'pointer'}} onClick={()=>onClickHeart(ele)} width="40px" viewBox="0 0 24 24">
                  <path
                    fill={ele.favorito ? "red" : "#fe9393"}
                    d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                  />
                </svg>
              </li>
            </ul>
            <div className="card-body d-flex justify-content-between">
              <button onClick={()=>irAlDetalle(ele.id)} className="btn btn-warning">Ver Detalle</button>
              <button className="btn btn-info">Comprar</button>
            </div>
            <div className="card-footer mt-2 ">
              <small className="text-muted">Publicado por :{user.name}..</small>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;