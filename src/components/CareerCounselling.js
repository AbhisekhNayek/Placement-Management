import React from 'react';
import { Navbar, Container, Nav, Form, Button, Card ,Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CareerCounselling = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <img
            src="https://www.igauge.in/admin/uploaded/rating/logo/CambridgeInstituteLatestLogo2_1623754797.png"
            height="40"
            width="110"
          />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-1 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link as={Link} to="/StudentHome">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/StudentSchedule">
                Schedule
              </Nav.Link>
              <Nav.Link as={Link} to="/createResume">
                Resume
              </Nav.Link>
            </Nav>

            <div className="col-md-6 mx-auto">
              <Form className="d-flex ">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <Button variant="outline-light">Search</Button>
              </Form>
            </div>
          <Dropdown className="me-auto my-1 my-lg-0">
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-Login">
                            <img className="me-auto my-1 my-lg-0" src="https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-22.jpg" height="30" width="30" />

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/">Log Out</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
      <br />
      <br />
      <div class="container text-center">
        <div class="row justify-content-start">
          <div className="d-flex justify-content-around">
            <a href='/system-engineering'>
            <Button bg="dark" variant="light">
                <Card style={{ width: '18rem', height: '22rem' }}>
                  <Card.Img
                    variant="top"
                    src="https://cdn2.hubspot.net/hubfs/508286/Logos/Systems%20Engineering%20Logo_Blog.png"
                    height="300"
                  />
                  <Card.Body>
                    <Card.Title>System Engineer</Card.Title>
                  </Card.Body>
                </Card>
            </Button>
            </a>

            <a href='/electrical-engineering'>
            <Button bg="dark" variant="light">
                <Card style={{ width: '18rem', height: '22rem' }}>
                  <Card.Img
                    variant="top"
                    src="https://t4.ftcdn.net/jpg/02/85/82/89/360_F_285828947_7LvtUCUFARVTzcxvPDM2EkTuknA50buy.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Electrical Engineer</Card.Title>
                  </Card.Body>
                </Card>
            </Button>
            </a>


            <a href='/chemical-engineering'>
            <Button bg="dark" variant="light">
                <Card style={{ width: '18rem', height: '22rem' }}>
                  <Card.Img
                    variant="top"
                    src="https://media.istockphoto.com/id/1257119370/vector/tech-laboratory-logo-laboratory-machine-logo-template-vector.jpg?s=612x612&w=0&k=20&c=qKip_7wcO_WCE9QdIEQGR4pZtWVAofpug_Io2VFbVOw="
                  />
                  <Card.Body>
                    <Card.Title>Chemical Engineer</Card.Title>
                  </Card.Body>
                </Card>
            </Button>
            </a>

          </div>
        </div>
      </div>
      <br />
      <div class="container text-center">
        <div class="row justify-content-start">
          <div className="d-flex justify-content-around">

          <a href='/big-data-engineering'>
            <Button bg="dark" variant="light">
                <Card style={{ width: '18rem', height: '22rem' }}>
                  <Card.Img
                    variant="top"
                    src="https://media.licdn.com/dms/image/D5612AQHKffD_1ElRhg/article-cover_image-shrink_600_2000/0/1677770020232?e=2147483647&v=beta&t=2GxOro_krmlGkuWwiKkLUIEtumYSFowUcFSaOrZwQPk"
                    height="300"
                  />
                  <Card.Body>
                    <Card.Title>Big Data Engineer</Card.Title>
                  </Card.Body>
                </Card>
            </Button>
            </a>


            <a href='/aerospace-engineering'>
            <Button bg="dark" variant="light">
                <Card style={{ width: '18rem', height: '22rem' }}>
                  <Card.Img
                    variant="top"
                    src="https://res.cloudinary.com/teepublic/image/private/s--4eZaaLIK--/c_fit,g_north_west,h_840,w_835/co_000000,e_outline:40/co_000000,e_outline:inner_fill:1/co_ffffff,e_outline:40/co_ffffff,e_outline:inner_fill:1/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1669781712/production/designs/37016186_0.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Aerospace Engineer</Card.Title>
                  </Card.Body>
                </Card>
            </Button>
            </a>


            <a href='/software-engineering'>
            <Button bg="dark" variant="light">
                <Card style={{ width: '18rem', height: '22rem' }}>
                  <Card.Img
                    variant="top"
                    src="https://thumbs.dreamstime.com/b/software-developer-icon-trendy-software-developer-logo-concept-software-developer-icon-trendy-software-developer-logo-concept-131194416.jpg"
                  />
                  <Card.Body>
                    <Card.Title>Software Developer</Card.Title>
                  </Card.Body>
                </Card>
            </Button>
            </a>

          </div>
        </div>
      </div>
      <br />
      <div class="container text-center">
        <div class="row justify-content-start">
          <div className="d-flex justify-content-around">
          <a href='/ui-ux-engineering'>
            <Button bg="dark" variant="light">
                <Card style={{ width: '18rem', height: '22rem' }}>
                  <Card.Img
                    variant="top"
                    src="https://aufaitux.com/wp-content/uploads/2022/06/mobile-app-ux-ui-basics.jpg"
                    height="300"
                  />
                  <Card.Body>
                    <Card.Title>UI/UX Designer</Card.Title>
                  </Card.Body>
                </Card>
            </Button>
            </a>

            <a href='/computer-hardware-engineering'>
            <Button bg="dark" variant="light">
                <Card style={{ width: '18rem', height: '22rem' }}>
                  <Card.Img
                    variant="top"
                    src="https://media.istockphoto.com/id/1144570796/photo/engineer-motherboard-computer-technology-repair.jpg?s=612x612&w=0&k=20&c=-WrxlNu8Njre8dVrSnMCNd6QvQusIKnvk7VY4dAr9jc="
                    height="300"
                  />
                  <Card.Body>
                    <Card.Title>Computer Hardware Engineer</Card.Title>
                  </Card.Body>
                </Card>
            </Button>
            </a>

            <a href='/structural-engineer'>
            <Button bg="dark" variant="light">
                <Card style={{ width: '18rem', height: '22rem' }}>
                  <Card.Img
                    variant="top"
                    src="https://pbs.twimg.com/profile_images/378800000738336275/80a95cd1f81d6ee1497ab4a317a37f70_400x400.png"
                  />
                  <Card.Body>
                    <Card.Title>Structural Engineer</Card.Title>
                  </Card.Body>
                </Card>
            </Button>
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default CareerCounselling;
