import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import MiContext from "../Context/Micontext";
import "../CSS/formcss.css";
import Error from "../components_privates/Error";
import axios from "axios";

const FormRegistro = () => {
  const [errorForm, setErrorForm] = useState(false);
  //funcion para generar id al usuario,reat-hook-form no la crea.
  const generarId = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return fecha + random;
  };

  const { users, setUsers } = useContext(MiContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const endpointuser = "http://localhost:8000/users";

  const customSubmit = (data, e) => {
    const result = () => {
      const resultado = users.some(
        (item) => item.username === data.username || item.email === data.email
      );
      if (resultado) {
        console.log("usuario o mail ya esta registrado");
        setErrorForm(true);
        return;
      }
      const send = async () => {
        data.id = generarId();
        /* data.image = null; */
        const response = await axios.post(endpointuser, data);
        console.log(response);
        setUsers([...users, data]);
        setErrorForm(false);
      };
      send();
      e.target.reset();
    };
    result();
    console.log(data);
    console.log(users);
  };

  return (
    <>
      <h2 className="mt-5 p-4">Registro de Usuario</h2>
      <form
        onSubmit={handleSubmit(customSubmit)}
        className="form-control p-5 shadow rounded-4 "
      >
        <div className="mb-2">
          <label className="form-label">Nombre:</label>
          <input
            className="form-control"
            placeholder="indica tu nombre"
            type="text"
            {...register("firstName", { required: true, maxLength: 10 })}
          />
          {errors.firstName?.type === "required" && (
            <small className="fail">El campo nombre no puede estar vacio</small>
          )}
          {errors.firstName?.type === "maxLength" && (
            <small className="fail">El maximo de caracteres es 10</small>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label">Apellido:</label>
          <input
            className="form-control"
            placeholder="indica tu apellido"
            type="text"
            {...register("lastName", { required: true, minLength: 4 })}
          />
          {errors.lastName?.type === "required" && (
            <small className="fail">
              El campo apellido no puede estar vacio
            </small>
          )}
          {errors.lastname?.type === "min" && (
            <small className="fail">El minimo de caracteres es 5</small>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label">Elige un usuario:</label>
          <input
            className="form-control"
            placeholder="Usuario"
            type="text"
            {...register("username", { required: true, minLength: 4 })}
          />
          {errors.username?.type === "required" && (
            <small className="fail">
              El campo usuario no puede estar vacio
            </small>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label">Elige una contraseña:</label>
          <input
            className="form-control"
            placeholder="Contraseña"
            type="password"
            {...register("password", { required: true, minLength: 4 })}
          />
          {errors.password?.type === "required" && (
            <small className="fail">Debes ingresar una contraseña</small>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label">Correo Electronico:</label>
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
            <small className="fail">El campo email no puede estar vacio</small>
          )}
          {errors.email?.type === "pattern" && (
            <small className="fail">El formato de email es incorrecto</small>
          )}
        </div>
        <div className="mb-2">
          <label className="form-label">Imagen de Perfil (opcional)</label>
          <input
            className="form-control"
            placeholder="ingresa una url para tu imagen"
            type="url"
            {...register("image", { required: false })}
          />
        </div>
        <button type="submit">Registrarme</button>
        {errorForm && <Error>*El usuario y/o mail ya existen!</Error>}
      </form>
    </>
  );
};

export default FormRegistro;
