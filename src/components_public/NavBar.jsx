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
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top ">
        <div className="container-fluid  ">
          
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
          <div
            className="collapse navbar-collapse "
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav  ">
              <li className="nav-item m-2 ">
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Home
                </Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li className="nav-item m-2 ">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/mispublicaciones"
                    >
                      Mis Publicaciones
                    </Link>
                  </li>
                  <li className="nav-item m-2">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/galeria"
                    >
                      Galeria
                    </Link>
                  </li>
                  <li className="nav-item dropdown ">
                    <a
                      style={{ color: "white" }}
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Mi Perfil
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          style={{ textDecoration: "none" }}
                          to="/favoritos"
                        >
                          Mis Favoritos
                        </Link>
                      </li>
                      <li>
                        <Link style={{ textDecoration: "none" }} to="/miperfil">
                          Ver Perfil
                        </Link>
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
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link style={{ color: "white" }} to="/carrito">
                        <FaShoppingCart />
                      </Link>
                      <span className="badge bg-danger rounded-pill">
                        {carroCompra.length}
                      </span>
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a className="dropdown-item">
                      <LoginButton />
                    </a>
                  </li>
                  <li>
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
