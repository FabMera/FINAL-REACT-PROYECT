import React from "react";

const TablaCarro = ({
  deleteItem,
  producto,
  incrementCount,
  decrementCount,
}) => {
  return (
    <tbody>
      <tr>
        <th scope="row">
          {producto.tipo}{" "}
          <img
            style={{ cursor: "pointer" }}
            className="d-flex mx-auto mt-2"
            src={producto.cover ? producto.cover : producto.imagen}
            alt="picfoto"
            width="35"
            height="30"
          ></img>{" "}
        </th>
        <td>US${producto.precio} </td>
        <td>
          <div className="mt-1">
            <button
              style={{ width: "20px", height: "20px",color:'white' }}
              className="btn btn-info p-0"
              onClick={() => incrementCount(producto)}
              disabled={producto.cantidades > producto.cantidad}
            >
              +
            </button>
            <span className="m-2">{producto.cantidades}</span>

            <button
              style={{ width: "20px", height: "20px",color:'white' }}
              disabled={producto.cantidades <= 0}
              className="btn btn-info p-0"
              onClick={() => decrementCount(producto)}
            > -
            </button>
            {producto.cantidades > producto.cantidad? (
              <p className="m-1"  style={{ color: "red", fontWeight: "bold" }}>*Excede el máximo de productos</p>
            ) : (
              ""
            )}
          </div>
        </td>
        <td>US$ :{producto.precio * producto.cantidades}</td>
        <td>
          {" "}
          <button
            onClick={() => deleteItem(producto.id)}
            className="btn btn-danger"
          >
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default TablaCarro;
