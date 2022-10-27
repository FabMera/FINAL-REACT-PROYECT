import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import MiContext from "../Context/Micontext";

const ListadoProductos = () => {
  const { publicacion, datos, setDatos, setPublicacion } =
    useContext(MiContext);

  const edit = (item) => {
    const elemento = publicacion.filter((ele) => ele.id === item.id);
    setDatos(elemento);
    console.log(elemento);
    
  };
 

  const deleteItem = (id) => {
    const product = publicacion.filter((ele) => ele.id !== id);
    setPublicacion(product);
    Swal.fire({
      title: `Eliminastes un producto de tu Lista!`,
      text: "Eliminado",
      icon: "warning",
    });
  };
//verificamos contenido del objeto
  useEffect(() => {
    if (Object.keys(publicacion).length > 0) {
      console.log("Producto Agregado");
    }else{
      console.log('Formulario Vacio')
    }
  }, [publicacion]);


  return (
    <div>
      {publicacion && publicacion.length ? (
        <>
          <h4 className=" text-center mt-2">Listado de Tus Productos</h4>
          <p className="text-center">
            Administras tus {""}
            <span style={{ fontWeight: "bold" }} className="text-danger">
              Productos
            </span>
          </p>
          {publicacion.map((item) => (
            <div key={item.id} className="m-2 p-3 shadow-lg  bg-body rounded">
              <p>Tipo de Producto:{item.tipo}</p>
              <p className="">Categoria:{item.categoria}</p>

              <p className="">Estado del Producto:{item.estado}</p>

              <p className="">Precio $:{item.precio}</p>
              <p className="">Descripcion de tu producto: {item.descrip}</p>
              <p className="">URL imagen producto: {item.imagen}</p>

              <div className="d-flex justify-content-between">
                <button
                  onClick={() => edit(item)}
                  className="btn btn-success"
                  type="button"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="btn btn-danger"
                  type="button"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <h4 className="text-center mt-3">No hay productos en tu Lista</h4>
          <p className="text-center">
            Comienza agregando Productos a tu lista{" "}
            <span className="text-danger">y apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoProductos;
