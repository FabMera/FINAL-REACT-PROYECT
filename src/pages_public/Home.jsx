import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardsMasComprado from "../components_public/CardsMasComprado";
import Categorias from "../components_public/Categorias";
import MiContext from "../Context/Micontext";
import "../CSS/estilos_slider.css";
import Footer from "../components_public/Footer";

import banner from "../img/banner_principal.jpg";
const Home = () => {
  const { productos } = useContext(MiContext);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#d5dbece8" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#d5dbece8" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container bg-light">
        <div className="row">
          <div className="col">
            <img className="img-banner" src={banner} alt="market..logo" />
          </div>
        </div>
        <div className="row ">
          <h2 className="text-center m-3 p-4">Elige tu Categoria!</h2>
          <Categorias />
        </div>

        <div className="row">
          <h2 className="text-center">Productos mas vendidos!</h2>
          <div className="col">
            <Slider {...settings}>
              {" "}
              {productos.map((product) => (
                <CardsMasComprado key={product.id} product={product} />
              ))}
            </Slider>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
