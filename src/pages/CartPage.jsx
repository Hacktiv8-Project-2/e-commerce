import { useState } from 'react';
import {Button,Modal} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'

import { useNavigate } from 'react-router-dom';
import CartItems from '../components/CartItems';

import { useSelector } from 'react-redux';


export const CartPage = () => {
  const cartItems = useSelector((store)=>store.cart.cartItems)

  const [show, setShow] = useState(true);
  const navigate = useNavigate()
  
  const handleClose = () =>{
    setShow(false);
    navigate(-1)
  }

  if(!cartItems.length){
    return (
      <>
      <div className="flex justify-center items-center h-full pt-5">
        <h1 className="font-bold text-center my-52 text-6xl mt-5">Oh snap! You got an error 404!</h1>
      </div>
      </>
    
    )
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
{/* list cart items */}
        <Modal.Body>  
          <CartItems cartItems={cartItems}/>
        </Modal.Body>
{/*  */}


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
