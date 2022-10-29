import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import headerImg from "../assets/img/header-img.svg";
import bannerImg from "../assets/img/ast.svg"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Brands } from "./Brands";

export const Move_Challenge_Banner = () => {
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
                  <span className="tagline">Move Student Challenge</span>
                  <h1>{`Join us in challenge to explore`} <span className="txt-rotate" dataPeriod="700" data-rotate='[ "MOVE", "WEB 3", "APTOS" ]'><span className="wrap"><br></br><p></p>{text}</span></span></h1>
                  <p>Dayone, co-hosted with Aptos, will hold the first Move Student Challenge in Stanford University. You’ll be hacking for 36 hours straight but before that we will host a workshop to teach anything you need to succeed! There will be home breakfasts, prizes and rewards, and job opportunies to Top Web 3 companies! Whether you’re a seasoned veteran or just getting started, we’ve got your back every step of the way. </p>
                    <HashLink smooth to="#connect">
                      <button>
                        Sign up for the challenge <ArrowRightCircle size={25} />
                      </button>
                    </HashLink>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={bannerImg} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
    
  )
}
