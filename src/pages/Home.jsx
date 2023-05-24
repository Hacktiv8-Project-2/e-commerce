import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../utils/getData'
import { ProductItem } from '../components/ProductItem'
import { Col, Container, Row } from 'react-bootstrap'

export const Home = () => {
  const products = useSelector(state => state.product.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData('/products'))
  }, [])

  return (
    <Container className='pt-5 pb-5'>
      <Row xs={1} md={3} lg={4} className="g-4 mt-4">
        {products.map(product => (
          <Col key={product.id}>
            <ProductItem {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
