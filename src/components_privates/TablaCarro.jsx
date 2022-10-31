import React from "react";

const TablaCarro = ({ deleteItem, producto }) => {
    
  return (
    <tbody>
      <tr>
        <th scope="row">{producto.tipo}</th>
        <div>
          <button
            onClick={() => deleteItem(producto.id)}
            className="btn btn-danger"
          >
            X
          </button>
        </div>
        <td>{producto.precio}</td>
        <td>
          {" "}
          <div className="flex justify-between">
            <div style={{ width: "30px", height: "30px" }} className="">
              <label className="form-label">cantidad</label>
              <input className="form-control" type="number"></input>
            </div>
          </div>
        </td>
        <td></td>
      </tr>
    </tbody>
  );
};

export default TablaCarro;
