const Cards = ({ product, onClickHeart, irAlDetalle, addProduct, user }) => {
    
  return (
    <>
      <div className="col-8 col-md-4 col-sm-6 col-lg-4 col-xl-3 mx-auto mt-3 ">
        <div  className="card  shadow-lg p-3 bg-body rounded-5 h-100 ">
          <img style={{width:'180px',height:'220px'}} src={product.imagen} className="card-img-top w-100" alt="foto" />
          <div className="card-body">
            <h6 className="card-title">{product.tipo}</h6>
            <p className="card-text">
              <b>Estado del Producto: </b>
              {product.estado}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Precio: US$ {product.precio}</li>
            <li className="list-group-item">Categoria : {product.categoria}</li>
            <li className="list-group-item">
              Favorito :
              <svg
                style={{ cursor: "pointer" }}
                onClick={() => onClickHeart(product)}
                width="40px"
                viewBox="0 0 24 24"
              >
                <path
                  fill={product.favorito ? "red" : "#fe9393"}
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                />
              </svg>
            </li>
          </ul>
          <div className="card-body d-flex justify-content-between">
            <button
              onClick={() => irAlDetalle(product.id)}
              className="btn btn-warning"
            >
              Ver Detalle
            </button>
            <button
              onClick={() => addProduct(product)}
              className="btn btn-info"
            >
              Comprar
            </button>
          </div>
          <div className="card-footer mt-2 ">
            <small className="text-muted">Publicado por :{user.name}..</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
