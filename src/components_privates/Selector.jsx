
import React, { useContext } from "react";
import MiContext from "../Context/Micontext";

const Selector = ({ handleChangeSelect }) => {
  const { categories } = useContext(MiContext);

  return (
    <div>
      <div className="mb-3  p-3 ">
        <select
          onChange={handleChangeSelect}
          className="form-select "
          aria-label="Default select example"
        >
          <option value="">--Busca por Categoria--</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div className="d-flex justify-content-center">
          <button className="btn btn-info m-3 " onClick="">
            seleccionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selector;
