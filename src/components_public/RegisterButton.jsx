import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="boton" onClick={() => loginWithRedirect()}>
      Registrarse
    </button>
  );
};

export default RegisterButton;
