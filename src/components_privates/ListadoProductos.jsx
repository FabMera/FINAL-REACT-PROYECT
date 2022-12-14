import { useContext, useEffect, useState } from "react";
import MiContext from "../Context/Micontext";
import ModalForm from "./ModalForm";

const ListadoProductos = ({ deleteItem, edit }) => {
  const { publicacion, users } = useContext(MiContext);

  //verificamos contenido del objeto para comprobar el formulario
  useEffect(() => {
    if (Object.keys(publicacion).length > 0) {
      console.log("Producto Agregado");
    } else {
      console.log("Formulario Vacio");
    }
  }, []);

  const handleClickClose = () => {
    setModal(!modal);
  };
  const [modal, setModal] = useState(false);

  return (
    <>
      <h4 className=" text-center mt-5 p-2 m-2">Listado de Tus Productos</h4>
      <p className="text-center">
        Administras tus {""}
        <span style={{ fontWeight: "bold" }} className="text-danger">
          Productos
        </span>
      </p>
      {publicacion.map((item) => (
        <div key={item.id} className="m-2 p-3 mt-4 shadow-lg  bg-body rounded">
          <p>Tipo de Producto:{item.tipo}</p>
          <hr />
          <p className="">Categoria:{item.categoria}</p>
          <hr />
          <p className="">Estado del Producto:{item.estado}</p>
          <hr />
          <p className="">Precio US$:{item.precio}</p>
          <hr />
          <p className="">Unidades ofrecidas :{item.cantidad}</p>
          <hr />
          <p className="">Descripcion de tu producto: {item.descrip}</p>

          <div className="d-flex justify-content-between">
            <button
              onClick={() => {
                edit(item.id);
                handleClickClose();
              }}
              className="btn btn-success m-2 shadow"
              type="button"
            >
              <i class="fa-regular fa-pen-to-square m-2"></i>
              EDITAR
            </button>
            <ModalForm
              handleClickClose={handleClickClose}
              modal={modal}
              setModal={setModal}
            />
            <button
              onClick={() => deleteItem(item.id)}
              className="btn btn-danger m-2 shadow"
              type="button"
            >
              <i class="fa-regular fa-trash-can m-2"></i>
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListadoProductos;
