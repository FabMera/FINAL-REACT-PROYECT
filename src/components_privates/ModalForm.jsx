import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalForm = ({ handleClickClose, modal }) => {
  return (
    <>
      <Modal show={modal} onHide={handleClickClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edita tu Publicacion!</Modal.Title>
        </Modal.Header>
        <Modal.Body>!!Rellena los campos editables del formulario..</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={() => handleClickClose()}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalForm;
