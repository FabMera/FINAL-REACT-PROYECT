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
            src={producto.imagen}
            alt="picfoto"
            width="35"
            height="30"
          ></img>{" "}
        </th>
        <td>US${producto.precio} </td>
        <td>
          <div className="mt-1">
            <button
              style={{ width: "30px", height: "30px" }}
              className="btn btn-success "
              onClick={() => incrementCount(producto)}
              disabled={producto.cantidades > producto.cantidad}
            >
              +
            </button>
            <span className="m-2">{producto.cantidades}</span>

            <button
              style={{ width: "30px", height: "30px" }}
              disabled={producto.cantidades <= 0}
              className="btn btn-info"
              onClick={() => decrementCount(producto)}
            >
              -
            </button>
            {producto.cantidades > producto.cantidad? (
              <p className="m-1"  style={{ color: "red", fontWeight: "bold" }}>*Sin Stock</p>
            ) : (
              ""
            )}
          </div>
        </td>
        <td>{producto.precio * producto.cantidades}</td>
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
