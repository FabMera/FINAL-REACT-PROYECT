const CardsMasComprado = ({ product }) => {
  const irAlDetalle = () => {};
  return (
    <>
      <div  className="col-12 col-md-6 col-sm-6 col-lg-4 col-xl-3 ">
        <div  className="card mb-3  p-3 bg-body rounded-5 border border-success p-2 border-opacity-10">
          <img src={product.imagen} className="card-img-top" alt="foto" />
          <div className="card-body">
            <h5 className="card-title">{product.tipo}</h5>
            <p className="card-text"></p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Precio: $ {product.precio}</li>
            <li className="list-group-item">Categoria : {product.categoria}</li>
          </ul>
          <div className="d-flex justify-content-center mt-2">
            <button
              onClick={() => irAlDetalle(product.id)}
              className="btn btn-warning "
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsMasComprado;
