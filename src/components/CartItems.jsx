
import { useState ,useRef} from 'react';
import {Table,Form,Image} from 'react-bootstrap';


export default function CartItems({cartItems}) {
  
  
  
  const [data,setData]=useState(0)

  const x = useRef()
  

  const action = (price) => {
    setData((Number(x.current.value) * price).toFixed(2))
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
                <td>{item.title} {Number(x.current.value) > 20 ?<p className='text-danger' >*Quantity tidak terpenuhi</p>:''}</td>
                <td>${item.price}</td>
                <td>
                  <Form.Control size="sm" type="number" min='1' max='28' style={{ width: '60px', height: '37.8px', fontWeight: 'bold' }} ref={x} onChange = {()=>action(item.price)} defaultValue={item.qty}/>
                </td>
                <td>${data || item.price*item.qty}</td>
              </tr>
            ))}
          </tbody>
        </Table>

    </>
  )
}
