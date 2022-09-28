import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/dayzero.png';
import linkedin from "../assets/img/linkedin.svg";
import twitter from "../assets/img/twitter.svg";
import discord from "../assets/img/discord.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="logo-icon" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://twitter.com/move_dayone"><img src={twitter} alt="Icon" /></a>
              <a href="#"><img src={discord} alt="Icon" /></a>
              <a href="https://www.linkedin.com/company/dayone-edu"><img src={linkedin} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. Fanguard Inc. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
