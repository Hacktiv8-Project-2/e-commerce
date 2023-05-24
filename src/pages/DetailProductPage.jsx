import React from 'react'
import { Card, Row, Col, Button, Dropdown, Breadcrumb, Form, Container, Stack, Image } from 'react-bootstrap'
import { FaArrowLeft } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export const DetailProductPage = () => {
   const params = useParams()
   const products = useSelector(state => state.product.products)
   const product = products.find(product => product.id === Number(params.productId))

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
               <Image src={product.image || "https://source.unsplash.com/300x300?programs"} className='rounded mt-3 mb-3' style={{ maxWidth: '290px' }} />
            </Col>

            <Col>
               <Row>
                  {/* breadSrumb */}
                  <Breadcrumb>
                     <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                     <Breadcrumb.Item active>{product.category || "category"}</Breadcrumb.Item>
                  </Breadcrumb>
                  {/*  */}

                  <Card.Title style={{ fontWeight: 'bold' }}>
                     {product.title || 'TITLE'}
                  </Card.Title>

                  {/* price */}
                  <Card.Text className='fs-4'>
                     ${product.price || '100'}
                  </Card.Text>
                  {/*  */}

                  <Card.Text>
                     Remaining : {product.quantity || '0'}
                  </Card.Text>

                  <h6 style={{ fontWeight: 'bold' }}>PRODUCT DETAILS</h6>
                  {/* item description */}
                  <Card.Text>
                     {product.description || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ipsam error, suscipit ad earum nostrum sint iste eos asperiores perferendis beatae! Cumque quibusdam iste suscipit. Eaque cupiditate veniam tempora asperiores suscipit aliquid sunt, ut itaque soluta consectetur aut minus, provident quia porro facere optio nisi dolorum corrupti non numquam! Eius, numquam perferendis id odit nam illum corporis natus voluptatibus veritatis architecto accusamus, adipisci necessitatibus! Praesentium cupiditate totam nostrum voluptates dicta, soluta dolor sunt non aspernatur nobis itaque eum et qui inventore aut repellat vitae quo molestias delectus. Laboriosam excepturi repudiandae sit recusandae iste consectetur cum rem, commodi omnis architecto explicabo?'}
                  </Card.Text>
                  {/*  */}

                  <Stack direction="horizontal" gap={2}>
                     {/* select size */}
                     {/* {item.category !== "electronics"&&
                        <Dropdown >
                           <Dropdown.Toggle variant="light" id="dropdown-basic">
                           Select Size
                           </Dropdown.Toggle>

                           <Dropdown.Menu>
                           <Dropdown.Item href="#/action-1">s</Dropdown.Item>
                           <Dropdown.Item href="#/action-2">m</Dropdown.Item>
                           <Dropdown.Item href="#/action-3">l</Dropdown.Item>
                           <Dropdown.Item href="#/action-3">xl</Dropdown.Item>
                           <Dropdown.Item href="#/action-3">xxl</Dropdown.Item>
                           </Dropdown.Menu>
                        </Dropdown>
                        } */}
                     <Dropdown >
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                           Select Size
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                           <Dropdown.Item href="#/action-1">s</Dropdown.Item>
                           <Dropdown.Item href="#/action-2">m</Dropdown.Item>
                           <Dropdown.Item href="#/action-3">l</Dropdown.Item>
                           <Dropdown.Item href="#/action-3">xl</Dropdown.Item>
                           <Dropdown.Item href="#/action-3">xxl</Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
                     {/*  */}

                     {/* input quantity */}
                     <Form.Control size="sm" type="number" min='1' max='20' style={{ width: '45px', height: '37.8px', fontWeight: 'bold' }} />
                     {/*  */}

                     {/* button */}
                     <Button variant="danger" className='roundedCircle'>Add To Cart</Button>
                     {/*  */}
                  </Stack>

               </Row>
            </Col>
         </Row>
      </Container>
   )
}
