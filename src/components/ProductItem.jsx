import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card } from 'react-bootstrap'

export const ProductItem = ({
  title,
  price,
  category,
  description,
  image,
}) => {
  return (
    <Card className='p-3'>
      <Card.Img variant="top" src={image} alt={title} height='200px' />
      <Card.Body className='p-0 pt-3 pb-3'>
        <Card.Title>{title.length > 37 ? title.slice(0, 37) + '...' : title}</Card.Title>
        <Card.Text className='bg-dark text-white d-inline-block fw-bold ps-3 pe-3 rounded'>{category}</Card.Text>
        <Card.Text>{description.slice(0, 100)}...</Card.Text>
        <Card.Text className='fw-bold fs-4'>${price}</Card.Text>
      </Card.Body>
      <div className='d-flex justify-content-between'>
        <Button variant='outline-primary'>Detail</Button>
        <Button variant='primary'>Add to cart</Button>
      </div>
    </Card>
  )
}

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
