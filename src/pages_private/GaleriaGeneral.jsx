import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Buscador from "../components_privates/Buscador";
import Cards from "../components_privates/Cards";
import Selector from "../components_privates/Selector";
import SelectOrderby from "../components_privates/SelectOrderby";
import MiContext from "../Context/Micontext";
import Error from "../components_privates/Error";
import CardBusqueda from "../components_privates/CardBusqueda";
import { Navigate, useNavigate } from "react-router-dom";

const GaleriaGeneral = () => {
  const { setCategories, publicacion,setPublicacion } = useContext(MiContext);
    
  const [search, setSearch] = useState("");
  const [busqueda, setBusqueda] = useState([{}]);
  const [select, setSelect] = useState("");
  const [errorBusqueda, setErrorBusqueda] = useState(false);

  const url = "https://dummyjson.com/products/categories";
  const cargarCategories = async () => {
    const res = await axios.get(url);
    const info = res.data;
    setCategories(info);
  };

  useEffect(() => {
    cargarCategories();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
    searchProducto(e.target.value);
  };



  const searchProducto = (buscar) => {
    const results = publicacion.filter((valor) => {
      if (valor.tipo.toLowerCase().includes(buscar.toLocaleLowerCase())) {
        return valor;
      } else {
        return setErrorBusqueda(true);
      }
      
    });
    setBusqueda(results);
    
  };


  const compara = (a, b) => {
    if (a.precio < b.precio) {
      return -1;
    } else if (a.precio > b.precio) {
      return 1;
    }
    return 0;
  };
  
  const handleChangeSelect = (e) => {
    setSelect(e.target.value);
    categoriasresult(e.target.value);
  };

  const categoriasresult = (select) => {
    const filterporCat = publicacion.filter((valor) => {
      if (valor.categoria === select) {
        return valor;
      }
    });
    setBusqueda(filterporCat);
  };


  return (
    <>
      <div className="container bg-light">
        <h1 className="text-center mt-4">Galeria Publicaciones</h1>
        <div className="row">
          <div className="col-12 col-md-4">
            <Buscador search={search} handleInput={handleInput} />
            {errorBusqueda && <Error>*No hay resultados para su busqueda</Error>}
          </div>
          
          <div className="col-12 col-md-4">
            <Selector handleChangeSelect={handleChangeSelect} />
          </div>
          <div className="col-12 col-md-4">
            <SelectOrderby select="" handleInput="" />
          </div>
        </div>

        <div className="row">
          {search === ""? (
            <Cards />
          ) : (
           <CardBusqueda busqueda={busqueda}/>
          )}
        </div>
        {select === ""? (
            ""
        ) : (
            <CardBusqueda busqueda={busqueda}/>
        )}
      </div>
    </>
  );
};

export default GaleriaGeneral;
