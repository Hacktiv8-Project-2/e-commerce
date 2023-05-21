import { Card, Row, Col ,Button,Dropdown,Breadcrumb,Form, Container} from 'react-bootstrap';

export const DetailProductPage =({items})=> {
   return (

      <Container fluid>
      <Card style={{ width: '50vw' ,border:'4px solid red'}}>

        <Card.Body>
          <Row>
            <Col xs={4}>
              <Card.Img src={"https://source.unsplash.com/692x879?programs"} />
            </Col>
            <Col xs={8}>
               {/* breadSrumb */}
               <Breadcrumb>
                  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>{"category"}</Breadcrumb.Item>
               </Breadcrumb>
               {/*  */}

               <Card.Title>
                  {'TITLE'}
               </Card.Title>

               {/* price */}
               <Card.Text>
                  $ { '100'}
               </Card.Text>
               {/*  */}


               <h5 style={{fontWeight:'bold'}}>PRODUCT DETAILS</h5>
               {/* item description */}
               <Card.Text>
                  {'description'}
               </Card.Text>
               {/*  */}


               <Row>
                  <Col >
                     {/* select size */}
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
                  </Col>
                  <Col>
                     {/* input quantity */}
                     <Form.Control size="sm" type="number" min='1' max='20' style = {{width:'45px'}}/>
                     {/*  */}
                  </Col>
                  <Col>
                     {/* button */}
                     <Button variant="danger" className='roundedCircle'>Add To Cart</Button>
                     {/*  */}

                  </Col>
               </Row>






            </Col>
          </Row>
        </Card.Body>
      </Card>
      </Container>
    );
}
