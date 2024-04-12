import { Navbar, Container, Nav, Form, Button, Card,Dropdown } from 'react-bootstrap';
import {useNavigate, Link } from 'react-router-dom';
import React, { useState ,useEffect} from 'react';


const AllJobPosted = () => {
    const [jobs, setJobs] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(localStorage.getItem('token'))
    const id = localStorage.getItem('token');

    fetch(`http://localhost:1337/api/getJobPosted/${id}`)
        .then((response) => {
            const reader = response.body.getReader();
            console.log(reader)
            reader.read().then(({ done, value }) => {
                if (done) {
                    console.log('end...')
                    return;
                }
                const decoder = new TextDecoder();
                const strData = decoder.decode(value)
                const data = JSON.parse(strData)
                console.log(data)
                setJobs(data)
            });
        })
}, [])
  const handleViewApplicants = (id) => {

    fetch(`http://localhost:1337/api/getCandidateList/${id}`)
    .then((response) => response.json())
    .then((data) => {
        navigate('/LOSA', { state: { data: data } });
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
    
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
      <br />
      <br />
      <br />
      <br />
      <div class="container text-center">
        <div class="row justify-content-start">
          <div className="d-flex justify-content-around">
            
            
            {jobs?.map((job) => (  
              <Button bg="dark" variant="light" onClick={() => handleViewApplicants(job._id)}>   
                <Card style={{ width: '18rem', height: '22rem' }}>
                  <Card.Img
                    variant="top"
                    src="https://img.freepik.com/free-vector/gradient-coding-developers-logo_23-2148809440.jpg?w=2000"
                    height="280"
                  />
                  <Card.Body>
                     <Card.Title>{job.jobRole}</Card.Title>
                     {/* <Card.Text>{job.jobRole}</Card.Text> */}
                  </Card.Body>
                </Card>
             
            </Button>
 ))}
            
          </div>
        </div>
      </div>
      <br />
     
      <br />
      <br />
    </div>
  );
}

export default AllJobPosted;

// import React, { useState ,useEffect} from 'react';
// import { Card, Button, Modal, ListGroup } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const CompanyDashboard = () => {
//   const [jobs, setJobs] = useState();
//   const navigate = useNavigate();
//   useEffect(() => {
//     console.log(localStorage.getItem('token'))
//     const id = localStorage.getItem('token');

//     fetch(`http://localhost:1337/api/getJobPosted/${id}`)
//         .then((response) => {
//             const reader = response.body.getReader();
//             console.log(reader)
//             reader.read().then(({ done, value }) => {
//                 if (done) {
//                     console.log('end...')
//                     return;
//                 }
//                 const decoder = new TextDecoder();
//                 const strData = decoder.decode(value)
//                 const data = JSON.parse(strData)
//                 console.log(data)
//                 setJobs(data)
//             });
//         })
// }, [])
//   const handleViewApplicants = (id) => {

//     fetch(`http://localhost:1337/api/getCandidateList/${id}`)
//     .then((response) => response.json())
//     .then((data) => {
//         navigate('/LOSA', { state: { data: data } });
//       console.log(data);
//     })
//     .catch((error) => {
//       // Handle any errors
//       console.error(error);
//     });
    
//   };

  

//   return (
//     <div>
//       <h1>Company Dashboard</h1>
//       <div className="card-container">
//         {jobs?.map((job) => (
//             <Card  key={job._id} style={{ width: '18rem', height: '22rem' }} onClick={() => handleViewApplicants(job._id)}  >
//                   <Card.Img
//                     variant="top"
//                     src="https://images-platform.99static.com/FWvZUrBBgg_FQbdXlquX0lf2KSI=/500x500/top/smart/99designs-contests-attachments/28/28801/attachment_28801044"
//                     height="280"
//                   />
//                   <Card.Body>
//                     <Card.Title>{job.jobRole}</Card.Title>
//                     <Card.Text>25/10/22 </Card.Text>
//                   </Card.Body>
//                 </Card>
//         ))}

//             {/* <Card.Body>
//               <Card.Title>{job.jobRole}</Card.Title>
//               <Button variant="primary" onClick={() => handleViewApplicants(job._id)}>
//                 View Applicants
//               </Button>
//             </Card.Body> */}
          
        
//       </div>

//     </div>
//   );
// };

// export default CompanyDashboard;
