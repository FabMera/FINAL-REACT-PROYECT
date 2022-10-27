import React from 'react'

const SelectOrderby = ({select,handleSelect}) => {
    
  return (
    <div className="mb-3  p-3">
      <select
        className="form-select"
        value={select}
        onChange={handleSelect}
      >
        <option value="">Selecciona una opcion</option>
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