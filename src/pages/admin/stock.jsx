import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { updateStock } from '../../app/productSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Table } from "react-bootstrap";
import { getData } from "../../utils/getData";



const Products = () => {
  const [updatedStocks, setUpdatedStocks] = useState({});
  const products = useSelector(state => state.product.products);
  const dispatch = useDispatch();

  const handleStockChange = (id, newStock) => {
    setUpdatedStocks(prevStocks => ({
      ...prevStocks,
      [id]: newStock,
    }));
  };

 

  useEffect(() => {
    dispatch(getData('/products'));
  }, [dispatch]);



  return (
    <Container className="pt-5 pb-5">
      <h1 className="mt-4 mb-3">Products</h1>
      <div className="overflow-auto">
        <Table>
          <thead>
            <tr>
              <th colSpan={2} style={{ textAlign: "left", }}>Products</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td><img src={product.image} alt="Product" style={{ width: 100 }} /></td>
                <td style={{ textAlign: "left" }}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>Current stock : {product.quantity}</p>
                  <p className="text-muted">{product.category}</p>
                </td>
                <td>
                  <span className='mx-2'>
                    <input
                      type='number'
                      id='stock'
                      value={updatedStocks[product.id] || ''}
                      onChange={(e) => handleStockChange(product.id, e.target.value)}
                    />
                  </span>
                </td>
                <td>
                  {/* <Button onClick={() => handleUpdateStock(product.id, updatedStocks[product.id])}>Update</Button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
export default Products;