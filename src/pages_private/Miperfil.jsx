import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Miperfil = () => {
  const { user, isAuthenticated } = useAuth0();
 
  return (
    isAuthenticated && (
      
      <div className="container bg-light">
      {JSON.stringify(user)}
        <div className="card mb-3" style={{ maxWidth: 540 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={user.picture} className="img-fluid rounded-start" alt={user.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Mi Perfil de Usuario</h5>
                <p className="card-text">
                  COLOCAR LAS VENTAS POR EJ.
                </p>
                <p className="card-text">
                  <span>Correo electronico:{user.nickname}</span>
                </p>
                <p className="card-text">
                  <small className="text-muted">Logueado como :{user.name}</small>
                </p>
              </div>
              <button className="btn btn-primary btn-sm ">Cerrar mi Sesion</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Miperfil;
