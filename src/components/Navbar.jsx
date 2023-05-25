import { Link, useLocation } from 'react-router-dom'
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'
import { NavItem } from './NavItem'
import { scrollToTop } from '../utils/scrollToTop'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { checkUserAdmin } from '../utils/checkUserAdmin'

export const NavBar = () => {
  const authState = useSelector(state => state.auth)
  const [show, setShow] = useState(false)
  const activeKey = useLocation().pathname
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN")

  useEffect(() => { }, [authState.isLoginSuccess])

  return (
    <Navbar bg='dark' variant='dark' className='position-fixed start-0 end-0' style={{ zIndex: 999 }}>
      <div className='d-lg-none p-1 ps-3 pe-3 bg-dark d-flex justify-content-between align-items-center' style={{ zIndex: 999 }}>
        <FaBars className='me-3' size='35' fill='#fff' onClick={handleShow} />
        <h2 className='text-white m-0'>Bukapedia</h2>
      </div>

      <Container className="d-none d-lg-block bg-dark" style={{ zIndex: 999 }}>
        <div className='d-flex justify-content-between p-1'>
          <h2 className='text-white m-0'>Bukapedia</h2>
          <Nav className='' variant="pills" defaultActiveKey='/' activeKey={activeKey}>
            <NavItem title='Home' path='/' />
            {
              checkUserAdmin()
                ? <NavItem title='Rekap Penjualan' path='/recap' />
                : AUTH_TOKEN
                  ? <NavItem title='Cart' path='/cart' />
                  : ''
            }
            {
              AUTH_TOKEN
                ? <>
                  <span onClick={() => localStorage.removeItem('AUTH_TOKEN')}>
                    <NavItem title='Logout' path='' />
                  </span>
                  <span className='ms-5 ps-3'>
                    <NavItem title={'Hi, ' + localStorage.getItem("AUTH_USERNAME")} path='' />
                  </span>
                </>
                : <NavItem title='Login' path='/login' />
            }
          </Nav>
        </div>
      </Container>

      <Offcanvas show={show} onHide={handleClose} className="bg-dark">
        <Offcanvas.Header closeButton closeVariant='white'>
          <Offcanvas.Title>
            <Link to='/' className='text-decoration-none' onClick={() => { handleClose(); scrollToTop(); }}>
              <h2 className='brand m-0 text-white'>Bukapedia</h2>
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav defaultActiveKey='/' activeKey={activeKey} className='h-100 d-flex flex-column justify-content-between'>
            <div className='w-100 ps-3 pe-3 d-flex flex-column align-items-center'>
              <div className='border-bottom w-100 text-center pb-2 pt-2' onClick={handleClose}>
                <NavItem title='Home' path='/' />
              </div>
              {
                checkUserAdmin()
                  ? <div className='border-bottom w-100 text-center pb-2 pt-2' onClick={handleClose}>
                    <NavItem title='Rekap Penjualan' path='/recap' />
                  </div>
                  : AUTH_TOKEN
                    ? <div className='border-bottom w-100 text-center pb-2 pt-2' onClick={handleClose}>
                      <NavItem title='Cart' path='/cart' />
                    </div>
                    : ''
              }
              {
                AUTH_TOKEN
                  ? <div className='border-bottom w-100 text-center pb-2 pt-2' onClick={() => { handleClose(); localStorage.removeItem('AUTH_TOKEN'); }}>
                    <NavItem title='Logout' path='' />
                  </div>
                  : <div className='border-bottom w-100 text-center pb-2 pt-2' onClick={handleClose}>
                    <NavItem title='Login' path='/login' />
                  </div>
              }
            </div>
            {
              AUTH_TOKEN
                ? <h3 className='text-white text-center mb-5'>Hi, {localStorage.getItem("AUTH_USERNAME")}</h3>
                : ''
            }
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  )
}
