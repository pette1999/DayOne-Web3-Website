import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (status === 'success') clearFields();

    if (window.innerWidth > 800) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 800) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={15} md={12} xs={40}>
        { 
          isDesktop ? (
            <div className="newsletter-bx wow slideInUp">
              <Row>
                <Col xl={6} lg={12} md={12} xs={40}>
                  <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
                  {status === 'sending' && <Alert>Sending...</Alert>}
                  {status === 'error' && <Alert variant="danger">{message}</Alert>}
                  {status === 'success' && <Alert variant="success">{message}</Alert>}
                </Col>
                <Col xl={6} lg={12} md={12} xs={40}>
                  <form onSubmit={handleSubmit}>
                    <div className="new-email-bx">
                      <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                </Col>
              </Row>
            </div>
          ) : (
            <div className="newsletter-s">
              <Row>
                <Col xl={6} lg={12} md={12} xs={40}>
                  <h3>Subscribe to our Newsletter & Never miss latest updates</h3>
                  {status === 'sending' && <Alert>Sending...</Alert>}
                  {status === 'error' && <Alert variant="danger">{message}</Alert>}
                  {status === 'success' && <Alert variant="success">{message}</Alert>}
                </Col>
                <Col xl={6} lg={12} md={12} xs={40}>
                  <form onSubmit={handleSubmit}>
                    <div className="new-email-s">
                      <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                </Col>
              </Row>
            </div>
          )
        }
      </Col>
  )
}
