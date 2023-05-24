import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../utils/getData'

export const Home = () => {
  const products = useSelector(state => state.product.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData('/products'))
  }, [])

  return (
    <div className='p-2 pt-5'>
      <h1 className='pt-4'>Welcome to <br /> E-Commerce, Team 7</h1>
      {
        products.map(product => (
          <p key={product.id}>
            {product.id}.&nbsp;
            <span>{product.title}</span>
          </p>
        ))
      }
    </div>
  )
}
