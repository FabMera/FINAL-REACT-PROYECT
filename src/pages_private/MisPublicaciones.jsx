import React, { useContext } from "react";
import ListadoProductos from "../components_privates/ListadoProductos";
import PublicarForm from "../components_privates/PublicarForm";
import MiContext from "../Context/Micontext";

const MisPublicaciones = () => {

    const {publicacion,setPublicacion} = useContext(MiContext)
    const {datos,setDatos} = useContext(MiContext)

  return (
    <div style={{overflow:'hidden',height:'auto'}} className="container bg-light">
      <div className="row">
        <div className="col-12 col-md-6">
          <PublicarForm publicacion={publicacion} setPublicacion={setPublicacion} datos={datos}/>
        </div>
        <div className="col-12 col-md-6">
          <ListadoProductos publicacion={publicacion} setPublicacion={setPublicacion} setDatos={setDatos}/>
        </div>
      </div>
    </div>
  );
};

export default MisPublicaciones;
