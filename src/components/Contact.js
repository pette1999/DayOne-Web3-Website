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
                {status === 'sending' && <Alert>Sending...</Alert>}
                {(status === 'error') && <Alert variant="danger"><div className="mc__alert mc__alert--error" dangerouslySetInnerHTML={{ __html: message }}/></Alert> && setButtonText("Error! Try Again...")}
                {status === 'success' && <Alert variant="success"><div className="mc__alert mc__alert--success" dangerouslySetInnerHTML={{ __html: message }}/></Alert>}
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
