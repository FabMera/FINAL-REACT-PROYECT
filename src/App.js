import axios from "axios";
import Micontext from "./Context/Micontext";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components_public/NavBar";
import GaleriaGeneral from "./pages_private/GaleriaGeneral";
import Miperfil from "./pages_private/Miperfil";
import MisPublicaciones from "./pages_private/MisPublicaciones";
import Home from "./pages_public/Home";
import InicioSesion from "./pages_public/InicioSesion";
import Registro from "./pages_public/Registro";
import MisFavoritos from "./pages_private/MisFavoritos";
import DetalleProducto from "./pages_private/DetalleProducto";
import Carrito from "./pages_private/Carrito";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "./components_privates/Spinner";

function App() {
  const { isAuthenticated } = useAuth0();
  const [productos, setProductos] = useState([]);
  const [publicacion, setPublicacion] = useState([]);
  const [categories, setCategories] = useState([]);
  const [total, setTotal] = useState(0);
  const [carroCompra, setCarroCompra] = useState([]);

  const [tipo, setTipo] = useState("");
  const [categoria, setCategoria] = useState([]);
  const [estado, setEstado] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [descrip, setDescrip] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [modoedicion, setModoEdicion] = useState(false);
  const { isLoading } = useAuth0();

  const endpoint = "https://dummyjson.com/products?limit=10";

  //api para mostrar productos en portada.
  const cargarProductos = async () => {
    try {
      const res = await axios.get(endpoint);
      const info = res.data.products;

      const dataProductos = info.map((ele) => ({
        id: ele.id,
        descrip: ele.description,
        categoria: ele.category,
        imagen: ele.thumbnail,
        tipo: ele.title,
        precio: ele.price,
        favorito: false,
      }));
      setProductos(dataProductos);
    } catch (error) {
      console.log("error conexion" + error);
    }
  };

  useEffect(() => {
    const obtenerDataLocal = () => {
      const publicacionLS =
        JSON.parse(localStorage.getItem("publicacion")) ?? [];
      setPublicacion(publicacionLS);
    };
    obtenerDataLocal();
  }, []);

  // solicito los datos a la local storage y los transformo

  useEffect(() => {
    localStorage.setItem("publicacion", JSON.stringify(publicacion));
  }, [publicacion]);
  useEffect(() => {
    cargarProductos();
    if (isLoading) {
      return <Spinner />;
    }
  }, []);

  return (
    <>
      <Micontext.Provider
        value={{
          productos,
          setProductos,
          publicacion,
          setPublicacion,
          categories,
          setCategories,
          total,
          setTotal,
          carroCompra,
          setCarroCompra,
          tipo,
          setTipo,
          categoria,
          setCategoria,
          estado,
          setEstado,
          precio,
          setPrecio,
          imagen,
          setImagen,
          descrip,
          setDescrip,
          cantidad,
          setCantidad,
          modoedicion,
          setModoEdicion,
        }}
      >
        <BrowserRouter>
          <NavBar />
          <Routes>
            {isAuthenticated ? (
              <>
                {" "}
                <Route
                  path="/mispublicaciones"
                  element={<MisPublicaciones />}
                />
                <Route path="/" element={<Home />} />
                <Route path="/galeria" element={<GaleriaGeneral />} />
                <Route path="/miperfil" element={<Miperfil />} />
                <Route path="/favoritos" element={<MisFavoritos />} />
                <Route path="/producto/:id" element={<DetalleProducto />} />
                <Route path="/carrito" element={<Carrito />} />
              </>
            ) : (
              <>
                {" "}
                <Route path="/" element={<Home />} />
                <Route path="/inicio" element={<InicioSesion />} />
                <Route path="/registro" element={<Registro />} />{" "}
              </>
            )}
          </Routes>
        </BrowserRouter>
      </Micontext.Provider>
    </>
  );
}

export default App;
