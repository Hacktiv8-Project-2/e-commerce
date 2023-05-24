import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export const Login = () => {
  return (
    <Container className='pt-5 pb-5 d-flex justify-content-center vh-100'>
      <div className="col-lg-6 col-md-8 mt-5 p-5 pt-4 rounded card-login">
        <h1 className='text-center text-decoration-underline'>Login</h1>
        <Form className='pt-5 d-flex flex-column justify-content-between h-100'>
          <div className='d-block m-auto w-100'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </div>
          <Button className='fs-5 w-75 d-block m-auto mb-5' variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  )
}
