import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { postLogin } from '../utils/postLogin'

export const Login = () => {
  const authState = useSelector(state => state.auth)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const usernameChange = event => setUsername(event.target.value)
  const passwordChange = event => setPassword(event.target.value)
  const doSubmit = event => {
    const data = {
      username: username,
      password: password,
    }
    event.preventDefault()
    dispatch(postLogin(data))
    setUsername('')
    setPassword('')
  }

  return (
    <Container className='pt-5 pb-5 d-flex justify-content-center vh-100'>
      <div className='col-lg-6 col-md-8 mt-5 p-5 pt-4 rounded card-login'>
        <h1 className='text-center text-decoration-underline'>Login</h1>
        <Form onSubmit={doSubmit} className='pt-5 d-flex flex-column justify-content-between h-100'>
          <div className='d-block m-auto w-100'>
            <Form.Group className='mb-3' controlId='formBasicName'>
              <Form.Label>Username</Form.Label>
              <Form.Control type='text' placeholder='Username' onChange={usernameChange} value={username} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' onChange={passwordChange} value={password} />
            </Form.Group>
          </div>
          <div className='text-center'>
            {authState.isLoginPending && <div><img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif' alt='loading...' /></div>}
            {authState.errorMessage && <div>{authState.errorMessage}</div>}
          </div>
          <Button className='fs-5 w-75 d-block m-auto mb-5' variant='primary' type='submit'>
            Login
          </Button>
        </Form>
      </div>
    </Container>
  )
}
