import React from "react";
import { Carousel } from "react-bootstrap";

const Carrousel = () => {
  return (
    <Carousel fade >
      <Carousel.Item  >
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Lo mejor en Computacion</h3>
          <p>Ofertas en computacion,precios irrepetibles</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1573148195900-7845dcb9b127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1940&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Iphones,todos los modelos</h3>
          <p>Busca tu iphone y accede a las ultimas versiones..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Todo en Zapatillas</h3>
          <p>
            Diferentes Marcas y colores ven por las tuyas..
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
