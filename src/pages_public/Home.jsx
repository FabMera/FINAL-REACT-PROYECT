import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

//import { Container } from "react-bootstrap";
import CardsMasComprado from "../components_public/CardsMasComprado";
import Carrousel from "../components_public/Carrousel";
import Categorias from "../components_public/Categorias";


const Home = () => {

  return (
    <>
      <div className="container">
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
          <CardsMasComprado/>
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
