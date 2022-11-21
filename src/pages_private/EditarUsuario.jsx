import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import MiContext from "../Context/Micontext";
import Error from "../components_privates/Error";

const EditarUsuario = () => {
  const [errorEditForm, setErrorEditForm] = useState(false);
  const [usersEdit, setUsersEdit] = useState([]);
  const { users } = useContext(MiContext);
  const {register, handleSubmit,formState: { errors }} = useForm();

  const endpoint = `http://localhost:8000/users/`;

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(endpoint);
      const info = res.data;
      setUsersEdit(info);
    };
    getUser();
    console.log(usersEdit)
  },[]);


  const editSubmit = (data, e) => {
    

    const result = () => {
      const resultado = usersEdit.some(
        (item) => item.username === data.username || item.email === data.email
      );
      if (resultado) {
        console.log("usuario o mail ya esta registrado");
        setErrorEditForm(true);
        return;
      }
      const usuarioActual = users.find((ele) => ele.username);
      const id = usuarioActual.id;
      const editarUsuario = async () => {
        const response = await axios.put(
          `http://localhost:8000/users/${id}`,
          data
        );
        setErrorEditForm(false);
        return Swal.fire({
          title: "Editastes tu Perfil",
          text: "Ahora vuelve a iniciar sesion para ver los cambios",
          icon: "success",
        });
      };

      editarUsuario();
      e.target.reset();
    };
    result()
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 col-lg-6 mx-auto">
            <h2 className="mt-5 p-4">Edita tu Perfil</h2>
            <form
              onSubmit={handleSubmit(editSubmit)}
              className="form-control p-5 shadow rounded-4 "
            >
              <div className="mb-2">
                <label className="form-label">Ingresa un nuevo Nombre:</label>
                <input
                  className="form-control"
                  placeholder="indica tu nombre"
                  type="text"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName?.type === "required" && (
                  <small className="fail">
                    Debes ingresar tu actual nombre o uno nuevo.
                  </small>
                )}
              </div>
              <div className="mb-2">
                <label className="form-label">Ingresa un nuevo apellido:</label>
                <input
                  className="form-control"
                  placeholder="indica tu apellido"
                  type="text"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName?.type === "required" && (
                  <small className="fail">
                    Debes ingresar tu apellido actual o uno nuevo..
                  </small>
                )}
              </div>
              <div className="mb-2">
                <label className="form-label">Cambia tu usuario:</label>
                <input
                  className="form-control"
                  placeholder="Usuario"
                  type="text"
                  {...register("username", { required: true })}
                />
                {errors.username?.type === "required" && (
                  <small className="fail">
                    Debes reingresar tu nombre de usuario o ingresar uno nuevo..
                  </small>
                )}
              </div>
              <div className="mb-2">
                <label className="form-label">
                  Actualiza tu Correo Electronico:
                </label>
                <input
                  className="form-control"
                  placeholder="ejemplo@mail.com"
                  type="email"
                  {...register(
                    "email",
                    { required: true },
                    { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i }
                  )}
                />
                {errors.email?.type === "required" && (
                  <small className="fail">
                    Debes ingresar tu correo actual o uno nuevo..
                  </small>
                )}
                {errors.email?.type === "pattern" && (
                  <small className="fail">
                    El formato de email es incorrecto
                  </small>
                )}
              </div>
              <div className="mb-2">
                <label className="form-label">
                  Ingresa tu contraseña o cambiala aqui:
                </label>
                <input
                  className="form-control"
                  placeholder="Contraseña"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <small className="fail">
                    Debes ingresar tu actual contraseña o una nueva ..
                  </small>
                )}
              </div>
              <div className="mb-2">
                <label className="form-label">
                  Cambia o ingresa una nueva Imagen de Perfil (opcional)
                </label>
                <input
                  className="form-control"
                  placeholder="ingresa una url para tu imagen"
                  type="url"
                  {...register("image", { required: false })}
                />
              </div>
              <button type="submit">Editar mi Perfil</button>
              {errorEditForm && <Error>*El usuario y/o mail ya existen!</Error>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarUsuario;
