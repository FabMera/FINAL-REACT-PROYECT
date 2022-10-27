import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import RegisterButton from "./RegisterButton";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container ">
          <a className="navbar-brand" >
            LOGO DE LA EMPRESA
          </a>
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
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/"
                  >
                    Home
                  </Link>
                </a>
              </li>
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" >
                    <Link style={{textDecoration:"none",color: "white"}} to="/mispublicaciones">Mis Publicaciones</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                    <Link style={{textDecoration:"none",color: "white"}}  to="/galeria">Galeria</Link>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Mi Perfil
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" >
                          <Link style={{textDecoration:"none"}} to="/favoritos" >Mis Favoritos</Link>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" >
                        <Link style={{textDecoration:"none"}} to="/miperfil" >Ver Perfil</Link>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" >
                        <Link style={{textDecoration:"none"}} to="/favoritos" >Mis Favoritos</Link>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" >
                        <LogoutButton/>
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a className="dropdown-item" >
                      <LoginButton/>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <RegisterButton/>
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
