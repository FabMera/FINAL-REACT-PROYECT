import React, { useContext, useEffect, useState } from "react";
import ListadoProductos from "../components_privates/ListadoProductos";
import PublicarForm from "../components_privates/PublicarForm";
import MiContext from "../Context/Micontext";
import Swal from "sweetalert2";
import axios from "axios";
import ModalForm from "../components_privates/ModalForm";

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
    productos,
    setProductos,
    setCategories,
  } = useContext(MiContext);

  const [error, setError] = useState(false);
  const [modoedicion, setModoEdicion] = useState(false);
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
    const elemento = temp.find((ele) => ele.id === id);
    setTipo(elemento.tipo);
    setCategoria(elemento.categoria);
    setEstado(elemento.estado);
    setPrecio(elemento.precio);
    setImagen(elemento.imagen);
    setDescrip(elemento.descrip);
    setCantidad(elemento.cantidad);
    setPublicacion(temp);
    setModoEdicion(true);
    console.log(elemento);
  };

  const edicion = (id) => {
    edit();
    const editado = publicacion.map((item) =>
      item.id ===""
        ? { tipo, categoria, estado, precio, imagen, descrip, cantidad }
        : item
    );
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

  const handleSubmit = (e) => {
    e.preventDefault();
    //validamos formulario
    if ([tipo, categoria, estado, precio, descrip, cantidad].includes("")) {
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
      favorito: false,
      cantidad, //lo que publica el usuario,stock.
      cantidades:0, //valor inicial que una persona puede comprar e incrementa y decrementa.
      id: generarId(),
    };

    setProductos([...productos, objProducto]); //Producto de la API + producto formulario;
    setPublicacion([...publicacion, objProducto]); //Solo producto agregado desde el formulario;

    setTipo("");
    setCategoria("");
    setEstado("");
    setPrecio("");
    setImagen("");
    setDescrip("");
    setCantidad("");
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
    <div className="container bg-light">
      <div className="row">
        <div className="col-12 col-md-6">
          <PublicarForm
            error={error}
            handleSubmit={handleSubmit}
            edicion={edicion}
          />
        </div>
        <div className="col-12 col-md-6">
          {modoedicion ? <ModalForm /> : ""}
          <ListadoProductos deleteItem={deleteItem} edit={edit} />
        </div>
      </div>
    </div>
  );
};

export default MisPublicaciones;
