import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Alert } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = ({status, message, onValidated}) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');    
  // const formInitialDetails = {
  //   firstName: '',
  //   lastName: '',
  //   email: ''
  // }

  useEffect(() => {
    if(status === "success") clearFields();
  }, [status])

  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
  }
  
  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Sign Up');
  // const [status, setStatus] = useState({});

  // const onFormUpdate = (category, value) => {
  //     setFormDetails({
  //       ...formDetails,
  //       [category]: value
  //     })
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    console.log(email, firstName, lastName);
    email &&
    firstName &&
    lastName &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email,
      MERGE1: firstName,
      MERGE2: lastName,
    });
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>
                  <span id="connect"></span>
                  Move Student Challenge
                </h2>
                <p>Sign up to learn Move and build on Aptos</p>
                {status === 'sending' && <Alert>Sending...</Alert>}
                {(status === 'error') && <Alert variant="danger"><div dangerouslySetInnerHTML={{ __html: message }}/></Alert>}
                {status === 'success' && <Alert variant="success">Thank you for RSVP!</Alert>}
                <form onSubmit={handleSubmit}>
                  {status !== "success" ? (
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={firstName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={lastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <input type="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
                      </Col>
                      {/* <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                      </Col> */}
                      <Col size={12} className="px-1">
                        {/* <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea> */}
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  ):null}
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
