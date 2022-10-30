import React, { useContext, useEffect } from "react";

import MiContext from "../Context/Micontext";

const Carrito = () => {
  const { carroCompra, total, setTotal, publicacion, setCarroCompra } =
    useContext(MiContext);

  /*   const totalCarrito = () => {
    setTotal(
      carroCompra.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    );
  }; */

  const incrementCount = () => {};
  const decrementCount = () => {};

  useEffect(() => {
    const filtradoCarrito =publicacion.filter((ele) => ele.add);
    setCarroCompra(filtradoCarrito);
    console.log(filtradoCarrito)
  },[]);



  const deleteItem = (id) => {
    const product = carroCompra.filter((item) => item.id !== id);
    setCarroCompra(product);
    console.log(product)
  };

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
                </tr>
              </thead>

              {carroCompra.map((ele) => (
                <tbody>
                  <tr>
                    <th scope="row">{ele.tipo}</th>
                    <div><button onClick={()=>deleteItem(ele.id)} className="btn btn-danger">X</button></div>
                    <td>{ele.precio}</td>
                    <td>
                      {" "}
                      <div className="flex justify-between">
                        <button
                          className="btn btn-primary"
                          onClick={() => incrementCount(ele)}
                        >
                          ✚
                        </button>
                        <span className="m-3"></span>
                        <button
                          disabled={ele.cantidad <= 0}
                          className="btn btn-danger"
                          onClick={() => decrementCount(ele)}
                        >
                          ‒
                        </button>
                      </div>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
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
