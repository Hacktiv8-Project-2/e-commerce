
import { useState ,useRef} from 'react';
import {Table,Form,Image,Button} from 'react-bootstrap';
import {FaTrashAlt} from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../app/cartSlice';


export default function CartItems({cartItems}) {
  
  
  
  const [total,setTotal]=useState(0)

  const x = useRef()
  // const selectedQuantity =Number(x.current.value)
  

  const action = (price) => {
    setTotal(( Number(x.current.value) * price).toFixed(2))
  }
  
  const dispatch = useDispatch()

  const remove =(itemId)=>{
    dispatch(removeFromCart(itemId))
  }

  return (
    <>

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
            {cartItems.map(item=>(
              <tr key={item.id}>
                
                <td><Image src={item.image} style={{ maxWidth: '60px'}} rounded  /></td>
                {/*  */}
                {/* <td>{item.title} {selectedQuantity > 20 ?<p className='text-danger' >*Quantity tidak terpenuhi</p>:''}</td> */}
                <td>{item.title}</td>
                {/*  */}
                <td>${item.price}</td>
                <td>
                  <Form.Control size="sm" type="number" min='1' max='28' style={{ width: '60px', height: '37.8px', fontWeight: 'bold' }} ref={x} onChange = {()=>action(item.price)} defaultValue={item.qty}/>
                </td>
                <td>${total || item.price*item.qty}</td>

                <td>
                  <Button variant='danger' onClick={()=>{remove(item.id)}} >
                    <FaTrashAlt />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

    </>
  )
}
