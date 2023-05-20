import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import {FaShoppingCart} from 'react-icons/fa'

export const CartPage = () => {
  
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      
      {/* <Button variant="primary" onClick={handleShow}>
        Show My Cart
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='mt-5'
      >
        <Modal.Header closeButton>
          <Modal.Title><FaShoppingCart/>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>         
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
        </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
