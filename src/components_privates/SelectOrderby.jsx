import React from 'react'

const SelectOrderby = ({handleSelectPrecio}) => {

  return (
    <div className="mb-3  p-3">
      <select
        className="form-select"
        onChange={handleSelectPrecio}
        aria-label="Default select example"
      >
        <option value="">--Listar por Precio--</option>
        <option value="mayoramenor">Ordenar Precio $ de Mayor a Menor: </option>
        <option value="menoramayor">Ordenar Precio $ de Menor a Mayor:</option>
      </select>
      <div className="d-flex justify-content-center">
        <button className="btn btn-info m-3 " onClick="">
          Buscar
        </button>
        </div>
    </div>
  )
}

export default SelectOrderby