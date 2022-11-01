import React from "react";

const TablaCarro = ({ deleteItem, producto,subTotal,handleCantidad }) => {



  return (
    <tbody>
      <tr>
        <th scope="row">{producto.tipo}</th>
        <td>{producto.precio}</td>
        <td>
          <input
            className="d-flex form-control mx-auto "
            style={{ width: "55px", height: "35px" }}
            type="number"
            onChange={handleCantidad}
          />
        </td>
        <td>{subTotal(handleCantidad,producto)}</td>
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
