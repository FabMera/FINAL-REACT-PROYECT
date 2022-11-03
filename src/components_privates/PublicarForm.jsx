import { useContext } from "react";
import MiContext from "../Context/Micontext";
import Error from "./Error";

const PublicarForm = ({ error, handleSubmit }) => {
  const {
    tipo,
    precio,
    imagen,
    descrip,
    cantidad,
    setTipo,
    setCategoria,
    setEstado,
    setPrecio,
    setDescrip,
    setImagen,
    setCantidad,
    categories,
  } = useContext(MiContext);

  return (
    <>
      <h4 className="text-center mt-4">Publicar Nuevo Aviso</h4>

      <form
        onSubmit={handleSubmit}
        className="form-control mb-4 mt-4 shadow p-3  bg-body rounded"
      >
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
            id=""
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
          <select id=""
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
            Cantidad :
          </label>

          <input
            type="number"
            className="form-control"
            placeholder=""
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
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
            type="url"
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

        <input
          type="submit"
          className="btn btn-info w-100"
          value="Publicar Producto"
        />
        <input type="submit" className="btn btn-info w-100" value="editar" />
      </form>
    </>
  );
};

export default PublicarForm;
