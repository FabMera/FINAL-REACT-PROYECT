import React, { useContext } from "react";
import MiContext from "../Context/Micontext";

const ModalForm = () => {
  const { tipo, setTipo } = useContext(MiContext);

  const handleSubmitModal=(e)=>{
    e.preventDefault();
  }
const handleClickUpdate=()=>{
  
}
  return (
    <div>
      <form onSubmit={handleSubmitModal}>
        <label>Nombre o tipo:</label>
        <input
          type="texto"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        <button onClick={handleClickUpdate} >Update</button>
      </form>
    </div>
  );
};

export default ModalForm;
