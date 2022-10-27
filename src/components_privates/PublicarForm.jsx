import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import MiContext from "../Context/Micontext";
import Error from "./Error";

const PublicarForm = () => {
  const { productos, setProductos, publicacion, setPublicacion, datos,categories,setCategories } =
    useContext(MiContext);

  
  const [tipo, setTipo] = useState("");
  const [categoria, setCategoria] = useState([]);
  const [estado, setEstado] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [descrip, setDescrip] = useState("");
  const [favorito, setFavorito] = useState(false);

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //validamos formulario
    if ([tipo, categoria, estado, precio, descrip].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    const objProducto = {
      tipo,
      categoria,
      estado,
      precio,
      imagen,
      descrip,
      favorito,
      id: generarId(),
    };

    setProductos([...productos, objProducto]); //Producto de la API + producto formulario;
    setPublicacion([...publicacion,objProducto]); //Solo producto agregado desde el formulario;

    setTipo("")
    setCategoria("")
    setEstado("")
    setPrecio("")
    setImagen("")
    setDescrip("")

  };

  //Generamos un id aleatorio para el nuevo producto que agregamos
  const generarId = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return fecha + random;
  };

  //funcion para el SELECT de Categorias
  const url = "https://dummyjson.com/products/categories";
  const cargarCategories = async () => {
    const res = await axios.get(url);
    const info = res.data;
    setCategories(info);
  };

  useEffect(() => {
    cargarCategories();
  }, []);


  useEffect(() => {
    if (Object.keys(publicacion).length > 0) {
      setTipo(publicacion.tipo);
    }
  }, [publicacion]);


  return (
    <>
      <h4 className="text-center mt-4">Publicar Nuevo Aviso</h4>

      <form onSubmit={handleSubmit} className="form-control mb-4 mt-4 shadow p-3  bg-body rounded">
        {error && <Error>*Todos los campos son necesarios</Error>}

        <div className="mb-5">
          <label className="form-label">Tipo de Producto:</label>

          <input
            className="form-control"
            type="text"
            placeholder="Tipo de Producto (ej;smartphone,tv,ps5)"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="form-label">Categoria de Producto:</label>
          <select
            onChange={(e) => setCategoria(e.target.value)}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="">---Elige una Categoria---</option>
            {categories.map((ele) => (
              <option key={ele} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-5">
          <label className="form-label">Estado de tu Producto:</label>
          <select
            onChange={(e) => setEstado(e.target.value)}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="">---Selecciona estado---</option>
            <option value="nuevo">Nuevo</option>
            <option value="usado">Usado</option>
          </select>
        </div>

        <div className="mb-5">
          <label //for o htmlfor en react es para asociar un elemento con algo
            htmlFor=""
            className="form-label"
          >
            Precio $
          </label>

          <input
            type="number"
            className="form-control"
            placeholder=""
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label //for o htmlfor en react es para asociar un elemento con algo
            htmlFor=""
            className="form-label"
          >
            Sube una imagen:
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Ingresa la URL: debe ser formato imagen PNG,IMG,"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label //for o htmlfor en react es para asociar un elemento con algo
            htmlFor=""
            className="form-label"
          >
            Describe tu Producto
          </label>

          <textarea
            id="sintomas"
            className="form-control"
            placeholder="Ej caracteristicas,estado,tiempo de uso."
            value={descrip}
            onChange={(e) => setDescrip(e.target.value)}
          />
        </div>
        <input type="submit" className="btn btn-success" value="Publicar" />
      </form>
    </>
  );
};

export default PublicarForm;
