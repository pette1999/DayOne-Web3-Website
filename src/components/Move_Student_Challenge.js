import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Move_Student_Challenge = () => {
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
                <p>Dayone, co-hosted with Aptos, will hold the first Move Student Challenge in Stanford University. We hope to bring together over 1,000 students to build the future in Web 3.0 using Move starting from Stanford University. You’ll be hacking for 36 hours straight but before that we will host a workshop to teach anything you need to succeed! There will be home breakfasts, prizes and rewards, and job opportunies to Top Web 3 companies! . But there will be yoga breaks, home breakfasts and maybe even puppies. Whether you’re a seasoned veteran or just getting started, we’ve got your back every step of the way. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="second">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Info Session</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Workshop</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Go Hack</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <h3>Kick off Information Session</h3>
                      <h5 className="eventtitle">Move: Game Changer to the Web 3 World<br></br>What to expect after Bitcoin and Ethereum?</h5>
                      <p><b>Time:</b> Oct 14, 2022 12pm - 1pm<br></br><b>Location:</b> <span className="address">GSB Botha Chan Building RM 104 (EC104), formerly Faculty West 104</span><br></br><a href="https://maps.app.goo.gl/wxsZBoBnJMsjm7o96?g_st=ic" target="_black">[Google Maps]</a> <a href="https://maps.apple.com/?ll=37.427900,-122.161952&q=My%20Location&_ext=EiYpFj/idzK2QkAxTTsxEbqKXsA5lBQI1Fi3QkBB6Z/KugCKXsBQBA%3D%3D&t=m" target="_blank">[Apple Maps]</a></p>
                      <p>Topics include Dayone intro, Aptos intro and Stanford Move Student Challenge intro.<br></br> Prerequisite of Move Student Challenge: as long as you are eager to learn Web 3.0!</p>
                      <p>Feel it too complicated to dive into Web 3 and confused about those buzzwords? We <a href="https://twitter.com/move_dayone" target="_blank">@move_dayone</a> — a platform focusing on lowering the barrier of Web 3 learning, partnered with <a href="https://twitter.com/AptosLabs" target="_blank">@AptosLabs</a> to hold an information session THIS FRIDAY 10/14  to talk about the brand-new programming language called Move, a game changer to Web 3.</p>
                      <p><b>Speakers:</b><br></br>Claire - Founder@Dayone<br></br>Diane - GSB club representative<br></br>David - Founding Engineer@Aptos Labs<br></br>Neil - Head of Strategy@Aptos Labs</p>
                      <p><b>🚀 Join the event to get:</b> <br></br>🎁 Amazing swags <br></br>🥪 Free lunch Provided <br></br>🧙‍♀️ Chances to win $100 Amazon gift Card</p>
                      <p>
                        <a className="resp-sharing-button__link" href="http://twitter.com/share?text=🔥Dayone x Aptos is coming to Stanford THIS FRIDAY 10/14 - What to expect after Bitcoin and Ethereum🚀@move_dayone&url=https://freeimage.host/i/Z5jQyu&hashtags=stanford,dayone,aptos,blockchain" target="_blank" rel="noreferrer" aria-label="Share on Twitter">
                          <div className="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large">
                            <div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm5.26 9.38v.34c0 3.48-2.64 7.5-7.48 7.5-1.48 0-2.87-.44-4.03-1.2 1.37.17 2.77-.2 3.9-1.08-1.16-.02-2.13-.78-2.46-1.83.38.1.8.07 1.17-.03-1.2-.24-2.1-1.3-2.1-2.58v-.05c.35.2.75.32 1.18.33-.7-.47-1.17-1.28-1.17-2.2 0-.47.13-.92.36-1.3C7.94 8.85 9.88 9.9 12.06 10c-.04-.2-.06-.4-.06-.6 0-1.46 1.18-2.63 2.63-2.63.76 0 1.44.3 1.92.82.6-.12 1.95-.27 1.95-.27-.35.53-.72 1.66-1.24 2.04z"/></svg>
                            </div>
                            <span>Share on Twitter</span>
                          </div>
                        </a>
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h3>Dayone Move Workshop / Office hours</h3>
                      <p><b>Time:</b> 6 weeks, starts from Nov 6, 2022<br></br></p>
                      <p><b>The Move workshop covers:</b> <br/>* Comprehensive understanding of Web 3 fundamentals<br/>* Tech stack including ETH and Aptos, Solidity and Move<br/>* Hands-on end-to-end industrial level Web 3 project experiences<br/><b>Aptos Labs</b> will hold an 1h office hour once per week.</p>
                      <p className="apply_button">
                        <a href="/#bootcamp" rel="noreferrer">
                          <button className=""><span>More workshop details</span></button>
                        </a>
                      </p>
                      
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
