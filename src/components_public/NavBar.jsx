import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import RegisterButton from "./RegisterButton";
import { FaShoppingCart } from "react-icons/fa";
import MiContext from "../Context/Micontext";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  const { carroCompra } = useContext(MiContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <p class="logo" >MARKET PLACE</p>
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item m-2">
                <Link to="/">
                  <button className="boton">Home</button>
                </Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li className="nav-item m-2 ">
                    <Link to="/mispublicaciones">
                      <button className="boton">Mis Publicaciones</button>
                    </Link>
                  </li>
                  <li className="nav-item m-2">
                    <Link to="/galeria">
                      <button className="boton">Galeria</button>
                    </Link>
                  </li>
                  <li className="nav-item dropdown ">
                    <a
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <button className="boton">Mi Perfil</button>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item">
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/favoritos"
                          >
                            Mis Favoritos
                          </Link>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item">
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/miperfil"
                          >
                            Ver Perfil
                          </Link>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item">
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/carrito"
                          >
                            Carrito
                          </Link>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item">
                          <LogoutButton />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item m-2">
                    <a className="nav-link">
                      <Link to="/carrito">
                        <FaShoppingCart style={{ color: "white" }}  />
                      </Link>
                      <span className="badge bg-danger rounded-pill">
                        {carroCompra.length}
                      </span>
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item m-2">
                    <a className="dropdown-item">
                      <LoginButton />
                    </a>
                  </li>
                  <li className="nav-item m-2">
                    <a className="dropdown-item">
                      <RegisterButton />
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
