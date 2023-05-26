
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Table, Image, Button } from 'react-bootstrap';
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa'
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../app/cartSlice';
import { scrollToTop } from '../utils/scrollToTop'




export const CartPage = () => {

  const cartItems = useSelector((store) => store.cart.cartItems)



  const [show, setShow] = useState(true);
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleClose = () => {
    setShow(false);
    navigate(-1)
  }

  const increment = (id) => {
    dispatch(increaseQuantity(id));

  };

  const decrement = (id) => {
    dispatch(decreaseQuantity(id));

  };




  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId))
  }

  // if cart items is empty
  if (!cartItems.length) {
    return (
      <>
        <div className="flex justify-center items-center h-full pt-5">
          <h1 className="font-bold text-center my-52 text-6xl mt-5">SEEM YOUR CART IS EMPTY ‼️ 🛒</h1>
        </div>
      </>
    )
  }

  return (
    <>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='mt-5'
      >
        <Modal.Header closeButton>
          <Modal.Title><FaShoppingCart /> My Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Table bordered hover>
            <thead>
              <tr>
                <th colSpan={2}></th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>

                  <td><Image src={item.image} style={{ maxWidth: '60px' }} rounded /></td>

                  {/*  */}
                  <td>{item.title} {item.qty > 20 && <p className='text-danger' >*Quantity tidak terpenuhi</p>}</td>
                  {/* <td>{item.title}</td> */}
                  {/*  */}

                  <td>${item.price}</td>


                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>

                      <Button variant="light"
                      >
                        <BiMinusCircle onClick={() => decrement(item.id)} />
                      </Button>
                      <p style={{ margin: '0 10px', fontWeight: 'bold', fontSize: '20px' }}>
                        {item.qty}
                      </p>
                      <Button variant="light"
                        onClick={() => increment(item.id)}>
                        <BiPlusCircle />
                      </Button>

                    </div>
                  </td>



                  <td>${item.price * item.qty}</td>

                  <td>
                    <Button variant='danger' onClick={() => { handleRemoveItem(item.id) }} >
                      <FaTrashAlt />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to={`/`} onClick={scrollToTop}>
            <Button variant="primary" >
              Checkout
            </Button>
          </Link>

        </Modal.Footer>
      </Modal>
    </>
  );
}
