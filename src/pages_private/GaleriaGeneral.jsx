import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Buscador from "../components_privates/Buscador";
import Cards from "../components_privates/Cards";
import Selector from "../components_privates/Selector";
import SelectOrderby from "../components_privates/SelectOrderby";
import MiContext from "../Context/Micontext";
import Error from "../components_privates/Error";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";

const GaleriaGeneral = () => {
  const [search, setSearch] = useState("");
  const [busqueda, setBusqueda] = useState([{}]);
  const [select, setSelect] = useState("");
  const [selectBusqueda, setSelectBusqueda] = useState([{}]);

  const [errorBusqueda, setErrorBusqueda] = useState(false);
  const {
    publicacion,
    setPublicacion,
    carroCompra,
    setCarroCompra,
    setCategories,
  } = useContext(MiContext);

  const { user } = useAuth0();
  const navigate = useNavigate();

  const irAlDetalle = (id) => {
    navigate(`/producto/${id}`);
  };
//FUNCION para favoritos
  const onClickHeart = (product) => {
    const favoritas = [...publicacion];
    const index = favoritas.findIndex((item) => item.id === product.id);
    favoritas[index].favorito = !favoritas[index].favorito;
    setPublicacion(favoritas);
    if (favoritas[index].favorito) {
      return Swal.fire({
        title: "!Perfecto!",
        text: "Agregado a Favoritos",
        icon: "success",
      });
    }
  };

  const url = "https://dummyjson.com/products/categories";

  const cargarCategories = async () => {
    try {
      const res = await axios.get(url);
      const info = res.data;
      setCategories(info);
    } catch (error) {
      console.log("error conexion" + error);
    }
  };

  useEffect(() => {
    cargarCategories();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
    searchProducto(e.target.value);
  };
//funcion para busqueda en el input
  const searchProducto = (buscar) => {
    const results = publicacion.filter((valor) => {
      if (valor.tipo.toLowerCase().includes(buscar.toLocaleLowerCase())) {
        return valor;
      } else {
        return setErrorBusqueda(true);
      }
    });
    setBusqueda(results);
    setErrorBusqueda(false);
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
//funcion para busqueda por categorias
  const categoriasresult = (select) => {
    const filterporCat = publicacion.filter((valor) => {
      if (valor.categoria === select) {
        return valor;
      }
    });
    setSelectBusqueda(filterporCat);
  };
//funcion para agregar producto al carrito
  const addProduct = (product) => {
    const carrito = [...publicacion];
    const resultado = carrito.find((item) => item.id === product.id);
    setCarroCompra([...carroCompra, resultado]);
    console.log(resultado);
    console.log(carroCompra);
  };
//funcion para limitar la busqueda por input y select
  const busquedaTotal = () => {
    if (search === "" && select === "") {
      return publicacion.map((product) => (
        <Cards
          key={product.id}
          product={product}
          onClickHeart={onClickHeart}
          user={user}
          addProduct={addProduct}
          irAlDetalle={irAlDetalle}
        />
      ));
    } else if (search === "" && select !== "") {
      return selectBusqueda.map((product) => (
        <Cards
          key={product.id}
          product={product}
          onClickHeart={onClickHeart}
          user={user}
          addProduct={addProduct}
          irAlDetalle={irAlDetalle}
        />
      ));
    } else if (search !== "" && select === "") {
      return busqueda.map((product) => (
        <Cards
          key={product.id}
          product={product}
          onClickHeart={onClickHeart}
          user={user}
          addProduct={addProduct}
          irAlDetalle={irAlDetalle}
        />
      ));
    }
  };

  return (
    <>
      <div className="container bg-light">
        <h1 className="text-center mt-4">Galeria Publicaciones</h1>
        <div className="row">
          <div className="col-12 col-md-4">
            <Buscador search={search} handleInput={handleInput} />
            {errorBusqueda && (
              <Error>*No hay resultados para su busqueda</Error>
            )}
          </div>

          <div className="col-12 col-md-4">
            <Selector handleChangeSelect={handleChangeSelect} />
          </div>
          <div className="col-12 col-md-4">
            <SelectOrderby select="" handleInput="" />
          </div>
        </div>

        <div className="row">{busquedaTotal()}</div>
      </div>
    </>
  );
};

export default GaleriaGeneral;
