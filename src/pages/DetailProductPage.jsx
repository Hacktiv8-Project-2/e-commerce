import { Card, Row, Col ,Button,Dropdown,Breadcrumb} from 'react-bootstrap';

export const DetailProductPage =()=> {
   return (

 
      <>
      <Card style={{ width: '50vw' }} >

        <Card.Body>
          <Row>
            <Col xs={4}>
              <Card.Img src="gambar.jpg" />
            </Col>
            <Col xs={8}>
               {/* breadSrumb */}
               <Breadcrumb>
                  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>T-Shirt</Breadcrumb.Item>
               </Breadcrumb>
               {/*  */}

               <Card.Title>
               Red Printed Tshirt by HRX
               </Card.Title>
               <Card.Text>
                  $50.00
               </Card.Text>

               {/* select size */}
               <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
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

               <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quisquam adipisci reprehenderit voluptatem a velit quod laudantium ipsam, nam explicabo?.
               </Card.Text>

              {/* button */}
              <Button variant="danger" className='roundedCircle'>Add To Cart</Button>
              {/*  */}






            </Col>
          </Row>
        </Card.Body>
      </Card>
      </>
    );
}
