import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Brands } from "./Brands";

export const Banner = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "MOVE", "WEB 3", "APTOS" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <div>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Dayone Web 3</span>
                  <h1>{`We are here to explore`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "MOVE", "WEB 3", "APTOS" ]'><span className="wrap">{text}</span></span></h1>
                    <p>We are the FIRST #Web 3 full education platform, makes it much easier for you to explore how you can combine your professional skills with blockchain with structured hands-on courses designed by experienced industry smart contract engineer and backed by major Layer1 blockchain. </p>
                    <Router>
                      <HashLink smooth to="#connect">
                        <button>
                          Let’s Connect <ArrowRightCircle size={25} />
                        </button>
                      </HashLink>
                    </Router>
                  
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
    
  )
}
