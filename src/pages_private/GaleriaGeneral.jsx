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
  //---------------------------Estados para el input de busqueda y selectores----------//
  const [search, setSearch] = useState(""); //Estado de la busqueda por includes.
  const [busqueda, setBusqueda] = useState([{}]); //muestra los resultados de search
  const [select, setSelect] = useState(""); //Estado del select de categorias
  const [selectBusqueda, setSelectBusqueda] = useState([{}]); //muestra los resultados del Select por Categoria
  const [selectprecio, setSelectPrecio] = useState(""); //Estado del select por precio
  const [errorBusqueda, setErrorBusqueda] = useState(false);
  const [errorBusquedaCat,setErrorBusquedaCat]=useState(false)
  //-----------------------------------CONTEXTOS----------------------------------------//
  const {
    isAuth,
    publicacion,
    setPublicacion,
    carroCompra,
    setCarroCompra,
    setCategories,
  } = useContext(MiContext);

  //------------------Funcion axios para llamar a la api y cargar categorias------------------//
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
  //------------------------------------fin ----------------------------------------------//
  //-------------------------funciones autenticacion y navigate por id------------------//
  const { user } = useAuth0();
  const navigate = useNavigate();

  const irAlDetalle = (id) => {
    navigate(`/producto/${id}`);
  };
  //------------------------------------fin ---------------------------------------------------//

  //---------------------------funcion  para favoritos----------------------------------------//
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
  //------------------------------------fin ---------------------------------------------------//

  const handleInput = (e) => {
    setSearch(e.target.value);
    searchProducto(e.target.value);
  };
  //----------------------funcion para busqueda en el input-------------------------------//
  const searchProducto = (buscar) => {
    const results = publicacion.filter((valor) => {
      if (valor.tipo.toLowerCase().includes(buscar.toLocaleLowerCase())) {
        setErrorBusqueda(false);
        return valor;
      } else {
        setErrorBusqueda(true);
      }
    });
    setBusqueda(results);
    console.log(errorBusqueda);
  };
  //------------------------------------fin ---------------------------------------------//

  //------------------funciones de orden por precio-------------------------------------//
  const comparamenor = (a, b) => {
    if (parseInt(a.precio) === parseInt(b.precio)) {
      return 0;
    } else if (parseInt(a.precio) > parseInt(b.precio)) {
      return -1;
    }
    return 1;
  };

  const comparamayor = (a, b) => {
    if (parseInt(a.precio) === parseInt(b.precio)) {
      return 0;
    } else if (parseInt(a.precio) > parseInt(b.precio)) {
      return 1;
    }
    return -1;
  };
  const renderSelect = (selectprecio) => {
    if (selectprecio === "mayoramenor") {
      return setPublicacion(publicacion.sort(comparamayor));
    } else if (selectprecio === "menoramayor") {
      return setPublicacion(publicacion.sort(comparamenor));
    }
  };

  const handleSelectPrecio = (e) => {
    setSelectPrecio(e.target.value);
    renderSelect(selectprecio);
  };
  //------------------------------------fin -------------------------------------------//
  const handleChangeSelect = (e) => {
    setSelect(e.target.value);
    categoriasresult(e.target.value);
  };

  //-----------------------funcion para busqueda por categorias----------------------//
  const categoriasresult = (select) => {
    const filterporCat = publicacion.filter((valor) => {
      if (valor.categoria === select) {
        setErrorBusquedaCat(false)
        return valor;
      }else{
        setErrorBusquedaCat(true)
      }
    });
    setSelectBusqueda(filterporCat);
  };
  //------------------------------------fin ------------------------------------------//

  //-----------------------funcion para agregar producto al carrito------------------//
  const addProduct = (product) => {
    const carrito = [...publicacion];
    const resultado = carrito.find((item) => item.id === product.id);
    setCarroCompra([...carroCompra, resultado]);
    console.log(resultado);
    console.log(carroCompra);
  };
  //--------------funcion para limitar la busqueda por input y select----------------//
  const busquedaTotal = () => {
    if (search === "" && select === "") {
      return publicacion.map((product) => (
        <Cards
          key={product.id}
          product={product}
          isAuth={isAuth}
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
          isAuth={isAuth}
          addProduct={addProduct}
          irAlDetalle={irAlDetalle}
        />
      ));
    } else if (search !== "" && select === "") {
      return busqueda.map((product) => (
        <Cards
          key={product.id}
          product={product}
          isAuth={isAuth}
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
        <h1 className="text-center mt-4 p-5">Galeria Publicaciones</h1>
        <div className="row">
          <div className="col-12 col-md-4">
            <Buscador search={search} handleInput={handleInput} />
            {errorBusqueda && (
              <Error>*No hay resultados para su busqueda</Error>
            )}
          </div>

          <div className="col-12 col-md-4">
            <Selector handleChangeSelect={handleChangeSelect} />
            {errorBusquedaCat && (
              <Error>*No existen productos de esta categoria!</Error>
            )}
          </div>
          <div className="col-12 col-md-4">
            <SelectOrderby handleSelectPrecio={handleSelectPrecio} />
          </div>
        </div>

        <div className="row">{busquedaTotal()}</div>
      </div>
    </>
  );
};

export default GaleriaGeneral;
