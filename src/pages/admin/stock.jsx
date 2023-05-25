import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container, Table } from 'react-bootstrap'
import { getData } from '../../utils/getData'
import { onHandleUpdateStock } from '../../app/productSlice'

const Products = () => {
  const [updatedStocks, setUpdatedStocks] = useState(0)
  const products = useSelector(state => state.product.products)
  const dispatch = useDispatch()

  const handleStockChange = e => {
    setUpdatedStocks(e.target.value)
    const btnUpdateStock = e.target.parentElement.parentElement.nextElementSibling.children[0]
    e.target.value == '' || e.target.value.includes('-')
      ? btnUpdateStock.setAttribute('style', 'opacity: 0.7')
      : btnUpdateStock.setAttribute('style', 'opacity: 1')
  }

  const handleUpdateStock = (id, quantity, e) => {
    if (quantity != '' && !quantity.includes('-')) {
      e.target.setAttribute('style', 'opacity: 0.7')
      dispatch(onHandleUpdateStock({ id, quantity }))
      setUpdatedStocks(0)
      document.querySelectorAll('#stock').forEach(el => el.value = '')
    }
  }

  useEffect(() => {
    dispatch(getData('/products'))
  }, [])

  return (
    <Container className='pt-5 pb-5'>
      <h1 className='mt-4 mb-3'>Products</h1>
      <div className='overflow-auto'>
        <Table>
          <thead>
            <tr>
              <th colSpan={2} style={{ textAlign: 'left', }}>Products</th>
              <th>New Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td><img src={product.image} alt='Product' style={{ width: 100 }} /></td>
                <td style={{ textAlign: 'left' }}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>Current stock : {product.quantity}</p>
                  <p className='text-muted'>{product.category}</p>
                </td>
                <td>
                  <span className='mx-2'>
                    <input
                      type='number'
                      id='stock'
                      onChange={handleStockChange}
                    />
                  </span>
                </td>
                <td>
                  <Button
                    style={{ opacity: 0.7 }}
                    onClick={(e) => handleUpdateStock(product.id, updatedStocks, e)}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  )
}

export default Products