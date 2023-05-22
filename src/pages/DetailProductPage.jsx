import {  Card,Row, Col ,Button,Dropdown,Breadcrumb,Form, Container,Stack,Image } from 'react-bootstrap';

export const DetailProductPage =({item})=> {
   return (
      <>
      <h1>hallo</h1>

      <Container>
         <Row style={{marginTop:'100px'} }>
            <Col className="d-flex justify-content-center">
               <Image src={"https://source.unsplash.com/300x300?programs"||item.image} className='rounded mt-3' />
            </Col>

            <Col >
               <Row>
                  {/* breadSrumb */}
                  <Breadcrumb>
                     <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                     <Breadcrumb.Item active>{"category" ||item.category}</Breadcrumb.Item>
                  </Breadcrumb>
                  {/*  */}

                  <Card.Title style={{fontWeight:'bold'}}>
                     {'TITLE'||item.title}
                  </Card.Title>

                  {/* price */}
                  <Card.Text>
                     $ { '100'||item.price}
                  </Card.Text>
                  {/*  */}


                  <h6 style={{fontWeight:'bold'}}>PRODUCT DETAILS</h6>
                  {/* item description */}
                  <Card.Text>
                     {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ipsam error, suscipit ad earum nostrum sint iste eos asperiores perferendis beatae! Cumque quibusdam iste suscipit. Eaque cupiditate veniam tempora asperiores suscipit aliquid sunt, ut itaque soluta consectetur aut minus, provident quia porro facere optio nisi dolorum corrupti non numquam! Eius, numquam perferendis id odit nam illum corporis natus voluptatibus veritatis architecto accusamus, adipisci necessitatibus! Praesentium cupiditate totam nostrum voluptates dicta, soluta dolor sunt non aspernatur nobis itaque eum et qui inventore aut repellat vitae quo molestias delectus. Laboriosam excepturi repudiandae sit recusandae iste consectetur cum rem, commodi omnis architecto explicabo?' || item.description}           
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
                        <Form.Control size="sm" type="number" min='1' max='20' style = {{width:'45px',height:'37.8px',fontWeight:'bold'}}/>
                     {/*  */}
               
                     {/* button */}
                        <Button variant="danger" className='roundedCircle'>Add To Cart</Button>
                     {/*  */}
                  </Stack>
                  
               </Row>
            </Col>
         </Row>
      </Container>
      </>
    );
}
