import React, { useContext } from "react";
import TablaCarro from "../components_privates/TablaCarro";

import MiContext from "../Context/Micontext";

const Carrito = () => {
  const { carroCompra, total, setTotal, setCarroCompra } =
    useContext(MiContext);

  //funcion total del Carrito
  const totalCarrito = () => {
    setTotal(
      carroCompra.reduce(
        (acc, producto) => acc + producto.precio * producto.cantidades,
        0
      )
    );
  };

  //funcion para eliminar producto del CARRITO
  const deleteItem = (id) => {
    const productoCarroCompra = carroCompra.filter((item) => item.id !== id);
    setCarroCompra(productoCarroCompra);
  };

  //funcion para aumentar el contador del carrito
  const incrementCount = (producto) => {
    const index = carroCompra.findIndex((ele) => ele.id === producto.id);
    carroCompra[index].cantidades += 1;
    carroCompra[index].cantidad -= 1;
    setCarroCompra([...carroCompra]);
    console.log(carroCompra);
  };
  //funcion para disminuir el contador del carrito
  const decrementCount = (producto) => {
    const index = carroCompra.findIndex((ele) => ele.id === producto.id);
    carroCompra[index].cantidades -= 1;
    carroCompra[index].cantidad += 1;
    setCarroCompra([...carroCompra]);
  };

  return (
    <>
      <div className="container bg-light">
        <div className="row">
          <div className="col text-center">
            {carroCompra && carroCompra.length ? (
              <>
                <h3 className="text-center m-4 p-3">Productos del Carrito</h3>
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
                      <th scope="col">Eliminar</th>
                    </tr>
                  </thead>
                  {carroCompra.map((producto) => (
                    <TablaCarro
                      key={producto}
                      producto={producto}
                      deleteItem={deleteItem}
                      incrementCount={incrementCount}
                      decrementCount={decrementCount}
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
                          {totalCarrito()}
                        </span>
                      </p>
                    </div>

                    <button className="btn btn-success mb-3">Ir a Pagar</button>
                  </div>
                </li>
              </>
            ) : (
              <h3 className="text-center mt-5 p-3">
                Carrito <span style={{ color: "red" }}>Vacio</span>
              </h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrito;
