import React, { useState } from 'react';
import { Table, Button, ButtonGroup, Modal, Form,Navbar,Dropdown,Nav,Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const ApplicationTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state;
  const [showModal, setShowModal] = useState(false);
  const [feedbackTitle, setFeedbackTitle] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [selectedApplicationId, setSelectedApplicationId] = useState('');
  const companyName = localStorage.getItem('name');

  const handleViewResume = (usn) => {
    navigate('/StudentResume',{ state: { usn: usn } })
  };

  const handleScheduleInterview = (usn) => {
    console.log(`Schedule interview for application ${usn}`);
    navigate('/scheduleInterview',{ state: { usn: usn } })
  };

  const handleStatusChange = (id, status) => {
    
    fetch(`http://localhost:1337/api/updateApplicationStatus/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, status })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Status update successful:', data);
    })
    .catch((error) => {
      console.error('Status update failed:', error);
    });
    window.location.reload()
  };

  async function handleSendFeedback  (e){
    e.preventDefault()
    console.log(`Send feedback for application ${selectedApplicationId}`);
    console.log(`Feedback Title: ${feedbackTitle}`);
    console.log(`Feedback Text: ${feedbackText}`);
    
    // Send feedback to the backend
    const feedbackData = {
      usn: selectedApplicationId,
      company: companyName,
      title: feedbackTitle,
      content: feedbackText,
    };
    console.log(feedbackData)
    
    fetch('http://localhost:1337/api/sendFeedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Handle the response from the backend
      })
      .catch(error => {
        console.log(error);
        // Handle the error
      });

    // Reset the feedback fields
    setFeedbackTitle('');
    setFeedbackText('');
    
    // Close the modal
    setShowModal(false);
  };

  return (
    
    <div>

<Navbar bg="dark" variant='dark' expand="lg">
                <Container fluid>
                    <img src="https://www.igauge.in/admin/uploaded/rating/logo/CambridgeInstituteLatestLogo2_1623754797.png" height="40" width="110" />
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-1 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="CompanyHome">Home</Nav.Link>
                            <Nav.Link href="NewJobPosting">Job Posting</Nav.Link>
                            <Nav.Link href="CompanyInterview">Interviews</Nav.Link>
                        </Nav>


                        <div className="col-md-6 mx-auto" >
                            <Form className="d-flex ">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
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
            <br></br>
            <br></br>
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name of Candidate Applied</th>
            <th>View Resume</th>
            <th>Schedule Interview</th>
            <th>Status</th>
            <th>Send Feedback</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((application) => {
            return (
              
              <tr key={application.id}>
                <td>{application.usn}</td>
                <td>
                  <Button variant="primary" onClick={() => handleViewResume(application.usn)}>
                    View Resume
                  </Button>
                </td>
                <td>
                  <Button variant="success" onClick={() => handleScheduleInterview(application.usn)}>
                    Schedule Interview
                  </Button>
                </td>
                <td>
                  <ButtonGroup>
                    <Button
                      variant={application.status === 'pending' ? 'secondary' : 'outline-secondary'}
                      onClick={() => handleStatusChange(application._id, 'pending')}
                    >
                      Pending
                    </Button>
                    <Button
                      variant={application.status === 'accepted' ? 'success' : 'outline-success'}
                      onClick={() => handleStatusChange(application._id, 'accepted')}
                    >
                      Accepted
                    </Button>
                    <Button
                      variant={application.status === 'rejected' ? 'danger' : 'outline-danger'}
                      onClick={() => handleStatusChange(application._id, 'rejected')}
                    >
                      Rejected
                    </Button>
                  </ButtonGroup>
                </td>
                <td>
                  <Button variant="info" onClick={() => {
                    setSelectedApplicationId(application.usn);
                    setShowModal(true);
                  }}>
                    Send Feedback
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Send Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="feedbackTitle">
              <Form.Label>Feedback Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter feedback title"
                value={feedbackTitle}
                onChange={(e) => setFeedbackTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="feedbackText">
              <Form.Label>Feedback Text</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter feedback text"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSendFeedback}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  );
};

export default ApplicationTable;
