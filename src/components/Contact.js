import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Alert } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = ({status, message, onValidated}) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
    
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: ''
  }

  useEffect(() => {
    if(status === "success") clearFields();
  }, [status])

  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
  }
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('RSVP');
  // const [status, setStatus] = useState({});
  const listId = "formDetails"
  const apikey = process.env.MAILCHIMP_API

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    console.log(formDetails);
    setEmail(formDetails['email']);
    setFirstName(formDetails['firstName'])
    setLastName(formDetails['lastName'])
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email,
      MERGE1: firstName,
      MERGE2: lastName,
    });
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   console.log(formDetails)
  //   let response = await fetch(`https://us13.api.mailchimp.com/3.0/lists${listId}/members`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //       Authorization: `Basic ${apikey}`,
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send");
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
  //   // if (result.code == 200) {
  //   //   setStatus({ succes: true, message: 'Message sent successfully'});
  //   // } else {
  //   //   setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
  //   // }
  // };

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
                  Challenge Kick off Events
                </h2>
                <p>Join to learn what's next after Bitcoin and Ethereum</p>
                <form onSubmit={handleSubmit}>
                  {status === 'sending' && <Alert>Sending...</Alert>}
                  {status === 'error' && <Alert variant="danger">{message}</Alert>}
                  {status === 'success' && <Alert variant="success">{message}</Alert>}
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    {/* <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col> */}
                    <Col size={12} className="px-1">
                      {/* <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea> */}
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {/* {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } */}
                    {/* {status === "sending" && (
                      <div className="mc__alert mc__alert--sending">
                        sending...
                      </div>
                    )}
                    {status === "error" && (
                      <div 
                        className="mc__alert mc__alert--error"
                        dangerouslySetInnerHTML={{ __html: message }}
                      />
                    )}
                    {status === "success" && (
                      <div
                        className="mc__alert mc__alert--success"
                        dangerouslySetInnerHTML={{ __html: message }}
                      />
                    )} */}
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
