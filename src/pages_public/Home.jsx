import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import CardsMasComprado from "../components_public/CardsMasComprado";
import Carrousel from "../components_public/Carrousel";
import Categorias from "../components_public/Categorias";
import MiContext from "../Context/Micontext";

const Home = () => {
  const { productos } = useContext(MiContext);

  return (
    <>
      <div className="container bg-light">
        <div className="row">
          <div className="col-12 col-md-8  mx-auto">
            <Carrousel />
          </div>
        </div>
        <div className="row">
          <div className="col-3 border">CATEGORIAS</div>
          <div className="col-3 border">2</div>
          <div className="col-3 border">3</div>
          <div className="col-3 border">4</div>
        </div>
        <div className="row">
          {productos.map((product) => (
            <CardsMasComprado product={product} />
          ))}
        </div>

        <div className="row">
          <div className="col-12 border">FOOTER</div>
        </div>
        <Categorias />
      </div>
    </>
  );
};

export default Home;
