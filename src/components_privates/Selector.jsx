import React, { useContext } from "react";
import MiContext from "../Context/Micontext";

const Selector = ({ handleChangeSelect }) => {
  const { categories } = useContext(MiContext);

  return (
    <div className="mb-3  p-3 ">
      <p className="p-search">Utiliza la busqueda por Categorias</p>
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
    </div>
  );
};

export default Selector;
