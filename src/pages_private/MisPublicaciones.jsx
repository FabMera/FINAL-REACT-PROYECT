import React, { useContext, useEffect } from "react";
import ListadoProductos from "../components_privates/ListadoProductos";
import PublicarForm from "../components_privates/PublicarForm";
import MiContext from "../Context/Micontext";
import Swal from "sweetalert2";

const MisPublicaciones = () => {
  const {
    tipo,
    categoria,
    estado,
    precio,
    imagen,
    descrip,
    cantidad,
    publicacion,
    setPublicacion,
    setTipo,
    setCategoria,
    setEstado,
    setPrecio,
    setDescrip,
    setImagen,
    setCantidad,
    setModoEdicion,
  } = useContext(MiContext);

  //funcion eliminar producto de mis publicaciones
  const deleteItem = (id) => {
    const product = publicacion.filter((ele) => ele.id !== id);
    setPublicacion(product);
    Swal.fire({
      title: `Eliminastes un producto de tu Lista`,
      text: "Eliminado",
      icon: "warning",
    });
  };

  const edit = (id) => {
  
    const temp = [...publicacion];
    const elemento = temp.find((ele) =>ele.id === id);
    setTipo(elemento.tipo)
    setCategoria(elemento.categoria)
    setEstado(elemento.estado)
    setPrecio(elemento.precio)
    setImagen(elemento.imagen)
    setDescrip(elemento.descrip)
    setCantidad(elemento.cantidad)
    setPublicacion(temp)
    setModoEdicion(true);
  };

  const edicion = () => {
   
    const editado = publicacion.map((item) =>
      item.id === tipo
        ? { tipo, categoria, estado, precio, imagen, descrip, cantidad }
        : item
    );
    console.log(editado)
    setPublicacion(editado);
    setModoEdicion(false);
    setTipo("");
    setCategoria("");
    setEstado("");
    setPrecio("");
    setImagen("");
    setDescrip("");
    setCantidad("");
  };

  return (
    <div
      style={{ overflow: "hidden", height: "auto" }}
      className="container bg-light"
    >
      <div className="row">
        <div className="col-12 col-md-6">
          <PublicarForm
            publicacion={publicacion}
            setPublicacion={setPublicacion}
            edicion={edicion}
          />
        </div>
        <div className="col-12 col-md-6">
          <ListadoProductos
            publicacion={publicacion}
            setPublicacion={setPublicacion}
            edit={edit}
            deleteItem={deleteItem}
          />
        </div>
      </div>
    </div>
  );
};

export default MisPublicaciones;
