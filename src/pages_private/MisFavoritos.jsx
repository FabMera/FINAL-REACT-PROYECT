import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import MiContext from "../Context/Micontext";

const MisFavoritos = () => {
  const {
    publicacion,
    setPublicacion,
    carroCompra,
    setCarroCompra,
    isAuth,
    users,
    productos,
    setProductos
  } = useContext(MiContext);
  const { user } = useAuth0();

  /* Funcion para borrar de publicaciones */
  const clickDelete = (ele) => {
    const favoritas = [...publicacion];
    const index = favoritas.findIndex((item) => item.id === ele.id);
    favoritas[index].favorito = !favoritas[index].favorito;
    setPublicacion(favoritas);
  };
  /* funcion para agregar al carrito desde favoritos */
  const addProductPublic = (ele) => {
    const carrito = [...publicacion];
    const resultado = carrito.find((item) => item.id === ele.id);
    setCarroCompra([...carroCompra, resultado]);
    console.log(resultado);
    console.log(carroCompra);
  };
  /* elimina de favoritos los productos */
  const clickDeleteProd = (ele) => {
    const favoritas = [...productos];
    const index = favoritas.findIndex((item) => item.id === ele.id);
    favoritas[index].favorito = !favoritas[index].favorito;
    setProductos(favoritas);
  };
  /* Agrega productos al carrito de los productos */
  const addProduct = (ele) => {
    const carrito = [...productos];
    const resultado = carrito.find((item) => item.id === ele.id);
    setCarroCompra([...carroCompra, resultado]);

  };

  return (
    <>
      <div className="container bg-light">
        <h1 className="text-center mt-4 p-5">Mis Favoritos</h1>
        <p className="text-center"><em>Aqui puedes agregar tus productos favoritos..</em></p>
        <div className="d-flex justify-content-center ">
          <img
            alt=""
            className="favorito-img rounded-circle shadow"
            src="https://st.depositphotos.com/2229436/2404/v/450/depositphotos_24043161-stock-illustration-yellow-heart-favorite-web-2.jpg"
          />
        </div>
        <div className="row">
          {publicacion
            .filter((ele) => ele.favorito)
            .map((ele) => (
              <div
                key={ele.id}
                className="col-8 col-md-4 col-sm-6 col-lg-4 col-xl-3  "
              >
                <div className="card shadow-lg mx-auto rounded-5  ">
                  <img
                    style={{ width: "100%", height: "180px" }}
                    src={ele.cover ? ele.cover : ele.imagen}
                    className="img-fluid"
                    alt="foto"
                  />
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
                      Favorito :
                      <svg width="40px" viewBox="0 0 24 24">
                        <path
                          fill={ele.favorito ? "red" : "#fe9393"}
                          d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <div className="card-body d-flex flex-column mx-auto p-0 w-75 ">
                    <button
                      onClick={() => clickDelete(ele)}
                      className="btn btn-warning btn-sm mt-3"
                    >
                      Eliminar de Favoritos
                    </button>
                    <button
                      onClick={() => addProductPublic(ele)}
                      className="btn btn-info btn-sm  mt-3"
                    >
                      Comprar
                    </button>
                  </div>
                  <div className="card-footer mt-2 ">
                    <small className="text-muted">
                      Publicado por :
                      {isAuth ? users.map((item) => item.firstName) : user.name}
                    </small>
                  </div>
                </div>
              </div>
            ))}
            {/* publicaciones del usuario y productos se muestran aqui en favoritos */}
            {productos
            .filter((ele) => ele.favorito)
            .map((ele) => (
              <div
                key={ele.id}
                className="col-8 col-md-4 col-sm-6 col-lg-4 col-xl-3  "
              >
                <div className="card shadow-lg mx-auto rounded-5  ">
                  <img
                    style={{ width: "100%", height: "180px" }}
                    src={ele.cover ? ele.cover : ele.imagen}
                    className="img-fluid"
                    alt="foto"
                  />
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
                      Favorito :
                      <svg width="40px" viewBox="0 0 24 24">
                        <path
                          fill={ele.favorito ? "red" : "#fe9393"}
                          d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                        />
                      </svg>
                    </li>
                  </ul>
                  <div className="card-body d-flex flex-column mx-auto p-0 w-75 ">
                    <button
                      onClick={() => clickDeleteProd(ele)}
                      className="btn btn-warning btn-sm mt-3"
                    >
                      Eliminar de Favoritos
                    </button>
                    <button
                      onClick={() => addProduct(ele)}
                      className="btn btn-info btn-sm  mt-3"
                    >
                      Comprar
                    </button>
                  </div>
                  <div className="card-footer mt-2 ">
                    <small className="text-muted">
                      Publicado por :
                      {isAuth ? users.map((item) => item.firstName) : user.name}
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
