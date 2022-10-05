import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Move Student Challenge</h2>
                <h3>DAYONE x APTOS x STANFORD</h3>
                <p>Dayone, co-hosted with Aptos, will hold the first Move Student Challenge in Stanford University. We hope to bring together over 1,000 students to build the future in Web 3.0 using Move starting from Stanford University. You’ll be hacking for 36 hours straight but before that we will host a workshop to teach Move . But there will be yoga breaks, home breakfasts and maybe even puppies. Whether you’re a seasoned veteran or just getting started, we’ve got your back every step of the way. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Info Session</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Preparation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Go Hack</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <h3>Challenge Kick off Events</h3>
                      <p><b>Time:</b> Oct 14, 2022 12pm - 1pm<br></br><b>Location:</b> TBD<br></br></p>
                      <p>Topics include Dayone intro, Aptos intro and Stanford Move Student Challenge intro.<br></br> Prerequisite of Move Student Challenge: as long as you are eager to learn Web 3.0!</p>
                      <h4>Join the Waiting list, Details Coming Soon!</h4>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h3>Dayone Move Workshop / Office hours</h3>
                      <p><b>Time:</b> 6 weeks, starts from Oct 31, 2022<br></br></p>
                      <p><b>Dayone</b> will provide Move workshop and course for challenge participants.<br></br><b>Aptos Labs</b> will hold an 1h office hour once per week.</p>
                      {/* <h4>Join the waitlist, Details Coming Soon...</h4> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h3>Onsite Challenge</h3>
                      <p><b>Time:</b> Jan 2023 <br></br><b>Location:</b> TBD</p>
                      {/* <h4>Join the waitlist, Details Coming Soon...</h4> */}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
