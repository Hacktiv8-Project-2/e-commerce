import { useState } from 'react';
import {Button,Modal,Table} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const CartPage = ({isOpen}) => {

  const cartItems = useSelector((store)=>store.cartItems)
  
  const [show, setShow] = useState(true || isOpen);
  const navigate = useNavigate()
  
  const handleClose = () =>{
    setShow(false);
    navigate(-1)
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='mt-5'
      >

        <Modal.Header closeButton>
          <Modal.Title><FaShoppingCart/> My Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>         
        <Table bordered hover>
        <thead>
        <tr>
          
          <th></th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >1</td>
         
        </tr>
        <tr>
          <td>2</td>
          
        </tr>
        <tr>
          <td>3</td>
         
        </tr>
      </tbody>

        </Table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{}}>
            Checkout
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}
