import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalRegistroOK = ({modalReg,handleClickCloseReg}) => {
  return (
    <>
    <Modal show={modalReg} onHide={handleClickCloseReg}>
      <Modal.Header closeButton>
        <Modal.Title>Gracias por Registrate..</Modal.Title>
      </Modal.Header>
      <Modal.Body>Ahora puedes iniciar sesion..</Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={() => handleClickCloseReg()}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default ModalRegistroOK