import React from 'react'

const Buscador = ({search,handleInput}) => {
  return (
    <form className="d-flex mb-3 p-3">
    <input
      value={search}
      onChange={handleInput}
      type="search"
      placeholder="Busca por tipo o nombre del producto"
      className="form-control me-2"
    />
  
  </form>
  )
}

export default Buscador