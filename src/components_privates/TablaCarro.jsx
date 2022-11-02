import React from "react";

const TablaCarro = ({ deleteItem, producto, subTotal, handleCantidad }) => {



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
          <input
            className="d-flex form-control mx-auto "
            style={{ width: "55px", height: "35px" }}
            type="number"
            min="1"
            max={producto.cantidad}
            onChange=""
          />
        </td>
        <td></td>
        <td>
          {" "}
          <button
            onClick={() => deleteItem(producto.id)}
            className="btn btn-danger"
          >
            X
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default TablaCarro;
