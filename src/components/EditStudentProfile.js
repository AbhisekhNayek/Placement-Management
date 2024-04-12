import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button,Navbar,Nav,Dropdown, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const StudentProfileEdit = () => {
  const navigate = useNavigate();
  const usn = localStorage.getItem('token')
  const [formData, setFormData] = useState({
    usn: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    contactNumber: '',
    address: '',
    careerObjective: '',
    schoolName1: '',
    education1: '',
    course1: '',
    address1: '',
    score1: '',
    yearOfCompletion1: '',
    schoolName2: '',
    education2: '',
    course2: '',
    address2: '',
    score2: '',
    yearOfCompletion2: '',
    collegeName: '',
    education3: '',
    course3: '',
    specialization: '',
    address3: '',
    score3: '',
    courseDuration: '',
    keySkills: '',
    careerPreferences: '',
    // Add other form fields here
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(
          `http://localhost:1337/api/studentProfile/${usn}`
        );
        const data = await response.json();
        if (response.ok) {
          setFormData(data);
        } else {
          console.log('Failed to fetch profile data');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfileData();
  }, [usn]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:1337/api/updateProfile/${usn}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        navigate('/StudentProfile');
      } else {
        console.log('Failed to update profile');
      }
    } catch (error) {
      console.log(error);
    }
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
                            <Nav.Link href="StudentHome">Home</Nav.Link>
                            <Nav.Link href="StudentSchedule">Schedule</Nav.Link>
                            <Nav.Link href="createResume">Resume</Nav.Link>
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
                        <Button variant="outline-dark">
                         <Dropdown className="me-auto my-1 my-lg-0">
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-Login">
                            <img className="me-auto my-1 my-lg-0" src="https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-22.jpg" height="30" width="30" />

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/">Log Out</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>

                        </Button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
      <br></br>
      <div style={{ marginLeft: '20px', marginRight: '20px' }}>
    <Form onSubmit={handleSubmit}>
      <Row>
        
        <Col>
          <Form.Group controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </Form.Group>
      </Row>

      <Form.Group controlId="dateOfBirth">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control
          type="text"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="state">
        <Form.Label>State</Form.Label>
        <Form.Control
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="zip">
        <Form.Label>ZIP</Form.Label>
        <Form.Control
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="contactNumber">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="careerObjective">
        <Form.Label>Career Objective</Form.Label>
        <Form.Control
          as="textarea"
          name="careerObjective"
          value={formData.careerObjective}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="schoolName1">
        <Form.Label>School Name 1</Form.Label>
        <Form.Control
          type="text"
          name="schoolName1"
          value={formData.schoolName1}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="education1">
        <Form.Label>Education 1</Form.Label>
        <Form.Control
          type="text"
          name="education1"
          value={formData.education1}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="course1">
        <Form.Label>Course 1</Form.Label>
        <Form.Control
          type="text"
          name="course1"
          value={formData.course1}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="address1">
        <Form.Label>Address 1</Form.Label>
        <Form.Control
          as="textarea"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="score1">
        <Form.Label>Score 1</Form.Label>
        <Form.Control
          type="text"
          name="score1"
          value={formData.score1}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="yearOfCompletion1">
        <Form.Label>Year of Completion 1</Form.Label>
        <Form.Control
          type="text"
          name="yearOfCompletion1"
          value={formData.yearOfCompletion1}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="schoolName2">
        <Form.Label>School Name 2</Form.Label>
        <Form.Control
          type="text"
          name="schoolName2"
          value={formData.schoolName2}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="education2">
        <Form.Label>Education 2</Form.Label>
        <Form.Control
          type="text"
          name="education2"
          value={formData.education2}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="course2">
        <Form.Label>Course 2</Form.Label>
        <Form.Control
          type="text"
          name="course2"
          value={formData.course2}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="address2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control
          as="textarea"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="score2">
        <Form.Label>Score 2</Form.Label>
        <Form.Control
          type="text"
          name="score2"
          value={formData.score2}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="yearOfCompletion2">
        <Form.Label>Year of Completion 2</Form.Label>
        <Form.Control
          type="text"
          name="yearOfCompletion2"
          value={formData.yearOfCompletion2}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="collegeName">
        <Form.Label>College Name</Form.Label>
        <Form.Control
          type="text"
          name="collegeName"
          value={formData.collegeName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="education3">
        <Form.Label>Education 3</Form.Label>
        <Form.Control
          type="text"
          name="education3"
          value={formData.education3}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="course3">
        <Form.Label>Course 3</Form.Label>
        <Form.Control
          type="text"
          name="course3"
          value={formData.course3}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="specialization">
        <Form.Label>Specialization</Form.Label>
        <Form.Control
          type="text"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="address3">
        <Form.Label>Address 3</Form.Label>
        <Form.Control
          as="textarea"
          name="address3"
          value={formData.address3}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="score3">
        <Form.Label>Score 3</Form.Label>
        <Form.Control
          type="text"
          name="score3"
          value={formData.score3}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="courseDuration">
        <Form.Label>Course Duration</Form.Label>
        <Form.Control
          type="text"
          name="courseDuration"
          value={formData.courseDuration}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="keySkills">
        <Form.Label>Key Skills</Form.Label>
        <Form.Control
          as="textarea"
          name="keySkills"
          value={formData.keySkills}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="careerPreferences">
        <Form.Label>Career Preferences</Form.Label>
        <Form.Control
          as="textarea"
          name="careerPreferences"
          value={formData.careerPreferences}
          onChange={handleChange}
        />
      </Form.Group>
    <br></br>
      <Button variant="dark" type="submit">
        Update Profile
      </Button>
    </Form>
    </div>
    </div>
  );
};

export default StudentProfileEdit;
