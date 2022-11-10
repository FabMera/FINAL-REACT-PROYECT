import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import LogoutButton from "../components_public/LogoutButton";
import MiContext from "../Context/Micontext";

const Miperfil = () => {
  const { user, isAuthenticated } = useAuth0();
  const { publicacion } = useContext(MiContext);
  return (
    isAuthenticated && (
      <div  className="container bg-light ">
        <h1 className="mt-4 text-center p-3">Mi Perfil</h1>
        <div style={{ width: "50%" }} className="card mb-3 mx-auto p-3">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={user.picture}
                className="img-fluid rounded-start"
                alt={user.name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Mi Perfil de Usuario</h5>
                <p className="card-text">
                  <span>Total de publicaciones: </span> {publicacion.length}
                </p>
                <p className="card-text">
                  <span>Usuario :{user.nickname}</span>
                </p>
                <p className="card-text">
                  <span>Correo electronico:{user.email}</span>
                </p>

                <p className="card-text">
                  <small className="text-muted">
                    Logueado como :{user.name}
                  </small>
                </p>
              </div>
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Miperfil;
