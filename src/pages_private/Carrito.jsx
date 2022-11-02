import React, { useContext, useState } from "react";
import TablaCarro from "../components_privates/TablaCarro";

import MiContext from "../Context/Micontext";

const Carrito = () => {
  const { carroCompra, total, setTotal, publicacion, setCarroCompra } =
    useContext(MiContext);

  const [cantidad, setCantidad] = useState(0);

  /*   const totalCarrito = () => {
    setTotal(
      carroCompra.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    );
  }; */

  const incrementCount = () => {};
  const decrementCount = () => {};
  
//funcion para eliminar producto del CARRITO
  const deleteItem = (id) => {
    const productoCarroCompra = carroCompra.filter((item) => item.id !== id);
    setCarroCompra(productoCarroCompra);
  };

/*   const subTotal = (producto) => {
    return producto.precio*2;
  }; */
/*   const handleCantidad = (e,producto) => {
    const resultado=e.target.value*producto.precio;
    return resultado;
  }; */

  return (
    <>
      <div className="container bg-light">
        <div className="row">
          <div className="col text-center">
            {carroCompra && carroCompra.length ? (
              <h3 className="text-center m-4">Productos del Carrito</h3>
            ) : (
              <h3 className="text-center m-4">No exiten Productos!</h3>
            )}

            <table
              style={{ cursor: "pointer" }}
              className="table table-hover shadow"
            >
              <thead>
                <tr>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              {carroCompra.map((producto) => (
                <TablaCarro
                  key={producto}
                  producto={producto}
                  deleteItem={deleteItem}
                  handleCantidad=""
                  subTotal=""
                />
              ))}
            </table>

            <li className="list-group-item d-flex justify-content-end">
              <div className="ms-1 me-auto ">
                <div className="fw-bold h4">
                  <p className="mx-2 ">
                    Total:{" "}
                    <span>
                      ${total}
                      {/* {totalCarrito()} */}
                    </span>
                  </p>
                </div>
                <button className="btn btn-success">Ir a Pagar</button>
              </div>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrito;
