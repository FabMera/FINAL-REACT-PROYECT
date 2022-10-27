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


function App() {


  const [productos, setProductos] = useState([]);
  const [publicacion,setPublicacion] = useState([])
  const [datos,setDatos] =useState({})
  const [categories, setCategories] = useState([]);

  const endpoint = "https://dummyjson.com/products?limit=10";

  const cargarProductos = async () => {
    const res = await axios.get(endpoint);
    const info = res.data.products;
    //console.log(info)

    const dataProductos = info.map((ele) => ({
      id: ele.id,
      descrip: ele.description,
      categoria: ele.category,
      imagen: ele.thumbnail,
      tipo: ele.title,
      precio: ele.price,
    }));
    setProductos(dataProductos);
  };

  useEffect(() => {
    cargarProductos();
  }, []);



  return (
    <>
      <Micontext.Provider value={{ productos, setProductos,publicacion,setPublicacion,datos,setDatos,categories,setCategories }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<InicioSesion />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/mispublicaciones" element={<MisPublicaciones />} />
            <Route path="/galeria" element={<GaleriaGeneral />} />
            <Route path="/miperfil" element={<Miperfil />} />
            <Route path="/favoritos" element={<MisFavoritos/>}/>
            <Route path="/producto/:id" element={<DetalleProducto />} />
          </Routes>
        </BrowserRouter>
      </Micontext.Provider>
    </>
  );
}

export default App;
