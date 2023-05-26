import  { useRef,useState } from 'react'
import { Card, Row, Col, Button, Dropdown, Breadcrumb, Form, Container, Stack, Image } from 'react-bootstrap'
import { FaArrowLeft } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addToCart } from '../app/cartSlice'
import { scrollToTop } from '../utils/scrollToTop'

export const DetailProductPage = () => {
   const params = useParams()
   const products = useSelector(state => state.product.products)
   const product = products.find(product => product.id === Number(params.productId))
   const dispatch = useDispatch()

   const [quantity, setQuantity] = useState(0)
   const [sizeSelected,setSizeSelected] = useState('Select Size')

   const x = useRef()

   const handleQuantityItem = () =>{
      setQuantity( Number(x.current.value))
   }

   const handleAddToCart=()=>{
     
      dispatch(addToCart({...product,qty:quantity}))
   }


   const selectSize= (e) =>{
      setSizeSelected(e.target.getAttribute("value"))
   }

   return (
      <Container className='pt-5 pb-5'>
         <Link to='/'>
            <Button variant='outline-secondary' className='mb-3 mt-5'>
               <FaArrowLeft size='24' className='me-2 pb-1' />
               Back
            </Button>
         </Link>
         <Row>
            <Col className="d-flex justify-content-center">
               <Image src={product.image } className='rounded mt-3 mb-3' style={{ maxWidth: '290px' }} />
            </Col>

            <Col>
               <Row>
                  {/* breadSrumb */}
                  <Breadcrumb>
                     <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                     <Breadcrumb.Item active>{product.category }</Breadcrumb.Item>
                  </Breadcrumb>
                  {/*  */}

                  <Card.Title style={{ fontWeight: 'bold' }}>
                     {product.title }
                  </Card.Title>

                  {/* price */}
                  <Card.Text className='fs-4'>
                     ${product.price }
                  </Card.Text>
                  {/*  */}

                  {/* Remain */}
                  {quantity<product.quantity?   <Card.Text>
                     Remaining : {product.quantity - quantity}
                  </Card.Text>:<Card.Text className='text-danger'>*Quantity tidak terpenuhi</Card.Text>}
                  {/*  */}

                  <h6 style={{ fontWeight: 'bold' }}>PRODUCT DETAILS</h6>

                  {/* item description */}
                  <Card.Text>
                     {product.description }
                  </Card.Text>
                  {/*  */}

                  <Stack direction="horizontal" gap={2}>
                     {/* select size */}
                     {product.category !== "electronics"&&
                        <Dropdown >
                           <Dropdown.Toggle variant="light" id="dropdown-basic" >
                              {sizeSelected}
                           </Dropdown.Toggle>

                           <Dropdown.Menu>
                              <Dropdown.Item onClick={(e)=>selectSize(e)} value='s'>s</Dropdown.Item>
                              <Dropdown.Item onClick={(e)=>selectSize(e)} value='m' >m</Dropdown.Item>
                              <Dropdown.Item onClick={(e)=>selectSize(e)} value='l'>l</Dropdown.Item>
                              <Dropdown.Item onClick={(e)=>selectSize(e)} value='xl'>xl</Dropdown.Item>
                              <Dropdown.Item onClick={(e)=>selectSize(e)} value='xxl'>xxl</Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                        }
                     {/*  */}

                     {/* input quantity */}
                     <Form.Control size="sm" type="number" min='1' max='30' style={{ width: '45px', height: '37.8px', fontWeight: 'bold' }} ref = {x} onChange={handleQuantityItem} defaultValue={1}/>
                     {/*  */}

                     {/* button */}
                     <Link to={`/`} onClick={scrollToTop}>
                        <Button variant="danger" className='roundedCircle' onClick={handleAddToCart}>Add To Cart</Button>
                     </Link>
                     {/*  */}
                  </Stack>

               </Row>
            </Col>
         </Row>
      </Container>
   )
}
