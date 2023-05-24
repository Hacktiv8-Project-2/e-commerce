import { Link, useLocation } from 'react-router-dom'
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'
import { NavItem } from './NavItem'
import { scrollToTop } from '../utils/scrollToTop'
import { useState } from 'react'

export const NavBar = () => {
  const [show, setShow] = useState(false)
  const activeKey = useLocation().pathname
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Navbar bg='dark' variant='dark' className='position-fixed start-0 end-0' style={{ zIndex: 999 }}>
      <div className='d-lg-none p-1 ps-3 pe-3 bg-dark d-flex justify-content-between align-items-center' style={{ zIndex: 999 }}>
        <FaBars className='me-3' size='35' fill='#fff' onClick={handleShow} />
        <h1 className='text-white m-0'>E-Commerce</h1>
      </div>

      <Container className="d-none d-lg-block bg-dark" style={{ zIndex: 999 }}>
        <div className='d-flex justify-content-between p-1'>
          <h1 className='text-white m-0'>E-Commerce</h1>
          <Nav className='' variant="pills" defaultActiveKey='/' activeKey={activeKey}>
            <NavItem title='Home' path='/' />
            <NavItem title='Cart' path='/cart' />
          </Nav>
        </div>
      </Container>

      <Offcanvas show={show} onHide={handleClose} className="bg-dark">
        <Offcanvas.Header closeButton closeVariant='white'>
          <Offcanvas.Title>
            <Link to='/' className='text-decoration-none' onClick={() => { handleClose(); scrollToTop(); }}>
              <h1 className='brand m-0 text-white'>E-Commerce</h1>
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey='/' activeKey={activeKey} className='h-100 d-flex flex-column justify-content-between'>
            <div className='w-100 ps-3 pe-3 d-flex flex-column align-items-center'>
              <div className='border-bottom w-100 text-center pb-2 pt-2' onClick={handleClose}>
                <NavItem title='Home' path='/' />
              </div>
              <div className='border-bottom w-100 text-center pb-2 pt-2' onClick={handleClose}>
                <NavItem title='Cart' path='/cart' />
              </div>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  )
}
